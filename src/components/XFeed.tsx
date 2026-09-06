"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: { widgets?: { load: (el?: HTMLElement | null) => void } };
  }
}

const WIDGET_SRC = "https://platform.twitter.com/widgets.js";

/**
 * A compact, scrollable window of an author's recent X posts, rendered with X's
 * official timeline widget. The inner anchor is a real link, so a reader still
 * reaches the profile when the widget is blocked or offline.
 */
export default function XFeed({ handle, height = 520 }: { handle: string; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = () => window.twttr?.widgets?.load(ref.current);
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
    if (existing) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.addEventListener("load", render);
    document.body.appendChild(script);
  }, [handle]);

  return (
    <div className="x-window" style={{ maxHeight: height }}>
      <div ref={ref} className="x-window__scroll">
        <a
          className="twitter-timeline"
          data-height={height}
          data-theme="light"
          data-chrome="noheader nofooter noborders transparent"
          data-dnt="true"
          href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}
        >
          Recent posts from @{handle}
        </a>
      </div>
      <a
        href={`https://x.com/${handle}`}
        target="_blank"
        rel="noopener"
        className="x-window__fallback sans"
      >
        Open @{handle} on X <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
