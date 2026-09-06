import type { Piece } from "./content";
import { SITE } from "./site";

export function pieceJsonLd(piece: Piece, url: string) {
  const isOpinion = piece.section === "blog";
  const author = isOpinion
    ? { "@type": "Person", name: piece.author, jobTitle: piece.role, url: `${SITE.url}/about` }
    : { "@type": "Organization", name: piece.author, url: SITE.url };
  return {
    "@context": "https://schema.org",
    "@type": isOpinion
      ? piece.kind === "opinion"
        ? "OpinionNewsArticle"
        : "AnalysisNewsArticle"
      : piece.kind === "feature"
        ? "AnalysisNewsArticle"
        : "NewsArticle",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: piece.title,
    alternativeHeadline: piece.dek,
    description: piece.seo.description ?? piece.dek,
    articleSection: isOpinion ? "Analysis" : piece.categoryLabel,
    keywords: (piece.seo.keywords ?? []).concat(piece.tags).join(", "),
    wordCount: piece.wordCount,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    datePublished: piece.date ? `${piece.date}T12:00:00-04:00` : undefined,
    dateModified: piece.updated ? `${piece.updated}T12:00:00-04:00` : piece.date ? `${piece.date}T12:00:00-04:00` : undefined,
    author,
    editor: piece.editor ? { "@type": "Person", name: piece.editor } : undefined,
    publisher: { "@type": "NewsMediaOrganization", name: SITE.name, url: SITE.url },
    about: piece.companies.map((c) => ({ "@type": "Organization", name: c })),
    mentions: piece.people.map((p) => ({ "@type": "Person", name: p })),
    citation: piece.sources.map((s) => ({ "@type": "CreativeWork", name: s.title, url: s.url, publisher: s.publication, datePublished: s.date })),
  };
}
