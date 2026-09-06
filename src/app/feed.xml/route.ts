import { getArticles, getPosts, getWeeks } from "@/lib/content";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET() {
  const articles = await getArticles();
  const posts = await getPosts();
  const weeks = await getWeeks();
  const items: string[] = [];
  for (const a of articles) {
    const url = `${SITE.url}/articles/${a.slug}`;
    items.push(`<item><title>${esc(a.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid>${a.date ? `<pubDate>${new Date(`${a.date}T12:00:00Z`).toUTCString()}</pubDate>` : ""}<category>${esc(a.categoryLabel)}</category><description>${esc(a.dek)}</description><author>${esc(SITE.contact)} (${esc(a.author)})</author></item>`);
  }
  for (const p of posts) {
    const url = `${SITE.url}/analysis/${p.slug}`;
    items.push(`<item><title>${esc(`${p.kindLabel}: ${p.title}`)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><category>${esc(p.kindLabel)}</category><description>${esc(p.dek)}</description><author>${esc(SITE.contact)} (${esc(p.author)})</author></item>`);
  }
  for (const w of weeks) {
    const url = `${SITE.url}/signal/${w.week}`;
    items.push(`<item><title>${esc(`The Signal ${w.week}: ${w.headline}`)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(`${w.range.end}T12:00:00Z`).toUTCString()}</pubDate><category>The Signal</category><description>${esc(w.read)}</description></item>`);
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(SITE.name)}</title>
<link>${SITE.url}</link>
<atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
<description>${esc(SITE.description)}</description>
<language>en-us</language>
<managingEditor>${esc(SITE.contact)} (${esc(SITE.editor)})</managingEditor>
${items.join("\n")}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
