#!/usr/bin/env node
// AI Lately house-style linter.
// Flags via negativa (negation constructions), anaphora (repeated sentence/clause openers),
// word-count bounds, and required frontmatter for every markdown piece.
// Usage: node scripts/lint-style.mjs [paths...]  (defaults to content/articles and content/blog)
// Exit code 1 on any error. Warnings print but pass.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const args = process.argv.slice(2);
const targets = args.length
  ? args
  : ["content/articles", "content/blog"].map((p) => path.join(ROOT, p));

const HARD_NEGATION = [
  /\bnot\b/i,
  /\bno\b/i,
  /\bnever\b/i,
  /\bnothing\b/i,
  /\bnone\b/i,
  /\bnobody\b/i,
  /\bnowhere\b/i,
  /\bneither\b/i,
  /\bnor\b/i,
  /\bwithout\b/i,
  /\bcannot\b/i,
  /\b\w+n't\b/i,
  /\bnon-\w+/i,
];

const SOFT_NEGATION = [
  /\brather than\b/i,
  /\binstead of\b/i,
  /\black(s|ed|ing)?\b/i,
  /\babsen(t|ce)\b/i,
  /\bunable\b/i,
  /\bunlikely\b/i,
  /\bunclear\b/i,
  /\buncertain\b/i,
  /\bfail(s|ed|ure|ures|ing)?\b/i,
  /\bzero\b/i,
  /\bless than\b/i,
  /\bbeyond\b/i,
  /\bmere(ly)?\b/i,
];

const STOP_OPENERS = new Set(); // every repeated opener counts; the rule is absolute.

function splitFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: null, body: src };
  return { fm: m[1], body: m[2] };
}

