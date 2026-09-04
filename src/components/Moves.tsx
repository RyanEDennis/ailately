import Link from "next/link";
import type { Move } from "@/lib/content";
import { slugify, formatDate } from "@/lib/slug";

export function Confidence({ level }: { level: Move["confidence"] }) {
  const title = { confirmed: "Confirmed: company announcement, filing, or the person's own statement", reported: "Reported: reputable press citing sources", inferred: "Inferred: pattern-based read, labeled as such" }[level];
  return <span className={`chip chip--${level}`} title={title}>{level}</span>;
}

export function MoveRow({ m, showRank = false, compact = false }: { m: Move; showRank?: boolean; compact?: boolean }) {
  return (
    <li className="row grid gap-x-4 gap-y-1.5 rule py-3.5 md:grid-cols-[auto_1fr_auto]" data-row data-selected="false">
      <div className="mono hidden text-[0.8rem] text-gray md:block md:w-10 pt-0.5">{showRank && m.rank ? String(m.rank).padStart(2, "0") : <span className="tnum">{formatDate(m.date, { month: "short", day: "numeric" })}</span>}</div>
      <div className="min-w-0">
        <p className="text-[1.05rem] leading-snug">
          <Link href={`/people/${slugify(m.person)}`} data-primary className="font-medium u-draw">{m.person}</Link>
          <span className="text-gray"> → </span>
          <span className="font-medium">{m.to}</span>
          <span className="text-ink-soft"> as {m.title}</span>
          {m.from && <span className="text-ink-soft">, from {m.from}{m.fromTitle ? ` (${m.fromTitle})` : ""}</span>}
        </p>
        {!compact && (m.read || m.why) && <p className="mt-1 max-w-[70ch] text-[0.92rem] leading-snug text-ink-soft">{m.why ?? m.read}</p>}
        <p className="meta mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className={`chip chip--${m.type}`}>{m.type}</span>
          <Confidence level={m.confidence} />
          {m.sourceUrl && (
            <a href={m.sourceUrl} target="_blank" rel="noopener" className="truncate hover:text-blue">
              {m.publication || "Source"}{m.sourceTitle ? `: ${m.sourceTitle}` : ""}
            </a>
          )}
          <span className="tnum md:hidden">{formatDate(m.date, { month: "short", day: "numeric", year: "numeric" })}</span>
        </p>
      </div>
    </li>
  );
}

export default function MovesList({ moves, showRank = false, compact = false }: { moves: Move[]; showRank?: boolean; compact?: boolean }) {
  if (!moves.length) return <p className="meta py-6">A quiet week on the record: the desk verified zero individually sourced moves in this window. The read above carries the week's context.</p>;
  return (
    <ol className="reveal list-none p-0 m-0">
      {moves.map((m, i) => (
        <MoveRow key={`${m.person}-${m.date}-${i}`} m={m} showRank={showRank} compact={compact} />
      ))}
    </ol>
  );
}
