import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getComics, getComic } from "@/lib/comics";
import { formatDate } from "@/lib/slug";
import ComicViewer from "@/components/ComicViewer";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  return getComics().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const comic = getComic(slug);
  if (!comic) return {};
  const url = `${SITE.url}/sunday-funnies/${comic.slug}`;
  return {
    title: `${comic.title} · Sunday Funnies`,
    description: comic.caption ?? comic.alt,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: `${comic.title} · Sunday Funnies`, description: comic.caption ?? comic.alt, siteName: SITE.name, images: [comic.image] },
    twitter: { card: "summary_large_image", title: `${comic.title} · Sunday Funnies`, description: comic.caption ?? comic.alt },
  };
}

export default async function ComicPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const comic = getComic(slug);
  if (!comic) notFound();

  return (
    <section className="comic-focus relative overflow-hidden" style={{ ["--accent"]: "#BE3455" } as CSSProperties}>
      <div className="orb-field" aria-hidden="true">
        <span className="orb-blob orb-blob--a" />
        <span className="orb-blob orb-blob--b" />
        <span className="orb-blob orb-blob--c" />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[70vh] max-w-[880px] flex-col items-center px-1 py-10 text-center">
        <p className="kicker kicker--magenta">
          <Link href="/sunday-funnies" className="hover:text-blue">Sunday Funnies</Link>
          <span className="meta tnum" style={{ marginLeft: "0.6rem" }}>
            {formatDate(comic.date, { weekday: "long", month: "short", day: "numeric", year: "numeric" })}
          </span>
        </p>
        <h1 className="mt-3 text-[2rem] leading-tight font-medium tracking-[-0.01em] sm:text-[2.6rem]" style={{ fontVariationSettings: '"opsz" 60' }}>
          {comic.title}
        </h1>

        <div className="mt-8 w-full max-w-[620px]">
          <ComicViewer image={comic.image} alt={comic.alt} title={comic.title} caption={comic.caption} />
        </div>

        {comic.caption && (
          <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-snug text-ink-soft">{comic.caption}</p>
        )}

        <p className="meta mt-10">
          <Link href="/sunday-funnies" className="hover:text-blue">← All Sunday Funnies</Link>
        </p>
      </div>
    </section>
  );
}
