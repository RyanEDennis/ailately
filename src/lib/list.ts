import type { Piece } from "./content";
import type { ListItem } from "@/components/ArticleList";
import { formatDate } from "./slug";
import { CATEGORIES } from "./site";

export function toListItem(p: Piece): ListItem {
  return {
    href: p.section === "blog" ? `/blog/${p.slug}` : `/articles/${p.slug}`,
    slug: p.slug,
    title: p.title,
    dek: p.dek,
    category: p.category,
    categoryLabel: p.categoryLabel,
    kind: p.kind,
    kindLabel: p.kindLabel,
    order: p.order,
    date: p.date,
    dateLabel: p.date ? formatDate(p.date, { month: "short", day: "numeric", year: "numeric" }) : undefined,
    readingMinutes: p.readingMinutes,
    sources: p.sources.length,
    people: p.people,
    tags: p.tags,
    featured: p.featured,
    series: p.series,
    author: p.author,
    automated: p.automated,
  };
}

export function categoryCounts(pieces: Piece[]) {
  const counts = new Map<string, number>();
  for (const p of pieces) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  return Object.keys(CATEGORIES)
    .filter((k) => counts.has(k))
    .map((k) => ({ key: k, label: CATEGORIES[k].label, count: counts.get(k) ?? 0 }));
}
