import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPiece, getPeople, related } from "@/lib/content";
import PieceView from "@/components/PieceView";
import { pieceJsonLd } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const piece = await getPiece("blog", slug);
  if (!piece) return {};
  const url = `${SITE.url}/analysis/${piece.slug}`;
  return {
    title: `${piece.seo.title ?? piece.title} · ${piece.kindLabel}`,
    description: piece.seo.description ?? piece.dek,
    keywords: piece.seo.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: piece.title, description: piece.dek, siteName: SITE.name, authors: [piece.author], section: "Analysis", tags: piece.tags },
    twitter: { card: "summary_large_image", title: piece.title, description: piece.dek },
  };
}

export default async function AnalysisPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const piece = await getPiece("blog", slug);
  if (!piece) notFound();
  const all = await getPosts();
  const people = await getPeople();
  const url = `${SITE.url}/analysis/${piece.slug}`;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pieceJsonLd(piece, url)) }} />
      <PieceView piece={piece} related={related(all, piece)} people={people} url={url} />
    </>
  );
}
