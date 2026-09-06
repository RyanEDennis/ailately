"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import ComicViewer from "./ComicViewer";

const accentStyle = (accent: string): CSSProperties => ({ ["--accent"]: accent } as CSSProperties);

export type StoryPanel = {
  type: "story";
  href: string;
  kicker: string;
  kindLabel?: string;
  title: string;
  dek: string;
  accent: string;
  epigraph?: { text: string; stat: string };
  people: string[];
  meta: string;
  cta: string;
  badge?: string;
  lead?: boolean;
};

export type SignalPanel = {
  type: "signal";
  weekHref: string;
  weekLabel: string;
  range: string;
  headline: string;
  read: string;
  moves: { person: string; to: string; title: string; type: string; confidence: string; date: string }[];
};

export type ComicPanel = {
  type: "comic";
  href: string;
  title: string;
  image: string;
  alt: string;
  caption?: string;
  dateLabel: string;
};

export type ExitPanel = {
  type: "exit";
  articlesCount: number;
  thesis: string;
};

export type Panel = StoryPanel | SignalPanel | ComicPanel | ExitPanel;

function StatEpigraph({ text, stat }: { text: string; stat: string }) {
  const idx = stat ? text.indexOf(stat) : -1;
  if (idx < 0) return <p className="panel__epi">“{text}”</p>;
  return (
    <p className="panel__epi">
      “{text.slice(0, idx)}
      <mark className="stat-mark">{stat}</mark>
      {text.slice(idx + stat.length)}”
    </p>
  );
}

function Story({ p }: { p: StoryPanel }) {
  return (
    <section className="panel" style={accentStyle(p.accent)} aria-label={p.title}>
      <div className="orb-field" aria-hidden="true">
        <span className="orb-blob orb-blob--a" />
        <span className="orb-blob orb-blob--b" />
        {p.lead && <span className="orb-blob orb-blob--c" />}
      </div>
      <div className="panel__inner">
        <p className="panel__eyebrow kicker" style={{ color: p.accent }}>
          {(p.lead || p.badge) ? <span className="orbs" aria-hidden="true"><i /><i /><i /></span> : null}
          {p.kicker}
          {p.kindLabel ? <span className="meta" style={{ marginLeft: "0.6rem" }}>{p.kindLabel}</span> : null}
          {p.badge ? <span className="meta" style={{ marginLeft: "0.6rem" }}>· {p.badge}</span> : null}
        </p>
        <h2 className="panel__title" style={{ marginTop: "0.7rem", fontSize: p.lead ? "clamp(2.5rem, 8vw, 5rem)" : undefined }}>
          <Link href={p.href} className="u-draw">{p.title}</Link>
        </h2>
        <p className="panel__dek">{p.dek}</p>
        {p.epigraph && p.epigraph.text ? <StatEpigraph text={p.epigraph.text} stat={p.epigraph.stat} /> : null}
        {p.people.length > 0 && (
          <div className="panel__people">
            {p.people.slice(0, 5).map((name) => (
              <span key={name} className="pill-name">{name}</span>
            ))}
          </div>
        )}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href={p.href} className="cta-metal">{p.cta} <span aria-hidden="true">→</span></Link>
          <span className="meta tnum">{p.meta}</span>
        </div>
      </div>
      {p.lead && (
        <div className="scroll-cue" aria-hidden="true">
          Swipe
          <span />
        </div>
      )}
    </section>
  );
}

