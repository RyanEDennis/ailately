import type { Page } from "@/lib/pages";

export default function PageView({ page, kicker = "Publication" }: { page: Page; kicker?: string }) {
  return (
    <article className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-2 text-[2.2rem] leading-tight font-medium tracking-[-0.012em]" style={{ fontVariationSettings: '"opsz" 48' }}>{page.title}</h1>
        {page.description && <p className="mt-2 text-ink-soft">{page.description}</p>}
      </header>
      <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  );
}
