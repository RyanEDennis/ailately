import Link from "next/link";
import { SITE, PALETTE } from "@/lib/site";

type Stats = { articles: number; posts: number; weeks: number; people: number; sources: number; moves: number; words: number };

export default function Footer({ stats }: { stats: Stats }) {
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <footer className="mx-auto mt-20 w-full max-w-[1180px] px-5 pb-14 sm:px-8">
      <div className="rule-double pt-6">
        <dl className="sans grid grid-cols-2 gap-y-4 text-[0.8rem] sm:grid-cols-4 lg:grid-cols-7">
          {[
            ["Articles", fmt(stats.articles)],
            ["Opinion", fmt(stats.posts)],
            ["Signal weeks", fmt(stats.weeks)],
            ["People tracked", fmt(stats.people)],
            ["Moves logged", fmt(stats.moves)],
            ["Sources cited", fmt(stats.sources)],
            ["Words", fmt(stats.words)],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="kicker kicker--gray">{k}</dt>
              <dd className="mono mt-1 text-[1.15rem] text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 grid gap-10 rule pt-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="wordmark text-[1.6rem] leading-none">AI Lately</p>
          <p className="mt-3 max-w-[38ch] text-[0.95rem] leading-relaxed text-ink-soft">
            {SITE.tagline} Analysis of hires, departures, papers, and filings across artificial intelligence, edited by {SITE.editor}.
          </p>
          <p className="meta mt-4">
            Corrections: <a href={`mailto:${SITE.corrections}`} className="hover:text-blue">{SITE.corrections}</a>
          </p>
        </div>
        <nav aria-label="Sections" className="sans text-[0.85rem]">
          <p className="kicker kicker--gray mb-3">Read</p>
          <ul className="space-y-2">
            <li><Link href="/articles" className="hover:text-blue">All articles</Link></li>
            <li><Link href="/signal" className="hover:text-blue">The Signal</Link></li>
            <li><Link href="/blog" className="hover:text-blue">Opinion</Link></li>
            <li><Link href="/people" className="hover:text-blue">People index</Link></li>
            <li><Link href="/series/2026-in-stories" className="hover:text-blue">2026 in Stories</Link></li>
          </ul>
        </nav>
        <nav aria-label="Publication" className="sans text-[0.85rem]">
          <p className="kicker kicker--gray mb-3">Publication</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue">About and masthead</Link></li>
            <li><Link href="/editorial-standards" className="hover:text-blue">Editorial standards</Link></li>
            <li><Link href="/corrections" className="hover:text-blue">Corrections</Link></li>
            <li><Link href="/terms" className="hover:text-blue">Terms of service</Link></li>
            <li><Link href="/privacy" className="hover:text-blue">Privacy</Link></li>
          </ul>
        </nav>
        <nav aria-label="Machines" className="sans text-[0.85rem]">
          <p className="kicker kicker--gray mb-3">For machines</p>
          <ul className="space-y-2">
            <li><a href="/llms.txt" className="hover:text-blue">llms.txt</a></li>
            <li><a href="/llms-full.txt" className="hover:text-blue">llms-full.txt</a></li>
            <li><a href="/feed.xml" className="hover:text-blue">RSS feed</a></li>
            <li><a href="/sitemap.xml" className="hover:text-blue">Sitemap</a></li>
            <li><a href="/api/signal" className="hover:text-blue">Signal JSON</a></li>
          </ul>
        </nav>
      </div>

      <details className="group mt-10 rule pt-6">
        <summary className="kicker cursor-pointer list-none select-none hover:text-magenta">
          Colophon <span className="text-gray transition-transform group-open:rotate-90 inline-block">→</span>
        </summary>
        <div className="mt-5 grid gap-6 md:grid-cols-[1fr_1.4fr]">
          <p className="max-w-[46ch] text-[0.92rem] leading-relaxed text-ink-soft">
            Set in Newsreader for reading, Inter for wayfinding, and JetBrains Mono for figures. The ground is white. Every chromatic color on the site is a Pantone Color of the Year, from Classic Blue for links to Cloud Dancer for panels. Motion stays quiet: a beam along the edge of a featured piece, three orbs beside anything live, a pill that slides between sections. Press <kbd>?</kbd> for shortcuts.
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {PALETTE.map((c) => (
              <li key={c.code} className="sans text-[0.7rem] leading-tight">
                <div className="swatch" style={{ background: c.hex }} title={`${c.name} ${c.hex}`} />
                <p className="mt-1.5 font-semibold text-ink">{c.name}</p>
                <p className="text-gray">{c.code} · {c.year}</p>
                <p className="text-ink-soft">{c.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </details>

      <p className="meta mt-10">
        © {new Date().getFullYear()} {SITE.name}. Original analysis with brief quotation and outbound links; every claim traces to a cited source. Independent of every company covered.
      </p>
    </footer>
  );
}
