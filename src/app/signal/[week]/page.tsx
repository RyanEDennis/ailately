import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWeeks, getRosters } from "@/lib/content";
import MovesList from "@/components/Moves";
import { formatRange } from "@/lib/slug";
import { SITE } from "@/lib/site";

type Params = { week: string };

export async function generateStaticParams() {
  const weeks = await getWeeks();
  const rosters = await getRosters();
  return [...weeks.map((w) => ({ week: w.week })), ...rosters.map((r) => ({ week: String(r.year) }))];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { week } = await params;
  if (/^\d{4}$/.test(week)) {
    const roster = (await getRosters()).find((r) => String(r.year) === week);
    if (!roster) return {};
    return {
      title: `The biggest AI hires of ${roster.year}${roster.year >= 2026 ? " (so far)" : ""} — ranked roster`,
      description: roster.summary.slice(0, 155),
      alternates: { canonical: `/signal/${week}` },
    };
  }
  const w = (await getWeeks()).find((x) => x.week === week);
  if (!w) return {};
  return {
    title: `${w.headline} — The Signal, ${w.week}`,
    description: w.read.slice(0, 155),
    alternates: { canonical: `/signal/${w.week}` },
  };
}

export default async function WeekPage({ params }: { params: Promise<Params> }) {
  const { week } = await params;
  if (/^\d{4}$/.test(week)) {
    const roster = (await getRosters()).find((r) => String(r.year) === week);
    if (!roster) notFound();
    const article = roster.year === 2025 ? "/articles/biggest-ai-hires-of-2025" : "/articles/biggest-ai-hires-of-2026-so-far";
    return (
      <section className="pt-8">
        <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
          <p className="kicker kicker--peri">Roster · {roster.year}</p>
          <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">The biggest AI hires of {roster.year}{roster.year >= 2026 ? " (so far)" : ""}</h1>
          <p className="mt-2 text-ink-soft">{roster.summary}</p>
          <p className="meta mt-3">
            Read the full analysis: <Link href={article} className="text-blue hover:underline">the feature</Link>. Ranked by strategic weight, with a source on every line.
          </p>
        </header>
        <MovesList moves={roster.moves} showRank />
      </section>
    );
  }
  const weeks = await getWeeks();
  const idx = weeks.findIndex((x) => x.week === week);
  if (idx < 0) notFound();
  const w = weeks[idx];
  const newer = weeks[idx - 1];
  const older = weeks[idx + 1];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: w.headline,
    url: `${SITE.url}/signal/${w.week}`,
    datePublished: w.range.end,
    publisher: { "@type": "NewsMediaOrganization", name: SITE.name },
    about: w.moves.map((m) => ({ "@type": "Person", name: m.person, jobTitle: m.title, worksFor: { "@type": "Organization", name: m.to } })),
  };
  return (
    <section className="pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker kicker--peri">The Signal · {w.week}</p>
        <p className="meta mt-1 tnum">{formatRange(w.range.start, w.range.end)} · {w.moves.length} moves</p>
        <h1 className="mt-2 text-[2rem] leading-[1.1] font-medium tracking-[-0.01em] sm:text-[2.4rem]" style={{ fontVariationSettings: '"opsz" 48' }}>{w.headline}</h1>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{w.read}</p>
      </header>
      <MovesList moves={w.moves} />
      <nav className="sans mt-10 flex justify-between text-[0.85rem]" aria-label="Weeks">
        <span>{older && <Link href={`/signal/${older.week}`} className="hover:text-blue">← {older.week}</Link>}</span>
        <Link href="/signal" className="hover:text-blue">All weeks</Link>
        <span>{newer && <Link href={`/signal/${newer.week}`} className="hover:text-blue">{newer.week} →</Link>}</span>
      </nav>
    </section>
  );
}