function stripMarkdown(body) {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^#+\s*/gm, "")
    .replace(/[*_`>]/g, "");
}

function sentences(paragraph) {
  return paragraph
    .split(/(?<=[.!?])\s+(?=[A-Z"“(])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function firstWord(s) {
  const m = s.replace(/^["“(\[]+/, "").match(/[A-Za-z][A-Za-z'’-]*/);
  return m ? m[0].toLowerCase() : "";
}

function lintFile(file) {
  const src = fs.readFileSync(file, "utf8");
  const { fm, body } = splitFrontmatter(src);
  const errors = [];
  const warnings = [];
  const rel = path.relative(ROOT, file);

  if (!fm) errors.push("missing frontmatter");
  const isBlog = rel.includes(`content${path.sep}blog`);
  const isPage = rel.includes(`content${path.sep}pages`) || rel.includes(`content${path.sep}signal`);
  const required = isPage ? ["title"] : ["title", "dek", "category", "author", "epigraph", "sources"];
  for (const key of required) {
    if (fm && !new RegExp(`^${key}:`, "m").test(fm)) errors.push(`frontmatter missing '${key}'`);
  }
  if (isBlog && fm && /^date:/m.test(fm)) errors.push("blog pieces stay undated: remove 'date'");

  // Sources section: split body into prose and the sources block.
  const sourcesIdx = body.search(/^##\s+Sources/m);
  const prose = sourcesIdx >= 0 ? body.slice(0, sourcesIdx) : body;
  const text = stripMarkdown(prose);
  const words = text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  const minWords = isPage ? 120 : 1000;
  const maxWords = isPage ? 6000 : 2100;
  if (words < minWords) errors.push(`word count ${words} below ${minWords}`);
  if (words > maxWords) errors.push(`word count ${words} above ${maxWords}`);

  // Frontmatter title/dek/epigraph text also gets checked for negation.
  const checkable = [];
  if (fm) {
    for (const line of fm.split("\n")) {
      if (/^(title|dek|text|stat|attribution|description):/.test(line.trim()) || /^\s+(text|stat|attribution|description|title):/.test(line)) {
        checkable.push({ where: "frontmatter", line: line.trim() });
      }
    }
  }
  const lines = text.split("\n");
  lines.forEach((line, i) => checkable.push({ where: `line ${i + 1}`, line }));

  for (const { where, line } of checkable) {
    for (const re of HARD_NEGATION) {
      const m = line.match(re);
      if (m) errors.push(`via negativa "${m[0]}" (${where}): ${line.slice(0, 110)}`);
    }
    for (const re of SOFT_NEGATION) {
      const m = line.match(re);
      if (m) warnings.push(`soft negation "${m[0]}" (${where}): ${line.slice(0, 90)}`);
    }
  }

  // Anaphora: consecutive sentences within a paragraph sharing a first word,
  // consecutive paragraphs sharing a first word, consecutive list items sharing a first word,
  // and three or more comma-separated clauses sharing an opener inside one sentence.
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  let prevParaOpener = "";
  paragraphs.forEach((p, pi) => {
    const isList = /^[-*•]\s|^\d+\.\s/.test(p);
    if (isList) {
      const items = p.split(/\n/).map((l) => l.replace(/^[-*•]\s+|^\d+\.\s+/, ""));
      for (let i = 1; i < items.length; i++) {
        if (firstWord(items[i]) && firstWord(items[i]) === firstWord(items[i - 1]))
          errors.push(`anaphora across list items "${firstWord(items[i])}" (para ${pi + 1})`);
      }
    }
    const sents = sentences(p);
    for (let i = 1; i < sents.length; i++) {
      const a = firstWord(sents[i - 1]);
      const b = firstWord(sents[i]);
      if (a && a === b && !STOP_OPENERS.has(a))
        errors.push(`anaphora "${b}" opens consecutive sentences (para ${pi + 1}): ${sents[i].slice(0, 80)}`);
    }
    for (const s of sents) {
      const clauses = s.split(/[,;:]\s+/).map(firstWord).filter(Boolean);
      for (let i = 2; i < clauses.length; i++) {
        if (clauses[i] === clauses[i - 1] && clauses[i] === clauses[i - 2])
          errors.push(`anaphora "${clauses[i]}" opens three clauses (para ${pi + 1}): ${s.slice(0, 80)}`);
      }
    }
    const opener = firstWord(p);
    if (opener && opener === prevParaOpener && !isList)
      errors.push(`anaphora "${opener}" opens consecutive paragraphs (para ${pi + 1})`);
    prevParaOpener = opener;
  });

  // Epigraph must contain a digit (a statistic).
  if (fm && !isPage) {
    const ep = fm.match(/epigraph:[\s\S]*?(?=\n[a-z_]+:|$)/i);
    if (ep && !/\d/.test(ep[0])) errors.push("epigraph carries no statistic (needs a number)");
  }

  // Sources: at least five entries in the frontmatter list.
  if (fm && !isPage) {
    const srcBlock = fm.match(/sources:[\s\S]*?(?=\n[a-z_]+:|$)/i);
    const count = srcBlock ? (srcBlock[0].match(/^\s*-\s+(title|url|n):/gm) || []).length : 0;
    if (count < 5) warnings.push(`only ${count} sources listed in frontmatter (aim for 5+)`);
  }

  return { rel, words, errors, warnings };
}

function collect(target) {
  const stat = fs.statSync(target);
  if (stat.isFile()) return [target];
  return fs
    .readdirSync(target)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(target, f));
}

let failed = 0;
let checked = 0;
for (const t of targets) {
  if (!fs.existsSync(t)) continue;
  for (const file of collect(t)) {
    checked++;
    const r = lintFile(file);
    const status = r.errors.length ? "FAIL" : "ok  ";
    if (r.errors.length) failed++;
    if (r.errors.length || process.env.LINT_VERBOSE) {
      console.log(`${status} ${r.rel} (${r.words} words)`);
      for (const e of r.errors) console.log(`   ✗ ${e}`);
      if (process.env.LINT_VERBOSE) for (const w of r.warnings) console.log(`   ~ ${w}`);
    } else {
      console.log(`${status} ${r.rel} (${r.words} words, ${r.warnings.length} soft warnings)`);
    }
  }
}
console.log(`\n${checked} files checked, ${failed} failing.`);
process.exit(failed ? 1 : 0);
