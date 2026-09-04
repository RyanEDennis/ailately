"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content";

export default function Toc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -75% 0px", threshold: [0, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);
  if (!headings.length) return null;
  return (
    <nav aria-label="In this piece" className="sans text-[0.8rem]">
      <p className="kicker kicker--gray mb-2">In this piece</p>
      <ol className="space-y-1.5 border-l border-ink/10">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className={`-ml-px block border-l-2 pl-3 leading-snug transition ${active === h.id ? "border-blue text-blue" : "border-transparent text-ink-soft hover:text-ink"}`}>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
