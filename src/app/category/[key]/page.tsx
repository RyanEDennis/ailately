import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/content";
import ArticleList from "@/components/ArticleList";
import { toListItem } from "@/lib/list";
import { CATEGORIES } from "@/lib/site";

type Params = { key: string };

export async function generateStaticParams() {
  const articles = await getArticles();
  const keys = new Set(articles.map((a) => a.category));
  return [...keys].map((key) => ({ key }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { key } = await params;
  const cat = CATEGORIES[key];
  if (!cat) return {};
  return { title: cat.label, description: `${cat.label} on AI Lately: ${cat.blurb}`, alternates: { canonical: `/category/${key}` } };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { key } = await params;
  const cat = CATEGORIES[key];
  if (!cat) notFound();
  const articles = (await getArticles()).filter((a) => a.category === key);
  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker">Category</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">{cat.label}</h1>
        <p className="mt-2 text-ink-soft">{cat.blurb} {articles.length} piece{articles.length === 1 ? "" : "s"}.</p>
      </header>
      <ArticleList items={articles.map(toListItem)} categories={[]} showFilters={false} />
    </section>
  );
}