function Signal({ p }: { p: SignalPanel }) {
  return (
    <section className="panel" style={accentStyle("#6667AB")} aria-label={`The Signal — ${p.headline}`}>
      <div className="orb-field" aria-hidden="true">
        <span className="orb-blob orb-blob--a" />
        <span className="orb-blob orb-blob--b" />
      </div>
      <div className="panel__inner">
        <p className="panel__eyebrow kicker kicker--peri">
          <span className="orbs" aria-hidden="true"><i /><i /><i /></span> The Signal · {p.weekLabel}
        </p>
        <h2 className="panel__title" style={{ marginTop: "0.7rem", fontSize: "clamp(2rem, 5.6vw, 3.6rem)" }}>
          <Link href={p.weekHref} className="u-draw">{p.headline}</Link>
        </h2>
        <p className="panel__dek line-clamp-4">{p.read}</p>
        {p.moves.length > 0 && (
          <div className="mt-6 max-w-[34rem]">
            {p.moves.map((m, i) => (
              <div key={`${m.person}-${i}`} className="move-line">
                <span className={`chip chip--${m.type}`}>{m.type}</span>
                <span className="who">{m.person}</span>
                <span aria-hidden="true">→</span>
                <span className="to">{m.to}, {m.title}</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link href={p.weekHref} className="cta-metal">Open the feed <span aria-hidden="true">→</span></Link>
          <span className="meta tnum">{p.range}</span>
        </div>
      </div>
    </section>
  );
}

function Comic({ p }: { p: ComicPanel }) {
  return (
    <section className="panel panel--comic" style={accentStyle("#BE3455")} aria-label={`Sunday Funnies — ${p.title}`}>
      <div className="orb-field" aria-hidden="true">
        <span className="orb-blob orb-blob--a" />
        <span className="orb-blob orb-blob--b" />
        <span className="orb-blob orb-blob--c" />
      </div>
      <div className="panel__inner grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
        <div className="order-2 lg:order-1">
          <p className="panel__eyebrow kicker kicker--magenta">
            <span className="orbs" aria-hidden="true"><i /><i /><i /></span>
            Sunday Funnies
            <span className="meta" style={{ marginLeft: "0.6rem" }}>{p.dateLabel}</span>
          </p>
          <h2 className="panel__title" style={{ marginTop: "0.7rem", fontSize: "clamp(1.8rem, 5.2vw, 3.4rem)" }}>
            <Link href={p.href} className="u-draw">{p.title}</Link>
          </h2>
          <p className="panel__dek">A weekly, kid-friendly strip about growing up alongside AI. Tap the comic to open it full size.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href={p.href} className="cta-metal">Open Sunday Funnies <span aria-hidden="true">→</span></Link>
            <span className="meta tnum">New every Sunday</span>
          </div>
        </div>
        <div className="comic-stage order-1 mx-auto w-full max-w-[min(78vw,26rem)] lg:order-2 lg:max-w-none">
          <ComicViewer image={p.image} alt={p.alt} title={p.title} caption={p.caption} />
        </div>
      </div>
    </section>
  );
}

function Exit({ p }: { p: ExitPanel }) {
  const links = [
    { href: "/articles", label: "Articles", note: `All ${p.articlesCount} pieces` },
    { href: "/signal", label: "The Signal", note: "The weekly feed of the biggest AI hires" },
    { href: "/analysis", label: "Analysis", note: "Featured essays and the house column" },
    { href: "/people", label: "People", note: "Everyone the record follows" },
  ];
  return (
    <section className="panel" style={accentStyle("#0F4C81")} aria-label="Keep reading">
      <div className="goo" aria-hidden="true"><span /><span /><span /></div>
      <div className="panel__inner">
        <p className="kicker kicker--gray">Keep reading</p>
        <h2 className="panel__title" style={{ marginTop: "0.7rem", fontSize: "clamp(1.9rem, 5vw, 3.2rem)" }}>{p.thesis}</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="beam beam--hover group block rounded-md p-4 transition">
                <span className="wordmark block text-[1.4rem] leading-none group-hover:text-blue">{l.label}</span>
                <span className="meta mt-1.5 block">{l.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HomeFeed({ panels }: { panels: Panel[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("home");
    return () => html.classList.remove("home");
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>(".panel"));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let best = -1;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            bestRatio = e.intersectionRatio;
            best = sections.indexOf(e.target as HTMLElement);
          }
        }
        if (best >= 0) setActive(best);
      },
      { threshold: [0.35, 0.6, 0.9] }
    );
    sections.forEach((s) => io.observe(s));

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [panels.length]);

  const jump = (i: number) => {
    const root = rootRef.current;
    if (!root) return;
    const sections = root.querySelectorAll<HTMLElement>(".panel");
    const target = sections[i];
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="home-feed" ref={rootRef}>
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <filter id="ail-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
          <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div className="home-progress" aria-hidden="true"><i style={{ ["--p"]: `${progress}%` } as CSSProperties} /></div>

      {panels.map((p, i) => {
        if (p.type === "story") return <Story key={i} p={p} />;
        if (p.type === "signal") return <Signal key={i} p={p} />;
        if (p.type === "comic") return <Comic key={i} p={p} />;
        return <Exit key={i} p={p} />;
      })}

      <nav className="home-dots" aria-label="Jump to section">
        {panels.map((p, i) => (
          <button
            key={i}
            type="button"
            aria-current={active === i}
            aria-label={p.type === "story" ? p.title : p.type === "signal" ? "The Signal" : p.type === "comic" ? "Sunday Funnies" : "Keep reading"}
            onClick={() => jump(i)}
          />
        ))}
      </nav>
    </div>
  );
}
