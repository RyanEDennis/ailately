import Link from "next/link";
import { SITE } from "@/lib/site";
import type { Move } from "@/lib/content";
import SectionSwitch from "./SectionSwitch";
import { formatDate } from "@/lib/slug";

function Ticker({ latest }: { latest: (Move & { week: string })[] }) {
  if (!latest.length) return null;
  const items = [...latest, ...latest];
  return (
    <div className="ticker sans text-[0.78rem] text-ink-soft" aria-label="Lately: the newest moves in the Signal">
      <div className="ticker__track">
        {items.map((m, i) => (
          <Link key={`${m.person}-${i}`} href={`/signal/${m.week}`} className="inline-flex items-center gap-2 hover:text-blue">
            <span className={`chip chip--${m.type}`} aria-hidden="true">{m.type}</span>
            <span className="font-medium text-ink">{m.person}</span>
            <span aria-hidden="true">→</span>
            <span>{m.to}</span>
            <span className="text-gray">as {m.title}</span>
            <span className="text-gray tnum">· {formatDate(m.date, { month: "short", day: "numeric" })}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header({ latest }: { latest: (Move & { week: string })[] }) {
  const today = new Date();
  const dateline = today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "America/New_York" });
  return (
    <header className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
      <div className="flex items-center justify-between gap-4 pt-4 pb-2 meta">
        <span className="tnum">{dateline}</span>
        <span className="hidden sm:inline">{SITE.edition} · Vol. 1</span>
        <nav aria-label="Utility" className="flex items-center gap-4">
          <Link href="/people" className="hover:text-blue">People</Link>
          <Link href="/blog" className="hover:text-blue">Opinion</Link>
          <Link href="/about" className="hover:text-blue">About</Link>
        </nav>
      </div>
      <div className="rule-double" />
      <div className="flex flex-col items-center gap-2 py-5 sm:py-6">
        <Link href="/" className="wordmark text-[2.6rem] leading-none sm:text-[3.4rem]" aria-label={`${SITE.name} home`}>
          AI Lately
        </Link>
        <p className="meta italic font-serif text-[0.95rem] text-ink-soft" style={{ fontFamily: "var(--font-serif)" }}>
          {SITE.tagline}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 rule py-2.5">
        <nav aria-label="Sections" className="flex items-center gap-4">
          <SectionSwitch />
        </nav>
        <nav aria-label="Secondary" className="sans hidden items-center gap-5 text-[0.8rem] font-medium text-ink-soft md:flex">
          <Link href="/series/2026-in-stories" className="hover:text-blue">2026 in Stories</Link>
          <Link href="/articles/biggest-ai-hires-of-2025" className="hover:text-blue">Biggest Hires of 2025</Link>
          <Link href="/articles/biggest-ai-hires-of-2026-so-far" className="hover:text-blue">2026 (So Far)</Link>
          <button type="button" data-shortcut-help className="hover:text-blue" aria-label="Keyboard shortcuts">
            <kbd>?</kbd>
          </button>
        </nav>
      </div>
      <div className="rule py-2">
        <div className="flex items-center gap-3">
          <span className="kicker kicker--magenta inline-flex items-center gap-2 shrink-0">
            <span className="orbs" aria-hidden="true"><i /><i /><i /></span> Lately
          </span>
          <Ticker latest={latest} />
        </div>
      </div>
      <div className="rule" />
    </header>
  );
}
