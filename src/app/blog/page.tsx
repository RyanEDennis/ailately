import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Opinion",
  description: `Bold, evidence-backed opinion from ${SITE.editor}, founder and editor of AI Lately: reasoning as the next cost breakthrough, people as the product, the agent economy's bank, inference as the new oil, and the end of the résumé monopoly.`,
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker kicker--mocha">Opinion</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">Bold claims, real numbers</h1>
        <p className="mt-2 text-ink-soft">
          Five standing essays by {SITE.editor}, undated by design. Each opens with a hyperbolic claim and then earns it with cited data. The house bias is on the record: bounded reasoning is the next big breakthrough in cost and productivity.
        </p>
      </header>
      <ol className="reveal list-none p-0 m-0">
        {posts.map((p, i) => (
          <li key={p.slug} className="row grid gap-x-5 gap-y-2 rule py-6 md:grid-cols-[3.2rem_1fr_11rem]" data-row data-selected="false">
            <span className="num mono hidden text-[0.85rem] pt-1 md:block" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="kicker kicker--mocha">{p.categoryLabel}</p>
              <h2 className="mt-1.5 text-[1.6rem] leading-[1.15] font-medium tracking-[-0.008em]" style={{ fontVariationSettings: '"opsz" 40' }}>
                <Link href={`/blog/${p.slug}`} data-primary className="u-draw">{p.title}</Link>
              </h2>
              <p className="mt-2 max-w-[62ch] text-[0.98rem] leading-snug text-ink-soft">{p.dek}</p>
              <blockquote className="mt-3 max-w-[60ch] border-l-2 border-mocha pl-3 italic text-[0.95rem] text-ink-soft">“{p.epigraph.text}”</blockquote>
            </div>
            <div className="meta md:text-right md:pt-1">
              <p>{p.byline ?? p.author}</p>
              <p className="tnum">{p.readingMinutes} min · {p.sources.length} sources</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
