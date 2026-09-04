"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Articles", match: (p: string) => p === "/" || p.startsWith("/articles") || p.startsWith("/category") || p.startsWith("/series") },
  { href: "/signal", label: "The Signal", match: (p: string) => p.startsWith("/signal") },
];

export default function SectionSwitch() {
  const pathname = usePathname() || "/";
  const active = Math.max(0, ITEMS.findIndex((i) => i.match(pathname)));
  return (
    <div className="switch" role="tablist" aria-label="Primary sections" style={{ ["--n" as string]: ITEMS.length, ["--i" as string]: active }}>
      <span className="switch__pill" aria-hidden="true" />
      {ITEMS.map((item, i) => (
        <Link key={item.href} href={item.href} role="tab" aria-current={i === active ? "page" : undefined} aria-selected={i === active}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
