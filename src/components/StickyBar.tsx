"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/articles", label: "Articles", match: (p: string) => p === "/" || p.startsWith("/articles") || p.startsWith("/category") || p.startsWith("/series") },
  { href: "/signal", label: "The Signal", match: (p: string) => p.startsWith("/signal") },
  { href: "/analysis", label: "Analysis", match: (p: string) => p.startsWith("/analysis") },
  { href: "/people", label: "People", match: (p: string) => p.startsWith("/people") },
];

export default function StickyBar({ week }: { week?: string }) {
  const pathname = usePathname() || "/";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wk = week ? week.replace(/^\d{4}-/, "") : "";

  return (
    <div className={`glassbar${show ? " is-on" : ""}`} inert={!show ? true : undefined}>
      <div className="glassbar__inner">
        <div className="flex items-center gap-4 min-w-0">
          <Link href="/" className="glassbar__word shrink-0">AI Lately</Link>
          <nav className="glassbar__nav" aria-label="Sections">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={n.match(pathname) ? "on" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/signal" className="statuspill" aria-label="The Signal, live">
          <span className="sd" aria-hidden="true" />
          Live · The Signal{wk ? ` · ${wk}` : ""}
        </Link>
      </div>
    </div>
  );
}
