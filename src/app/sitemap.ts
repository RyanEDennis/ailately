import type { MetadataRoute } from "next";
import { getArticles, getPosts, getWeeks, getRosters, getPeople } from "@/lib/content";
import { SITE } from "@/lib/site";
import { AUTHORS } from "@/lib/authors";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();
  const posts = await getPosts();
  const weeks = await getWeeks();
  const rosters = await getRosters();
  const people = await getPeople();
  const now = new Date();
  const cats = new Set(articles.map((a) => a.category));
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/articles`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/signal`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/analysis`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/people`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/series/2026-in-stories`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE.url}/editorial-standards`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/corrections`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...articles.map((a) => ({ url: `${SITE.url}/articles/${a.slug}`, lastModified: a.updated ?? a.date ?? SITE.launchDate, changeFrequency: "monthly" as const, priority: a.featured ? 0.95 : 0.8 })),
    ...posts.map((p) => ({ url: `${SITE.url}/analysis/${p.slug}`, lastModified: p.updated ?? p.date ?? SITE.launchDate, changeFrequency: "monthly" as const, priority: p.featured ? 0.9 : 0.7 })),
    ...weeks.map((w) => ({ url: `${SITE.url}/signal/${w.week}`, lastModified: w.range.end, changeFrequency: "weekly" as const, priority: 0.7 })),
    ...rosters.map((r) => ({ url: `${SITE.url}/signal/${r.year}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...[...cats].map((c) => ({ url: `${SITE.url}/category/${c}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 })),
    ...people.map((p) => ({ url: `${SITE.url}/people/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 })),
    ...AUTHORS.map((a) => ({ url: `${SITE.url}/authors/${a.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
