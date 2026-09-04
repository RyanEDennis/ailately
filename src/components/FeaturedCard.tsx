import Link from "next/link";
import type { Piece } from "@/lib/content";
import { formatDate } from "@/lib/slug";

export function LeadCard({ piece }: { piece: Piece }) {
  return (
    <article className="beam p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Link href={`/category/${piece.category}`} className="kicker hover:text-magenta">{piece.categoryLabel}</Link>
        <span className="meta">{piece.kindLabel}{piece.series ? ` · ${piece.series}` : ""}</span>
      </div>
      <h2 className="mt-3 text-[2rem] leading-[1.08] font-medium tracking-[-0.012em] sm:text-[2.6rem]" style={{ fontVariationSettings: '"opsz" 72' }}>
        <Link href={`/articles/${piece.slug}`} className="u-draw">{piece.title}</Link>
      </h2>
      <p className="mt-4 max-w-[60ch] text-[1.08rem] leading-snug text-ink-soft">{piece.dek}</p>
      <blockquote className="mt-5 max-w-[60ch] border-l-2 border-mocha pl-4 italic text-[1rem] leading-snug text-ink-soft">
        “{piece.epigraph.text}”
      </blockquote>
      <p className="meta mt-5 flex flex-wrap gap-x-3">
        <span>{piece.author}</span>
        {piece.date && <span className="tnum">{formatDate(piece.date)}</span>}
        <span className="tnum">{piece.readingMinutes} min · {piece.sources.length} sources · {piece.people.length} people</span>
      </p>
    </article>
  );
}

export function SideCard({ piece, label }: { piece: Piece; label?: string }) {
  return (
    <article className="beam beam--hover p-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Link href={`/category/${piece.category}`} className="kicker hover:text-magenta">{label ?? piece.categoryLabel}</Link>
        <span className="meta">{piece.kindLabel}</span>
      </div>
      <h3 className="mt-2 text-[1.35rem] leading-[1.15] font-medium tracking-[-0.008em]" style={{ fontVariationSettings: '"opsz" 32' }}>
        <Link href={`/articles/${piece.slug}`} className="u-draw">{piece.title}</Link>
      </h3>
      <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">{piece.dek}</p>
      <p className="meta mt-3 tnum">{piece.readingMinutes} min · {piece.sources.length} sources</p>
    </article>
  );
}
