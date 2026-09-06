import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/content";
import { formatDate } from "@/lib/slug";
import { pieceImage } from "@/lib/images";
import { SITE } from "@/lib/site";
import { authorForName } from "@/lib/authors";

function Byline({ name }: { name: string }) {
  const author = authorForName(name);
  return author ? (
    <Link href={`/authors/${author.slug}`} className="u-draw hover:text-blue">{name}</Link>
  ) : (
    <>{name}</>
  );
}

export const metadata: Metadata = {
  title: "Analysis",
  description: `Analysis and opinion from AI Lately: a featured guest essay plus standing essays by ${SITE.editor}, founder and editor — reasoning as the next cost breakthrough, people as the product, the agent economy's bank, inference as the new oil, and the end of the résumé monopoly.`,
  alternates: { canonical: "/analysis" },
};

export default async function AnalysisPage() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !featured || p.slug !== featured.slug);

  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker kicker--mocha">Analysis</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">Bold claims, real numbers</h1>
      </header>

      {featured && (
        <article className="rule pt-6 pb-8 max-w-[74ch]" data-featured>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="kicker kicker--magenta">Featured</p>
            <span className="meta">
              {featured.categoryLabel} · {featured.kindLabel}
              {featured.date ? ` · ${formatDate(featured.date, { month: "short", day: "numeric", year: "numeric" })}` : ""}
            </span>
          </div>
          {(() => {
            const art = pieceImage(featured.slug, featured.category);
            return art ? (
              <div className="mt-4 overflow-hidden rounded-lg border border-ink/10 bg-cloud" style={{ aspectRatio: "16 / 9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={art.url} alt={art.alt} width={1600} height={900} loading="eager" className="h-full w-full object-cover" />
              </div>
            ) : null;
          })()}
          <h2
            className="mt-3 text-[2.1rem] leading-[1.06] font-medium tracking-[-0.015em] sm:text-[2.6rem]"
            style={{ fontVariationSettings: '"opsz" 60' }}
          >
            <Link href={`/analysis/${featured.slug}`} data-primary className="u-draw">{featured.title}</Link>
          </h2>
          <p className="mt-3 max-w-[64ch] text-[1.12rem] leading-snug text-ink-soft">{featured.dek}</p>
          <blockquote
            className="mt-4 max-w-[60ch] border-l-2 border-mocha pl-3 italic text-[1.02rem] leading-snug text-ink-soft"
            style={{ fontFamily: "var(--font-display)", fontOpticalSizing: "auto" }}
          >
            “{featured.epigraph.text}”
          </blockquote>
          <p className="meta mt-4">
            <Byline name={featured.byline ?? featured.author} />
            {featured.role ? `, ${featured.role}` : ""}
            {featured.editor ? <> · Edited by <Byline name={featured.editor} /></> : ""}
            <span className="tnum"> · {featured.readingMinutes} min · {featured.sources.length} sources</span>
          </p>
        </article>
      )}

      <ol className="reveal list-none p-0 m-0">
        {rest.map((p, i) => (
          <li key={p.slug} className="row grid gap-x-5 gap-y-2 rule py-6 md:grid-cols-[3.2rem_1fr_11rem]" data-row data-selected="false">
            <span className="num mono hidden text-[0.85rem] pt-1 md:block" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="kicker kicker--mocha">{p.categoryLabel}</p>
              <h2 className="mt-1.5 text-[1.6rem] leading-[1.15] font-medium tracking-[-0.008em]" style={{ fontVariationSettings: '"opsz" 40' }}>
                <Link href={`/analysis/${p.slug}`} data-primary className="u-draw">{p.title}</Link>
              </h2>
              <p className="mt-2 max-w-[62ch] text-[0.98rem] leading-snug text-ink-soft">{p.dek}</p>
              <blockquote className="mt-3 max-w-[60ch] border-l-2 border-mocha pl-3 italic text-[0.95rem] text-ink-soft">“{p.epigraph.text}”</blockquote>
            </div>
            <div className="meta md:text-right md:pt-1">
              <p><Byline name={p.byline ?? p.author} /></p>
              <p className="tnum">{p.readingMinutes} min · {p.sources.length} sources</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
