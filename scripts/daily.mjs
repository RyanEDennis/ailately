#!/usr/bin/env node
// AI Lately daily newsdesk.
//
// Once a day: gather leads from vetted public sources (company newsrooms, SEC EDGAR 8-K Item 5.02,
// arXiv), pick the strongest untold lead, draft one article in house style with the Anthropic API,
// enforce the style linter, and write it to disk. AUTO_PUBLISH governs whether it lands in
// content/articles (live on the next Vercel deploy) or content/drafts (a pull request for review).
//
// Every outbound request routes through the guarded client; LinkedIn is blocked in code.
//
// Env:
//   ANTHROPIC_API_KEY   required to draft
//   AUTO_PUBLISH=true    publish to content/articles; anything else writes content/drafts
//   SINCE_DAYS=3         lookback window for leads
//   DRY_RUN=true         gather and print leads, draft nothing

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { gatherLeads } from "./lib/sources.mjs";
import { draft } from "./lib/anthropic.mjs";
import { slugify } from "./_slug.mjs";

const ROOT = process.cwd();
const AUTO_PUBLISH = String(process.env.AUTO_PUBLISH).toLowerCase() === "true";
const DRY_RUN = String(process.env.DRY_RUN).toLowerCase() === "true";
const SINCE_DAYS = Number(process.env.SINCE_DAYS || 3);
const OUT_DIR = path.join(ROOT, "content", AUTO_PUBLISH ? "articles" : "drafts");

const CATEGORY_BY_SECTOR = { ai: "hiring", compute: "compute", web3: "web3", enterprise: "enterprise", research: "research" };

function log(...a) { console.log("[daily]", ...a); }

function existingSlugs() {
  const dirs = ["articles", "drafts"].map((d) => path.join(ROOT, "content", d));
  const slugs = new Set();
  for (const d of dirs) {
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) {
      if (f.endsWith(".md")) slugs.add(f.replace(/^\d+-/, "").replace(/\.md$/, ""));
    }
  }
  return slugs;
}

function scoreLead(l) {
  let s = 0;
  if (l.source === "edgar") s += 5; // primary filing, highest signal
  if (l.source === "newsroom") s += 3;
  if (l.source === "arxiv") s += 2;
  if (/chief|officer|founder|head of|vice president|president/i.test(l.title)) s += 3;
  if (/hire|joins|appoint|named|promoted|steps? down|depart/i.test(l.title)) s += 2;
  const age = Date.parse(l.date);
  if (!Number.isNaN(age)) s += Math.max(0, 3 - (Date.now() - age) / 864e5);
  return s;
}

const SYSTEM = fs.readFileSync(path.join(ROOT, "docs", "HOUSE_STYLE.md"), "utf8") +
  "\n\nYou are the AI Lately automated newsdesk. Draft ONE complete article in the exact markdown format specified above, including full YAML frontmatter. Set kind: automated and author: AI Lately Newsdesk. The article MUST obey the two absolute prohibitions (zero via negativa, zero anaphora) and stay between 1000 and 2100 words. Ground every claim in the supplied lead and its cited source; add context only from widely reported public facts, and cite a source for each. Return ONLY the markdown file content, starting with '---'.";

function buildPrompt(lead, today) {
  const category = CATEGORY_BY_SECTOR[lead.sector] || "research";
  return [
    `Today is ${today}. Draft one AI Lately article from this vetted public lead.`,
    ``,
    `LEAD`,
    `Company: ${lead.company}`,
    `Sector: ${lead.sector}`,
    `Source type: ${lead.source}`,
    `Headline seen: ${lead.title}`,
    `Summary seen: ${lead.summary || "(none)"}`,
    `Primary source URL: ${lead.link}`,
    `Source date: ${lead.date || today}`,
    ``,
    `REQUIREMENTS`,
    `- Frontmatter: set category: ${category}, kind: automated, author: "AI Lately Newsdesk", editor: "Ryan Elliott Dennis", date: ${today}, featured: false, image: "". Build a slug from the headline. Fill seo, tags, people, companies, epigraph (with a real statistic drawn from the source or widely reported public data), and a sources list that includes the primary source URL above plus any additional cited sources you use.`,
    `- Read the hire, filing, or paper as strategy: what capability the company bought, and what it implies for the next twelve months. Name the people involved.`,
    `- Every statistic carries a bracketed [n] marker matching the Sources list.`,
    `- Triple-check: zero via negativa (no not/no/never/without/n't/non-/nor/neither/none/nobody/nowhere/cannot), zero anaphora (consecutive sentences, paragraphs, and list items open with different words).`,
    `Return ONLY the markdown, starting with '---'.`,
  ].join("\n");
}

async function main() {
  log(`mode: ${AUTO_PUBLISH ? "AUTO_PUBLISH → content/articles" : "review → content/drafts"}; since ${SINCE_DAYS}d`);
  const { leads, errors } = await gatherLeads({ sinceDays: SINCE_DAYS });
  log(`gathered ${leads.length} leads, ${errors.length} source errors`);
  for (const e of errors) log("  source error:", e.company || e.source, "—", e.error);

  const seen = existingSlugs();
  const ranked = leads
    .map((l) => ({ l, score: scoreLead(l), slug: slugify(l.title).slice(0, 70) }))
    .filter((x) => x.slug && !seen.has(x.slug))
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) {
    log("no fresh lead cleared the bar today; the desk stays quiet.");
    return;
  }

  if (DRY_RUN) {
    log("DRY_RUN — top leads:");
    for (const r of ranked.slice(0, 8)) log(`  ${r.score.toFixed(1)}  [${r.l.source}] ${r.l.company}: ${r.l.title}`);
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  let chosen = null;
  for (const r of ranked.slice(0, 5)) {
    log(`drafting from: [${r.l.source}] ${r.l.company}: ${r.l.title}`);
    let md;
    try {
      md = await draft({ system: SYSTEM, prompt: buildPrompt(r.l, today), maxTokens: 6000 });
    } catch (e) {
      log("draft failed:", String(e));
      continue;
    }
    if (!md.startsWith("---")) md = md.slice(md.indexOf("---"));
    const slug = (md.match(/^slug:\s*(.+)$/m) || [])[1]?.trim().replace(/['"]/g, "") || r.slug;
    fs.mkdirSync(OUT_DIR, { recursive: true });
    const stamp = today.replace(/-/g, "");
    const file = path.join(OUT_DIR, `${stamp}-${slug}.md`);
    fs.writeFileSync(file, md.endsWith("\n") ? md : md + "\n");
    try {
      execSync(`node scripts/lint-style.mjs "${file}"`, { cwd: ROOT, stdio: "pipe" });
      log(`linter passed: ${path.relative(ROOT, file)}`);
      chosen = { file, lead: r.l };
      break;
    } catch (e) {
      log(`linter rejected the draft; discarding and trying the next lead.`);
      log((e.stdout?.toString() || "").split("\n").filter((l) => l.includes("✗")).slice(0, 6).join("\n"));
      fs.unlinkSync(file);
    }
  }

  if (!chosen) {
    log("every candidate draft failed the linter today; the desk publishes nothing rather than lower the bar.");
    process.exitCode = 0;
    return;
  }

  log(`ready: ${path.relative(ROOT, chosen.file)}`);
  log(AUTO_PUBLISH ? "AUTO_PUBLISH on: the CI job commits this to content/articles and Vercel redeploys." : "review mode: the CI job opens a pull request with this draft.");
}

main().catch((e) => { console.error("[daily] fatal:", e); process.exit(1); });
