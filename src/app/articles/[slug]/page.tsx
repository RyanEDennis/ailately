import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticles, getPiece, getPeople, related } from "@/lib/content";
import PieceView from "@/components/PieceView";
import { pieceJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const piece = await getPiece("articles", slug);
  if (!piece) return {};
  const url = `${SITE.url}/articles/${piece.slug}`;
  return {
    title: piece.seo.title ?? piece.title,
    description: piece.seo.description ?? piece.dek,
    keywords: piece.seo.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: piece.title, description: piece.dek, siteName: SITE.name, publishedTime: piece.date, authors: [piece.author], section: piece.categoryLabel, tags: piece.tags },
    twitter: { card: "summary_large_image", title: piece.title, description: piece.dek },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const piece = await getPiece("articles", slug);
  if (!piece) notFound();
  const all = await getArticles();
  const people = await getPeople();
  const url = `${SITE.url}/articles/${piece.slug}`;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pieceJsonLd(piece, url)) }} />
      <PieceView piece={piece} related={related(all, piece)} people={people} url={url} />
    </>
  );
}
