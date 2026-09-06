import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AUTHORS, getAuthor } from "@/lib/authors";
import { getArticles, getPosts, type Piece } from "@/lib/content";
import { SITE } from "@/lib/site";
import { formatDate } from "@/lib/slug";
import XFeed from "@/components/XFeed";

type Params = { slug: string };

const hrefFor = (p: Piece) => (p.section === "blog" ? `/analysis/${p.slug}` : `/articles/${p.slug}`);

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  const url = `${SITE.url}/authors/${author.slug}`;
  return {
    title: `${author.name} · ${author.role}`,
    description: author.bio,
    alternates: { canonical: url },
    openGraph: { type: "profile", url, title: author.name, description: author.bio, siteName: SITE.name },
    twitter: { card: "summary", title: author.name, description: author.bio, creator: `@${author.x}` },
  };
}

async function piecesBy(author: string): Promise<Piece[]> {
  const [articles, posts] = await Promise.all([getArticles(), getPosts()]);
  return [...posts, ...articles].filter((p) => p.author === author);
}

export default async function AuthorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const pieces = await piecesBy(author.name);
  const url = `${SITE.url}/authors/${author.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      url,
      sameAs: [`https://x.com/${author.x}`],
    },
  };

  return (
    <article className="pt-8" style={{ ["--accent"]: author.accent } as CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="author-head rule-strong pb-8">
        <span className="author-monogram" aria-hidden="true" style={{ ["--accent"]: author.accent } as CSSProperties}>
          {author.initials}
        </span>
        <div className="author-head__body">
          <p className="kicker" style={{ color: author.accent }}>Writer</p>
          <h1 className="author-name">{author.name}</h1>
          <p className="meta mt-1">{author.role} · {SITE.name}</p>
          <p className="author-bio">{author.bio}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`https://x.com/${author.x}`}
              target="_blank"
              rel="noopener"
              className="x-chip sans"
              aria-label={`${author.name} on X, @${author.x}`}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
              @{author.x}
            </a>
            <span className="meta tnum">{pieces.length} {pieces.length === 1 ? "piece" : "pieces"}</span>
          </div>
        </div>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <section aria-label={`Pieces by ${author.name}`}>
          <div className="rule-strong flex items-baseline justify-between pt-4 pb-3">
            <h2 className="kicker">Articles</h2>
            <span className="meta tnum">{pieces.length} total</span>
          </div>
          {pieces.length > 0 ? (
            <ol className="reveal list-none p-0 m-0">
              {pieces.map((p) => (
                <li key={`${p.section}-${p.slug}`} className="row rule py-6">
                  <p className="kicker kicker--mocha">{p.section === "blog" ? p.kindLabel : p.categoryLabel}</p>
                  <h3 className="mt-1.5 text-[1.5rem] leading-[1.15] font-medium tracking-[-0.008em]" style={{ fontVariationSettings: '"opsz" 36' }}>
                    <Link href={hrefFor(p)} data-primary className="u-draw">{p.title}</Link>
                  </h3>
                  <p className="mt-2 max-w-[64ch] text-[0.98rem] leading-snug text-ink-soft">{p.dek}</p>
                  <p className="meta mt-2 tnum">
                    {p.date ? `${formatDate(p.date, { month: "short", day: "numeric", year: "numeric" })} · ` : ""}
                    {p.readingMinutes} min · {p.sources.length} sources
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="meta pt-6">Pieces land here as they publish.</p>
          )}
        </section>

        <aside aria-label={`${author.name} on X`}>
          <div className="rule-strong pt-4 pb-3">
            <h2 className="kicker">On X</h2>
          </div>
          <div className="pt-4">
            <XFeed handle={author.x} />
          </div>
        </aside>
      </div>
    </article>
  );
}
