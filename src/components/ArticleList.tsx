"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ListItem = {
  href: string;
  slug: string;
  title: string;
  dek: string;
  category: string;
  categoryLabel: string;
  kind: string;
  kindLabel: string;
  order: number;
  date?: string;
  dateLabel?: string;
  readingMinutes: number;
  sources: number;
  people: string[];
  tags: string[];
  featured: boolean;
  series?: string;
  author: string;
  automated?: boolean;
};

export function Row({ item }: { item: ListItem; index?: number }) {
  return (
    <li className="row grid gap-x-5 gap-y-2 rule py-5 md:grid-cols-[1fr_11rem]" data-row data-selected="false">
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Link href={`/category/${item.category}`} className="kicker hover:text-magenta">{item.categoryLabel}</Link>
          <span className="meta">{item.kindLabel}{item.series ? ` · ${item.series}` : ""}{item.automated ? " · Automated" : ""}</span>
        </div>
        <h3 className="mt-1.5 text-[1.35rem] leading-[1.2] font-medium tracking-[-0.005em]" style={{ fontVariationSettings: '"opsz" 32' }}>
          <Link href={item.href} data-primary className="u-draw">{item.title}</Link>
        </h3>
        <p className="mt-1.5 max-w-[62ch] text-[0.98rem] leading-snug text-ink-soft">{item.dek}</p>
        {item.people.length > 0 && (
          <p className="meta mt-2 truncate">
            <span className="text-mocha">People:</span> {item.people.slice(0, 5).join(", ")}{item.people.length > 5 ? ` +${item.people.length - 5}` : ""}
          </p>
        )}
      </div>
      <div className="meta flex flex-wrap items-center gap-x-3 md:flex-col md:items-end md:gap-y-1 md:pt-1 md:text-right">
        {item.dateLabel ? <span className="tnum">{item.dateLabel}</span> : <span>Undated</span>}
        <span className="tnum">{item.readingMinutes} min · {item.sources} sources</span>
        <span className="hidden md:inline">{item.author}</span>
      </div>
    </li>
  );
}

export default function ArticleList({ items, categories, showFilters = true, emptyLabel = "No pieces match yet." }: { items: ListItem[]; categories: { key: string; label: string; count: number }[]; showFilters?: boolean; emptyLabel?: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((it) => {
      if (cat !== "all" && it.category !== cat) return false;
      if (!needle) return true;
      const hay = `${it.title} ${it.dek} ${it.people.join(" ")} ${it.tags.join(" ")} ${it.categoryLabel}`.toLowerCase();
      return needle.split(/\s+/).every((w) => hay.includes(w));
    });
  }, [items, q, cat]);

  return (
    <div>
      {showFilters && (
        <div className="sans mb-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-1.5">
            <button type="button" onClick={() => setCat("all")} className={`rounded-full border px-3 py-1 text-[0.75rem] font-medium transition ${cat === "all" ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink-soft hover:border-ink/40"}`}>
              All <span className="tnum opacity-70">{items.length}</span>
            </button>
            {categories.map((c) => (
              <button key={c.key} type="button" onClick={() => setCat(c.key === cat ? "all" : c.key)} className={`rounded-full border px-3 py-1 text-[0.75rem] font-medium transition ${cat === c.key ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink-soft hover:border-ink/40"}`}>
                {c.label} <span className="tnum opacity-70">{c.count}</span>
              </button>
            ))}
          </div>
          <label className="relative block md:w-64">
            <span className="sr-only">Search pieces</span>
            <input
              data-search
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search people, companies, topics"
              className="w-full rounded-full border border-ink/15 bg-paper px-4 py-1.5 text-[0.85rem] outline-none transition focus:border-blue"
            />
            <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-70" aria-hidden="true">/</kbd>
          </label>
        </div>
      )}
      <ol className="reveal list-none p-0 m-0">
        {filtered.map((it, i) => (
          <Row key={it.slug} item={it} index={i} />
        ))}
      </ol>
      {filtered.length === 0 && <p className="meta py-10 text-center">{emptyLabel}</p>}
    </div>
  );
}
