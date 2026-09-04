"use client";

import { useEffect, useState } from "react";
import type { Source } from "@/lib/content";

export default function CiteHover({ sources }: { sources: Source[] }) {
  const [card, setCard] = useState<{ x: number; y: number; src: Source } | null>(null);
  useEffect(() => {
    const over = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("sup.cite a[data-cite]");
      if (!a) return setCard(null);
      const id = Number(a.dataset.cite);
      const src = sources.find((s) => s.id === id);
      if (!src) return;
      const r = a.getBoundingClientRect();
      setCard({ x: Math.min(r.left, window.innerWidth - 360), y: r.bottom + 8, src });
    };
    const out = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("sup.cite")) setCard(null);
    };
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("scroll", () => setCard(null), { passive: true });
    return () => {
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [sources]);
  if (!card) return null;
  const { src } = card;
  return (
    <div className="cite-card" style={{ left: card.x, top: card.y }} role="tooltip">
      <p className="kicker kicker--gray">Source {src.id}</p>
      <p className="mt-1 font-medium text-ink">{src.title}</p>
      <p className="text-gray">{[src.publication, src.author, src.date].filter(Boolean).join(" · ")}</p>
    </div>
  );
}
