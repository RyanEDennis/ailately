import type { Metadata } from "next";
import Link from "next/link";
import { getWeeks, getRosters } from "@/lib/content";
import MovesList from "@/components/Moves";
import { formatRange } from "@/lib/slug";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Signal — the biggest AI hires of the week",
  description: "AI Lately's weekly feed of the biggest hires, departures, promotions, and founding moves across AI, read as strategy. Every move carries a source and a confidence label.",
  alternates: { canonical: "/signal" },
};

export default async function SignalPage() {
  const weeks = await getWeeks();
  const rosters = await getRosters();
  const totalMoves = weeks.reduce((n, w) => n + w.moves.length, 0);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DataFeed",
    name: "The Signal by AI Lately",
    description: metadata.description,
    url: `${SITE.url}/signal`,
    dataFeedElement: weeks.slice(0, 3).flatMap((w) => w.moves.map((m) => ({ "@type": "DataFeedItem", dateCreated: m.date, item: { "@type": "Person", name: m.person, jobTitle: m.title, worksFor: { "@type": "Organization", name: m.to } } }))),
  };
  return (
    <section className="pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="grid gap-6 rule-strong pt-4 pb-8 lg:grid-cols-[1fr_20rem]">
        <div className="max-w-[70ch]">
          <p className="kicker kicker--peri inline-flex items-center gap-2">
            <span className="orbs" aria-hidden="true"><i /><i /><i /></span> The Signal
          </p>
          <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">The biggest hires of the week, every week</h1>
          <p className="mt-2 text-ink-soft">
            One question governs every entry: what capability did this company just buy, and what does it imply about the next twelve months? Each move names the person, the destination, the title, the origin, the date, and the public source. Every entry carries a confidence label.
          </p>
        </div>
        <dl className="sans grid grid-cols-3 gap-4 self-end text-[0.8rem] lg:grid-cols-1">
          <div><dt className="kicker kicker--gray">Weeks</dt><dd className="mono mt-1 text-[1.2rem]">{weeks.length}</dd></div>
          <div><dt className="kicker kicker--gray">Moves this feed</dt><dd className="mono mt-1 text-[1.2rem]">{totalMoves}</dd></div>
          <div><dt className="kicker kicker--gray">Rosters</dt><dd className="mt-1 space-x-3">{rosters.map((r) => <Link key={r.year} href={`/signal/${r.year}`} className="text-blue hover:underline">{r.year}</Link>)}</dd></div>
        </dl>
      </header>

      <div className="sans mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-ink-soft">
        <span className="chip chip--confirmed">confirmed</span><span>announcement, filing, or the person's own statement</span>
        <span className="chip chip--reported">reported</span><span>reputable press citing sources</span>
        <span className="chip chip--inferred">inferred</span><span>pattern read, labeled as such</span>
      </div>

      <div className="mt-10 space-y-14">
        {weeks.map((w, i) => (
          <section key={w.week} aria-labelledby={`h-${w.week}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 rule-strong pt-4 pb-3">
              <p className="meta tnum">
                <Link href={`/signal/${w.week}`} className="hover:text-blue">{w.week}</Link> · {formatRange(w.range.start, w.range.end)} {i === 0 && <span className="kicker kicker--magenta ml-2">Current</span>}
              </p>
              <p className="meta tnum">{w.moves.length} moves</p>
            </div>
            <h2 id={`h-${w.week}`} className="mt-2 text-[1.6rem] leading-[1.15] font-medium tracking-[-0.008em]" style={{ fontVariationSettings: '"opsz" 40' }}>
              <Link href={`/signal/${w.week}`} className="u-draw">{w.headline}</Link>
            </h2>
            <p className="mt-3 max-w-[70ch] text-[1rem] leading-relaxed text-ink-soft">{w.read}</p>
            <div className="mt-4">
              <MovesList moves={w.moves} />
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <div className="rule-strong pt-4 pb-3"><h2 className="kicker">Annual rosters</h2></div>
        <ul className="grid gap-6 md:grid-cols-2">
          {rosters.map((r) => (
            <li key={r.year} className="beam beam--hover p-5">
              <p className="kicker kicker--gray">{r.year}</p>
              <h3 className="mt-1 text-[1.3rem] font-medium leading-tight">
                <Link href={`/signal/${r.year}`} className="u-draw">The biggest AI hires of {r.year}{r.year >= 2026 ? " (so far)" : ""}</Link>
              </h3>
              <p className="mt-2 text-[0.92rem] text-ink-soft line-clamp-3">{r.summary}</p>
              <p className="meta mt-3 tnum">{r.moves.length} ranked moves</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
