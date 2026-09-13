import { getArticles, getPosts, getWeeks } from "@/lib/content";
import type { Piece } from "@/lib/content";
import HomeFeed, { type Panel } from "@/components/HomeFeed";
import { formatRange, formatDate } from "@/lib/slug";
import { getComics, type Comic } from "@/lib/comics";
import { SITE, FLAGSHIP_POST } from "@/lib/site";

const ACCENT: Record<string, string> = {
  hiring: "#88B04B",
  agents: "#6667AB",
  models: "#0F4C81",
  compute: "#A47864",
  capital: "#BE3455",
  enterprise: "#0F4C81",
  policy: "#6667AB",
  safety: "#FF6F61",
  web3: "#A47864",
  applied: "#88B04B",
  consumer: "#FF6F61",
  labor: "#0F4C81",
  research: "#6667AB",
  geopolitics: "#FF6F61",
};

function accentFor(p: Piece): string {
  return ACCENT[p.category] ?? "#0F4C81";
}

function metaFor(p: Piece): string {
  return `${p.readingMinutes} min read · ${p.sources.length} source${p.sources.length === 1 ? "" : "s"}`;
}

function badgeFor(p: Piece): string | undefined {
  if (p.automated) return "Automated report";
  if (p.slug === "biggest-ai-hires-of-2025") return "The first post";
  if (p.featured) return "Featured";
  if (p.date) return formatDate(p.date, { month: "short", day: "numeric", year: "numeric" });
  return undefined;
}

function storyPanel(p: Piece, opts: { lead?: boolean; epigraph?: boolean } = {}): Panel {
  const isBlog = p.section === "blog";
  return {
    type: "story",
    href: isBlog ? `/analysis/${p.slug}` : `/articles/${p.slug}`,
    kicker: isBlog ? p.kindLabel : p.categoryLabel,
    kindLabel: isBlog ? undefined : p.kindLabel,
    title: p.title,
    dek: p.dek,
    accent: accentFor(p),
    epigraph: opts.epigraph && p.epigraph?.text ? { text: p.epigraph.text, stat: p.epigraph.stat } : undefined,
    people: p.people,
    meta: metaFor(p),
    cta: opts.lead ? "Read the analysis" : "Read",
    badge: opts.lead ? undefined : badgeFor(p),
    lead: opts.lead,
  };
}

function comicPanel(c: Comic): Panel {
  return {
    type: "comic",
    href: `/sunday-funnies/${c.slug}`,
    title: c.title,
    image: c.image,
    alt: c.alt,
    caption: c.caption,
    dateLabel: formatDate(c.date, { month: "short", day: "numeric", year: "numeric" }),
  };
}

export default async function Home() {
  const articles = await getArticles();
  const posts = await getPosts();
  const weeks = await getWeeks();

  // The lineup that opens the homepage today: the flagship essay, this week's
  // strip, the second featured essay, then the previous strip.
  const featuredPosts = posts.filter((p) => p.featured);
  const lead =
    featuredPosts.find((p) => p.slug === FLAGSHIP_POST) ??
    featuredPosts[0] ??
    articles.find((a) => a.slug === "biggest-ai-hires-of-2026-so-far") ??
    articles.find((a) => a.featured) ??
    articles[0];
  const secondPost = featuredPosts.find((p) => p.slug !== lead.slug);
  const comics = getComics(); // newest first
  const featuredArticles = articles.filter((a) => a.featured && a.slug !== lead.slug).slice(0, 2);
  const shown = new Set<string>([lead.slug, ...featuredArticles.map((f) => f.slug)]);
  const recent = articles.filter((a) => !shown.has(a.slug)).slice(0, 4);
  const week = weeks.find((w) => w.moves.length) ?? weeks[0];

  const panels: Panel[] = [];
  panels.push(storyPanel(lead, { lead: true, epigraph: true }));
  if (comics[0]) panels.push(comicPanel(comics[0]));
  if (secondPost) panels.push(storyPanel(secondPost, { epigraph: true }));
  if (comics[1]) panels.push(comicPanel(comics[1]));

  if (week) {
    panels.push({
      type: "signal",
      weekHref: `/signal/${week.week}`,
      weekLabel: week.week,
      range: formatRange(week.range.start, week.range.end),
      headline: week.headline,
      read: week.read,
      moves: week.moves.slice(0, 3).map((m) => ({
        person: m.person,
        to: m.to,
        title: m.title,
        type: m.type,
        confidence: m.confidence,
        date: m.date,
      })),
    });
  }
  for (const f of featuredArticles) panels.push(storyPanel(f, { epigraph: true }));
  for (const r of recent) panels.push(storyPanel(r));
  panels.push({ type: "exit", articlesCount: articles.length, thesis: SITE.tagline });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "NewsMediaOrganization", name: SITE.name, url: SITE.url, founder: { "@type": "Person", name: SITE.editor }, sameAs: [] },
      { "@type": "WebSite", name: SITE.name, url: SITE.url, potentialAction: { "@type": "SearchAction", target: `${SITE.url}/articles?q={search_term_string}`, "query-input": "required name=search_term_string" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeFeed panels={panels} />
    </>
  );
}
