import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPeople, getPerson } from "@/lib/content";
import MovesList from "@/components/Moves";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  return (await getPeople()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getPerson(slug);
  if (!p) return {};
  const latest = p.latest ? `Latest: ${p.latest.to} as ${p.latest.title}.` : "";
  return {
    title: `${p.name} — lately`,
    description: `${p.name} on AI Lately: ${p.moves.length} recorded move${p.moves.length === 1 ? "" : "s"} and ${p.pieces.length} piece${p.pieces.length === 1 ? "" : "s"}. ${latest}`.trim(),
    alternates: { canonical: `/people/${p.slug}` },
  };
}

export default async function PersonPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = await getPerson(slug);
  if (!p) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    url: `${SITE.url}/people/${p.slug}`,
    jobTitle: p.latest?.title,
    worksFor: p.latest ? { "@type": "Organization", name: p.latest.to } : undefined,
    subjectOf: p.pieces.map((x) => ({ "@type": "NewsArticle", headline: x.title, url: `${SITE.url}/${x.section}/${x.slug}` })),
  };
  return (
    <section className="pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker">Person</p>
        <h1 className="mt-2 text-[2.2rem] leading-tight font-medium tracking-[-0.012em]" style={{ fontVariationSettings: '"opsz" 48' }}>{p.name}</h1>
        {p.latest ? (
          <p className="mt-2 text-[1.05rem] text-ink-soft">
            Lately: <span className="text-ink font-medium">{p.latest.to}</span> as {p.latest.title}
            {p.latest.from ? `, from ${p.latest.from}` : ""}.
          </p>
        ) : (
          <p className="mt-2 text-ink-soft">Mentioned in {p.pieces.length} piece{p.pieces.length === 1 ? "" : "s"}; the desk has recorded zero standalone moves so far.</p>
        )}
        <p className="meta mt-2">Public record only: name, role, employer, source, and date.</p>
      </header>

      {p.moves.length > 0 && (
        <section className="mt-6">
          <div className="rule-strong pt-4 pb-2"><h2 className="kicker kicker--peri">Recorded moves</h2></div>
          <MovesList moves={p.moves} />
        </section>
      )}

      {p.pieces.length > 0 && (
        <section className="mt-12">
          <div className="rule-strong pt-4 pb-2"><h2 className="kicker">In the archive</h2></div>
          <ul className="grid gap-x-8 gap-y-5 md:grid-cols-2">
            {p.pieces.map((x) => (
              <li key={x.slug} className="row rule pt-4" data-row data-selected="false">
                <p className="kicker">{x.section === "blog" ? "Opinion" : x.categoryLabel}</p>
                <h3 className="mt-1 text-[1.15rem] leading-snug font-medium">
                  <Link href={x.section === "blog" ? `/blog/${x.slug}` : `/articles/${x.slug}`} data-primary className="u-draw">{x.title}</Link>
                </h3>
                <p className="mt-1 text-[0.92rem] text-ink-soft line-clamp-2">{x.dek}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
