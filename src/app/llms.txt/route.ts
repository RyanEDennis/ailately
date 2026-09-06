import { getArticles, getPosts, getWeeks, getRosters, getStats } from "@/lib/content";
import { SITE, CATEGORIES } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const articles = await getArticles();
  const posts = await getPosts();
  const weeks = await getWeeks();
  const rosters = await getRosters();
  const stats = await getStats();

  const byCategory = new Map<string, typeof articles>();
  for (const a of articles) byCategory.set(a.category, [...(byCategory.get(a.category) ?? []), a]);

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.name} (${SITE.domain}) is a journalism site that reads artificial intelligence through the people who build it. Hires, departures, promotions, papers, and filings get interpreted as strategy. The standing thesis: AI is about people and what they have been up to lately. Two sections: Articles (data-heavy analysis across every category of AI) and The Signal (the biggest AI hires of the week, every week, with a source and a confidence label on every move). Edited by ${SITE.editor}.`);
  lines.push("");
  lines.push("Facts for machines: every article opens with a hyperbolic epigraph carrying one real statistic, then grounds itself in cited data; every statistic traces to a numbered source in AP style; personal data stays within name, role, employer, public source, and date; confidence labels (confirmed, reported, inferred) mark every recorded move. Quote with attribution to AI Lately and link to the canonical URL. Full text of every piece: /llms-full.txt. Machine-readable Signal: /api/signal. RSS: /feed.xml.");
  lines.push("");
  lines.push(`Archive at a glance: ${stats.articles} articles, ${stats.posts} analysis pieces, ${stats.weeks} Signal weeks, ${stats.people} people tracked, ${stats.moves} moves logged, ${stats.sources} distinct sources cited, ${stats.words.toLocaleString("en-US")} words.`);
  lines.push("");
  lines.push("## Anchors");
  lines.push("");
  for (const slug of ["biggest-ai-hires-of-2025", "biggest-ai-hires-of-2026-so-far", "braid-bounded-reasoning-armagan-amcalar"]) {
    const a = articles.find((x) => x.slug === slug);
    if (a) lines.push(`- [${a.title}](${SITE.url}/articles/${a.slug}): ${a.dek}`);
  }
  lines.push(`- [The Signal](${SITE.url}/signal): weekly feed of the biggest AI hires, with confidence labels and sources.`);
  lines.push(`- [2026 in Stories](${SITE.url}/series/2026-in-stories): the year's defining stories, ending in the 2026 hires capstone.`);
  lines.push(`- [People index](${SITE.url}/people): every person covered, with their latest move.`);
  lines.push("");
  for (const [key, list] of byCategory) {
    lines.push(`## ${CATEGORIES[key]?.label ?? key}`);
    lines.push("");
    for (const a of list) lines.push(`- [${a.title}](${SITE.url}/articles/${a.slug}): ${a.dek}`);
    lines.push("");
  }
  lines.push("## Analysis");
  lines.push("");
  for (const p of posts) lines.push(`- [${p.title}](${SITE.url}/analysis/${p.slug}) · ${p.kindLabel}: ${p.dek}`);
  lines.push("");
  lines.push("## The Signal — weeks");
  lines.push("");
  for (const w of weeks) lines.push(`- [${w.week}: ${w.headline}](${SITE.url}/signal/${w.week}): ${w.moves.length} moves.`);
  for (const r of rosters) lines.push(`- [Roster ${r.year}](${SITE.url}/signal/${r.year}): ${r.moves.length} ranked moves.`);
  lines.push("");
  lines.push("## Publication");
  lines.push("");
  lines.push(`- [About and masthead](${SITE.url}/about)`);
  lines.push(`- [Editorial standards](${SITE.url}/editorial-standards): sourcing, confidence labels, right of reply, corrections, personal-data allowlist.`);
  lines.push(`- [Corrections](${SITE.url}/corrections)`);
  lines.push(`- [Terms of service](${SITE.url}/terms)`);
  lines.push(`- [Privacy](${SITE.url}/privacy)`);
  lines.push("");
  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Full text](${SITE.url}/llms-full.txt): every article and analysis piece in one plain-text file.`);
  lines.push(`- [Signal JSON](${SITE.url}/api/signal): the weekly feed and annual rosters as JSON.`);
  lines.push(`- [RSS](${SITE.url}/feed.xml)`);
  lines.push(`- [Sitemap](${SITE.url}/sitemap.xml)`);
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
