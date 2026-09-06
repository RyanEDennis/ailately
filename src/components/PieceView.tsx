import Link from "next/link";
import type { Piece, Person } from "@/lib/content";
import { apCitation } from "@/lib/content";
import { formatDate, slugify } from "@/lib/slug";
import { SITE } from "@/lib/site";
import { pieceImage } from "@/lib/images";
import ReadingProgress from "./ReadingProgress";
import CiteButton from "./CiteButton";
import CiteHover from "./CiteHover";
import Toc from "./Toc";

function Epigraph({ text, stat, attribution }: { text: string; stat: string; attribution?: string }) {
  const idx = stat ? text.indexOf(stat) : -1;
  const before = idx >= 0 ? text.slice(0, idx) : text;
  const after = idx >= 0 ? text.slice(idx + stat.length) : "";
  return (
    <figure className="mt-8 max-w-[60ch]">
      <blockquote className="text-[1.45rem] leading-[1.3] italic tracking-[-0.005em] sm:text-[1.7rem]" style={{ fontFamily: "var(--font-display)", fontOpticalSizing: "auto" }}>
        “{before}
        {idx >= 0 && <mark className="stat-mark">{stat}</mark>}
        {after}”
      </blockquote>
      <figcaption className="meta mt-3">{attribution ? attribution : "The claim. Everything below it is the evidence."}</figcaption>
    </figure>
  );
}

export default function PieceView({ piece, related, people, url }: { piece: Piece; related: Piece[]; people: Person[]; url: string }) {
  const isOpinion = piece.section === "blog";
  const citation = apCitation(piece, url);
  const mentioned = people.filter((p) => piece.people.includes(p.name));
  const hero = pieceImage(piece.slug, piece.category);
  return (
    <article className="pt-8" itemScope itemType="https://schema.org/NewsArticle">
      <ReadingProgress />
      <CiteHover sources={piece.sources} />
      <header className="max-w-[70ch]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Link href={isOpinion ? "/blog" : `/category/${piece.category}`} className={`kicker ${isOpinion ? "kicker--mocha" : ""} hover:text-magenta`}>
            {isOpinion ? "Opinion" : piece.categoryLabel}
          </Link>
          <span className="meta">
            {piece.kindLabel}
            {piece.series && (
              <>
                {" · "}
                <Link href={`/series/${slugify(piece.series)}`} className="hover:text-blue">{piece.series}</Link>
              </>
            )}
          </span>
        </div>
        <h1 className="mt-3 text-[2.1rem] leading-[1.06] font-medium tracking-[-0.015em] sm:text-[2.9rem]" style={{ fontVariationSettings: '"opsz" 72' }} itemProp="headline">
          {piece.title}
        </h1>
        <p className="mt-4 text-[1.15rem] leading-snug text-ink-soft" itemProp="description">{piece.dek}</p>
        <div className="meta mt-5 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span itemProp="author" itemScope itemType="https://schema.org/Person">
            <span className="text-ink font-medium" itemProp="name">{piece.byline ?? piece.author}</span>
            {piece.role ? `, ${piece.role}` : ""}
          </span>
          {piece.editor && <span>Edited by {piece.editor}</span>}
          {piece.date ? (
            <time dateTime={piece.date} itemProp="datePublished" className="tnum">{formatDate(piece.date)}</time>
          ) : (
            <span>Undated · evergreen</span>
          )}
          <span className="tnum">{piece.readingMinutes} min read · {piece.wordCount.toLocaleString("en-US")} words · {piece.sources.length} sources</span>
        </div>
        {hero && (
          <figure className="mt-6">
            <div className="overflow-hidden rounded-lg border border-ink/10 bg-cloud" style={{ aspectRatio: "16 / 9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={hero.url} alt={hero.alt} width={1600} height={900} loading="eager" className="h-full w-full object-cover" />
            </div>
            <figcaption className="meta mt-2">
              {hero.alt}. <a href={hero.source} target="_blank" rel="noopener" className="hover:text-blue">Photo · Pexels</a>
            </figcaption>
          </figure>
        )}
        {piece.automated && (
          <p className="sans mt-4 max-w-[60ch] rounded-md border border-ink/15 bg-cloud px-4 py-3 text-[0.82rem] leading-snug text-ink-soft">
            Automated report. This piece was drafted by the AI Lately newsdesk pipeline from public filings and company announcements, checked by the house style linter, and published under the editor's standing rules. Corrections: <a href={`mailto:${SITE.corrections}`} className="text-blue">{SITE.corrections}</a>.
          </p>
        )}
        <Epigraph {...piece.epigraph} />
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_16rem]">
        <div className="prose" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: piece.html }} />
        <aside className="hidden lg:block">
          <div className="sticky top-6 space-y-8">
            <Toc headings={piece.headings} />
            <div className="sans text-[0.8rem]">
              <p className="kicker kicker--gray mb-2">Share</p>
              <CiteButton citation={citation} url={url} />
            </div>
            {mentioned.length > 0 && (
              <div className="sans text-[0.8rem]">
                <p className="kicker kicker--gray mb-2">People in this piece</p>
                <ul className="space-y-1.5">
                  {mentioned.slice(0, 12).map((p) => (
                    <li key={p.slug} className="leading-snug">
                      <Link href={`/people/${p.slug}`} className="font-medium text-ink hover:text-blue">{p.name}</Link>
                      {p.latest && <span className="block text-gray">→ {p.latest.to}, {p.latest.title}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {piece.companies.length > 0 && (
              <div className="sans text-[0.8rem]">
                <p className="kicker kicker--gray mb-2">Companies</p>
                <p className="leading-relaxed text-ink-soft">{piece.companies.join(" · ")}</p>
              </div>
            )}
          </div>
        </aside>
      </div>

      <footer className="mt-14 max-w-[70ch]">
        <div className="sans rounded-md bg-cloud px-5 py-4 text-[0.85rem] leading-relaxed text-ink-soft">
          <p className="kicker kicker--gray mb-1">Cite this piece</p>
          <p className="font-mono text-[0.78rem] break-words">{citation}</p>
          <div className="mt-3 lg:hidden"><CiteButton citation={citation} url={url} /></div>
        </div>
        {piece.tags.length > 0 && (
          <p className="meta mt-6">Tags: {piece.tags.join(" · ")}</p>
        )}
      </footer>

      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between rule-strong pt-4 pb-3">
            <h2 className="kicker">Related, lately</h2>
            <Link href={isOpinion ? "/blog" : "/articles"} className="meta hover:text-blue">More →</Link>
          </div>
          <ul className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug} className="row rule pt-4" data-row data-selected="false">
                <p className="kicker">{r.section === "blog" ? "Opinion" : r.categoryLabel}</p>
                <h3 className="mt-1 text-[1.15rem] leading-snug font-medium">
                  <Link href={r.section === "blog" ? `/blog/${r.slug}` : `/articles/${r.slug}`} data-primary className="u-draw">{r.title}</Link>
                </h3>
                <p className="meta mt-1 tnum">{r.readingMinutes} min · {r.sources.length} sources</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
