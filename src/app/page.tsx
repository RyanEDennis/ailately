import Link from "next/link";
import { getArticles, getPosts, getWeeks, getPeople } from "@/lib/content";
import { LeadCard, SideCard } from "@/components/FeaturedCard";
import ArticleList from "@/components/ArticleList";
import MovesList from "@/components/Moves";
import { toListItem, categoryCounts } from "@/lib/list";
import { formatRange } from "@/lib/slug";
import { SITE } from "@/lib/site";

export default async function Home() {
  const articles = await getArticles();
  const posts = await getPosts();
  const weeks = await getWeeks();
  const people = await getPeople();

  const lead = articles.find((a) => a.slug === "biggest-ai-hires-of-2026-so-far") ?? articles.find((a) => a.featured) ?? articles[0];
  const featured = articles.filter((a) => a.featured && a.slug !== lead.slug).slice(0, 2);
  const rest = articles.filter((a) => a.slug !== lead.slug && !featured.some((f) => f.slug === a.slug));
  const week = weeks.find((w) => w.moves.length) ?? weeks[0];
  const mostMentioned = [...people].sort((a, b) => b.pieces.length + b.moves.length - (a.pieces.length + a.moves.length)).slice(0, 12);

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
      <section className="grid gap-5 pt-8 lg:grid-cols-[1.55fr_1fr]" aria-label="Featured">
        <LeadCard piece={lead} />
        <div className="grid gap-5">
          {featured.map((f) => (
            <SideCard key={f.slug} piece={f} label={f.slug.includes("2025") ? "The first post" : "Featured"} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-12 lg:grid-cols-[1fr_19rem]">
        <div>
          <div className="flex items-baseline justify-between rule-strong pt-4 pb-3">
            <h2 className="kicker">Articles · {SITE.edition}</h2>
            <Link href="/articles" className="meta hover:text-blue">All {articles.length} pieces →</Link>
          </div>
          <ArticleList items={rest.map(toListItem)} categories={categoryCounts(rest)} />
        </div>

        <aside className="space-y-12" aria-label="Sidebar">
          {week && (
            <section>
              <div className="flex items-baseline justify-between rule-strong pt-4 pb-3">
                <h2 className="kicker kicker--peri inline-flex items-center gap-2">
                  <span className="orbs" aria-hidden="true"><i /><i /><i /></span> The Signal
                </h2>
                <Link href="/signal" className="meta hover:text-blue">Feed →</Link>
              </div>
              <p className="meta tnum">{week.week} · {formatRange(week.range.start, week.range.end)}</p>
              <h3 className="mt-2 text-[1.25rem] leading-tight font-medium">
                <Link href={`/signal/${week.week}`} className="u-draw">{week.headline}</Link>
              </h3>
              <p className="mt-2 text-[0.92rem] leading-snug text-ink-soft line-clamp-5">{week.read}</p>
              <div className="mt-3">
                <MovesList moves={week.moves.slice(0, 3)} compact />
              </div>
            </section>
          )}

          <section>
            <div className="flex items-baseline justify-between rule-strong pt-4 pb-3">
              <h2 className="kicker kicker--mocha">Opinion</h2>
              <Link href="/blog" className="meta hover:text-blue">All →</Link>
            </div>
            <ol className="list-none p-0 m-0 space-y-4">
              {posts.map((p) => (
                <li key={p.slug} className="row" data-row data-selected="false">
                  <p className="meta">{p.byline ?? p.author}</p>
                  <h3 className="text-[1.08rem] leading-snug font-medium">
                    <Link href={`/blog/${p.slug}`} data-primary className="u-draw">{p.title}</Link>
                  </h3>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <div className="flex items-baseline justify-between rule-strong pt-4 pb-3">
              <h2 className="kicker">People, lately</h2>
              <Link href="/people" className="meta hover:text-blue">Index →</Link>
            </div>
            <ul className="sans flex flex-wrap gap-1.5 text-[0.8rem]">
              {mostMentioned.map((p) => (
                <li key={p.slug}>
                  <Link href={`/people/${p.slug}`} className="inline-block rounded-full border border-ink/15 px-2.5 py-0.5 text-ink-soft transition hover:border-blue hover:text-blue">
                    {p.name} <span className="tnum text-gray">{p.pieces.length + p.moves.length}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </>
  );
}
