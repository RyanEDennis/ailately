import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/content";
import { slugify } from "@/lib/slug";

type Params = { slug: string };

export async function generateStaticParams() {
  const articles = await getArticles();
  const names = new Set(articles.map((a) => a.series).filter(Boolean) as string[]);
  return [...names].map((s) => ({ slug: slugify(s) }));
}

async function seriesFor(slug: string) {
  const articles = await getArticles();
  const name = articles.map((a) => a.series).find((s) => s && slugify(s) === slug);
  if (!name) return null;
  const pieces = articles.filter((a) => a.series === name).sort((a, b) => a.order - b.order);
  // The capstone (the 2026 hires roundup) closes the series.
  const capstone = pieces.find((p) => p.slug === "biggest-ai-hires-of-2026-so-far");
  const ordered = capstone ? [...pieces.filter((p) => p.slug !== capstone.slug), capstone] : pieces;
  return { name, pieces: ordered };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = await seriesFor(slug);
  if (!s) return {};
  return { title: s.name, description: `${s.name}: the year's defining AI stories, read through the people who made them, leading to the biggest hires of 2026 so far.`, alternates: { canonical: `/series/${slug}` } };
}

export default async function SeriesPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = await seriesFor(slug);
  if (!s) notFound();
  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker">Series</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">{s.name}</h1>
        <p className="mt-2 text-ink-soft">
          The stories that shaped the year, in reading order. The series closes with the capstone, which gathers every move into one ranked roster.
        </p>
      </header>
      <ol className="reveal list-none p-0 m-0 relative">
        {s.pieces.map((p, i) => (
          <li key={p.slug} className="row grid gap-x-5 rule py-5 md:grid-cols-[3.2rem_1fr]" data-row data-selected="false">
            <span className="num mono hidden text-[0.85rem] pt-1 md:block" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="kicker">{p.categoryLabel}{i === s.pieces.length - 1 ? <span className="kicker--magenta"> · Capstone</span> : null}</p>
              <h2 className="mt-1.5 text-[1.35rem] leading-[1.2] font-medium">
                <Link href={`/articles/${p.slug}`} data-primary className="u-draw">{p.title}</Link>
              </h2>
              <p className="mt-1.5 max-w-[62ch] text-[0.98rem] leading-snug text-ink-soft">{p.dek}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
