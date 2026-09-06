"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const GO: Record<string, string> = { a: "/", s: "/signal", b: "/analysis", p: "/people", h: "/" };

export default function KeyboardShortcuts() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pendingG, setPendingG] = useState(false);

  const moveSelection = useCallback((dir: 1 | -1) => {
    const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-row]"));
    if (!rows.length) return;
    const current = rows.findIndex((r) => r.dataset.selected === "true");
    const next = current < 0 ? (dir === 1 ? 0 : rows.length - 1) : Math.min(rows.length - 1, Math.max(0, current + dir));
    rows.forEach((r, i) => (r.dataset.selected = i === next ? "true" : "false"));
    rows[next].scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (e.key === "Escape") {
        setOpen(false);
        setPendingG(false);
        (document.activeElement as HTMLElement | null)?.blur?.();
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "?") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "/") {
        const search = document.querySelector<HTMLInputElement>("[data-search]");
        if (search) {
          e.preventDefault();
          search.focus();
          search.select();
        }
        return;
      }
      if (pendingG) {
        setPendingG(false);
        const dest = GO[e.key.toLowerCase()];
        if (dest) {
          e.preventDefault();
          router.push(dest);
        }
        return;
      }
      if (e.key === "g") {
        setPendingG(true);
        window.setTimeout(() => setPendingG(false), 1200);
        return;
      }
      if (e.key === "j") return moveSelection(1);
      if (e.key === "k") return moveSelection(-1);
      if (e.key === "Enter") {
        const sel = document.querySelector<HTMLElement>('[data-row][data-selected="true"] a[data-primary]');
        if (sel) {
          e.preventDefault();
          sel.click();
        }
      }
    };
    const onHelp = (e: Event) => {
      const el = (e.target as HTMLElement).closest("[data-shortcut-help]");
      if (el) setOpen((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onHelp);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onHelp);
    };
  }, [pendingG, router, moveSelection]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/20 p-4 sm:items-center" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Keyboard shortcuts">
      <div className="sans w-full max-w-md rounded-md border border-ink/15 bg-paper p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <p className="kicker mb-4">Keyboard</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 text-[0.85rem]">
          <dt><kbd>j</kbd> <kbd>k</kbd></dt><dd>Move through a list</dd>
          <dt><kbd>Enter</kbd></dt><dd>Open the selected piece</dd>
          <dt><kbd>/</kbd></dt><dd>Search the list</dd>
          <dt><kbd>g</kbd> then <kbd>a</kbd></dt><dd>Articles</dd>
          <dt><kbd>g</kbd> then <kbd>s</kbd></dt><dd>The Signal</dd>
          <dt><kbd>g</kbd> then <kbd>b</kbd></dt><dd>Analysis</dd>
          <dt><kbd>g</kbd> then <kbd>p</kbd></dt><dd>People</dd>
          <dt><kbd>?</kbd></dt><dd>This sheet</dd>
          <dt><kbd>Esc</kbd></dt><dd>Close</dd>
        </dl>
      </div>
    </div>
  );
}
