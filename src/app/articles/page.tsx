import type { Metadata } from "next";
import { getArticles } from "@/lib/content";
import ArticleList from "@/components/ArticleList";
import { toListItem, categoryCounts } from "@/lib/list";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "All articles",
  description: `Every AI Lately article: hiring, agent infrastructure, frontier models, compute, capital, policy, safety, web3 × AI, and more. ${SITE.tagline}`,
  alternates: { canonical: "/articles" },
};

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6">
        <p className="kicker">Articles</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">Every piece, across every category of AI today</h1>
        <p className="mt-2 max-w-[60ch] text-ink-soft">
          {articles.length} pieces, each one grounded in cited data and organized around the people who made the news. Filter by category, or press <kbd>/</kbd> to search names, companies, and topics.
        </p>
      </header>
      <ArticleList items={articles.map(toListItem)} categories={categoryCounts(articles)} />
    </section>
  );
}
