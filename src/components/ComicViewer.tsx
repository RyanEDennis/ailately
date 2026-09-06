"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";

const blob = (extra: CSSProperties): CSSProperties => ({
  position: "absolute",
  borderRadius: "999px",
  filter: "blur(2px)",
  willChange: "transform",
  ...extra,
});

/**
 * Shows a comic that opens into a focused, full-resolution lightbox. The
 * backdrop is a gooey wash of drifting Pantone blobs (an SVG goo filter fuses
 * them) so attention lands on the strip alone. Works with touch: the overlay
 * fills the screen and the art scales to fit, and native pinch-zoom still works.
 */
export default function ComicViewer({
  image,
  alt,
  title,
  caption,
  className,
}: {
  image: string;
  alt: string;
  title: string;
  caption?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${title} at full size`}
        className={`group relative block w-full overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_18px_50px_-28px_rgba(16,24,32,0.55)] transition-transform duration-300 hover:-translate-y-0.5 ${className ?? ""}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} loading="eager" className="block h-auto w-full" />
        <span
          className="pointer-events-none absolute bottom-2.5 right-2.5 rounded-full bg-ink/80 px-3 py-1 text-[0.7rem] font-medium text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100"
          style={{ fontFamily: "var(--font-sans)" }}
          aria-hidden="true"
        >
          Tap to view full size
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "color-mix(in oklab, var(--color-ink) 84%, transparent)", animation: "rise 240ms var(--ease-out-quint)" }}
        >
          <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
            <filter id="comic-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="b" />
              <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -11" />
            </filter>
          </svg>

          <div aria-hidden="true" style={{ position: "absolute", inset: 0, filter: "url(#comic-goo)", opacity: 0.55, pointerEvents: "none" }}>
            <span style={blob({ width: "42vmin", height: "42vmin", top: "6%", left: "8%", background: "radial-gradient(circle at 40% 40%, var(--color-blue), transparent 70%)", animation: "drift 19s var(--ease-out-quint) infinite alternate" })} />
            <span style={blob({ width: "38vmin", height: "38vmin", top: "10%", right: "6%", background: "radial-gradient(circle at 50% 50%, var(--color-magenta), transparent 70%)", animation: "goo1 22s ease-in-out infinite" })} />
            <span style={blob({ width: "40vmin", height: "40vmin", bottom: "4%", left: "16%", background: "radial-gradient(circle at 50% 50%, var(--color-peri), transparent 70%)", animation: "goo2 26s ease-in-out infinite" })} />
            <span style={blob({ width: "34vmin", height: "34vmin", bottom: "8%", right: "12%", background: "radial-gradient(circle at 50% 50%, var(--color-mocha), transparent 70%)", animation: "drift 24s var(--ease-out-quint) infinite alternate-reverse" })} />
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-[2] grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-2xl leading-none text-white backdrop-blur-md transition hover:bg-white/20"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            ×
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative z-[1] m-0 flex max-h-full max-w-full flex-col items-center"
            style={{ animation: "panel-rise 420ms var(--ease-out-quint) both" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={alt}
              className="block h-auto w-auto rounded-lg bg-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
              style={{ maxHeight: "86vh", maxWidth: "min(96vw, 900px)" }}
            />
            {caption && (
              <figcaption className="mt-3 max-w-[42ch] text-center text-[0.85rem] text-white/85" style={{ fontFamily: "var(--font-sans)" }}>
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
