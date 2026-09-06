import { getArticles, getPosts, getWeeks } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

function stripFrontmatterHeadings(md: string): string {
  return md.replace(/^---[\s\S]*?---\n/, "").trim();
}

export async function GET() {
  const articles = await getArticles();
  const posts = await getPosts();
  const weeks = await getWeeks();
  const out: string[] = [];
  out.push(`# ${SITE.name} — full text`);
  out.push("");
  out.push(`> ${SITE.description}`);
  out.push("");
  out.push(`Canonical site: ${SITE.url}. Attribution: "${SITE.name}" with a link to the canonical URL of each piece. Editor: ${SITE.editor}.`);
  out.push("");
  for (const a of articles) {
    out.push("---");
    out.push("");
    out.push(`# ${a.title}`);
    out.push("");
    out.push(`URL: ${SITE.url}/articles/${a.slug}`);
    out.push(`Section: Articles · ${a.categoryLabel} · ${a.kindLabel}${a.series ? ` · ${a.series}` : ""}`);
    out.push(`Byline: ${a.author}${a.editor ? `, edited by ${a.editor}` : ""}`);
    if (a.date) out.push(`Published: ${a.date}`);
    out.push(`Dek: ${a.dek}`);
    out.push(`Epigraph: "${a.epigraph.text}" (statistic: ${a.epigraph.stat})`);
    if (a.people.length) out.push(`People: ${a.people.join("; ")}`);
    if (a.companies.length) out.push(`Companies: ${a.companies.join("; ")}`);
    out.push("");
    out.push(stripFrontmatterHeadings(a.markdown));
    out.push("");
  }
  for (const p of posts) {
    out.push("---");
    out.push("");
    out.push(`# ${p.title}`);
    out.push("");
    out.push(`URL: ${SITE.url}/analysis/${p.slug}`);
    out.push(`Section: Analysis · ${p.categoryLabel} · ${p.kindLabel}`);
    out.push(`Byline: ${p.byline ?? p.author}${p.role ? `, ${p.role}` : ""}`);
    if (p.date) out.push(`Published: ${p.date}`);
    out.push(`Dek: ${p.dek}`);
    out.push(`Epigraph: "${p.epigraph.text}" (statistic: ${p.epigraph.stat})`);
    out.push("");
    out.push(stripFrontmatterHeadings(p.markdown));
    out.push("");
  }
  out.push("---");
  out.push("");
  out.push("# The Signal — weekly moves");
  out.push("");
  for (const w of weeks) {
    out.push(`## ${w.week} — ${w.headline}`);
    out.push(`URL: ${SITE.url}/signal/${w.week}`);
    out.push("");
    out.push(w.read);
    out.push("");
    for (const m of w.moves) {
      out.push(`- ${m.person} → ${m.to} as ${m.title}${m.from ? `, from ${m.from}` : ""} (${m.date}; ${m.type}; ${m.confidence}; source: ${m.sourceUrl})${m.read ? ` — ${m.read}` : ""}`);
    }
    out.push("");
  }
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
