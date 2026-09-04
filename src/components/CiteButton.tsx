"use client";

import { useState } from "react";

export default function CiteButton({ citation, url }: { citation: string; url: string }) {
  const [state, setState] = useState<"idle" | "cite" | "link">("idle");
  const copy = async (text: string, which: "cite" | "link") => {
    try {
      await navigator.clipboard.writeText(text);
      setState(which);
      window.setTimeout(() => setState("idle"), 1600);
    } catch {
      window.prompt("Copy:", text);
    }
  };
  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" onClick={() => copy(citation, "cite")} className="rounded-full border border-ink/20 px-3 py-1 text-[0.75rem] font-medium transition hover:border-blue hover:text-blue">
        {state === "cite" ? "Citation copied" : "Copy AP citation"}
      </button>
      <button type="button" onClick={() => copy(url, "link")} className="rounded-full border border-ink/20 px-3 py-1 text-[0.75rem] font-medium transition hover:border-blue hover:text-blue">
        {state === "link" ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
