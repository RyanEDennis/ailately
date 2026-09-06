import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit, SKIP } from "unist-util-visit";
import { toString as hastToString } from "hast-util-to-string";
import type { Root, Element, Text, ElementContent } from "hast";
import { CATEGORIES, KINDS } from "./site";
import { slugify, isoWeekRange } from "./slug";

const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, "content", "articles");
const BLOG_DIR = path.join(ROOT, "content", "blog");
const WEEKS_DIR = path.join(ROOT, "content", "signal", "weeks");
const ROSTERS_DIR = path.join(ROOT, "content", "signal", "rosters");

export type Source = { id: number; title: string; publication: string; author?: string; date?: string; url: string };
export type Epigraph = { text: string; stat: string; attribution?: string };
export type Heading = { id: string; text: string };
export type Section = "articles" | "blog";

export type Piece = {
  section: Section;
  slug: string;
  file: string;
  title: string;
  dek: string;
  kind: string;
  kindLabel: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  people: string[];
  companies: string[];
  author: string;
  editor?: string;
  byline?: string;
  role?: string;
  date?: string;
  updated?: string;
  order: number;
  featured: boolean;
  series?: string;
  automated: boolean;
  seo: { title?: string; description?: string; keywords?: string[] };
  epigraph: Epigraph;
  sources: Source[];
  markdown: string;
  html: string;
  plain: string;
  wordCount: number;
  readingMinutes: number;
  headings: Heading[];
  numbers: string[];
};

export type Move = {
  person: string;
  to: string;
  title: string;
  from: string;
  fromTitle?: string;
  date: string;
  type: "hire" | "departure" | "promotion" | "founding" | "board" | "acquihire";
  confidence: "confirmed" | "reported" | "inferred";
  sector?: string;
  sourceUrl: string;
  sourceTitle?: string;
  publication?: string;
  read?: string;
  rank?: number;
  why?: string;
};

export type Week = {
  week: string;
  range: { start: string; end: string };
  headline: string;
  read: string;
  moves: Move[];
};

export type Roster = { year: number; summary: string; moves: Move[] };

export type Person = {
  name: string;
  slug: string;
  pieces: Piece[];
  moves: (Move & { week?: string; year?: number })[];
  latest?: Move & { week?: string; year?: number };
};

let cache: { pieces: Piece[]; weeks: Week[]; rosters: Roster[]; people: Person[] } | null = null;

function readDirMd(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !f.startsWith("_")).sort();
}

function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

function splitSources(md: string): { body: string; sourcesMd: string } {
  const idx = md.search(/^##\s+Sources\s*$/m);
  if (idx < 0) return { body: md, sourcesMd: "" };
  return { body: md.slice(0, idx), sourcesMd: md.slice(idx) };
}

function rehypeCitations() {
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      const p = parent as Element;
      if (p.type === "element" && (p.tagName === "a" || p.tagName === "code" || p.tagName === "pre")) return;
      const value = node.value;
      if (!/\[(\d{1,2})\]/.test(value)) return;
      const parts: ElementContent[] = [];
      let last = 0;
      const re = /\[(\d{1,2})\]/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(value))) {
        if (m.index > last) parts.push({ type: "text", value: value.slice(last, m.index) });
        parts.push({
          type: "element",
          tagName: "sup",
          properties: { className: ["cite"] },
          children: [
            {
              type: "element",
              tagName: "a",
              properties: { href: `#source-${m[1]}`, "data-cite": m[1], "aria-label": `Source ${m[1]}` },
              children: [{ type: "text", value: m[1] }],
            },
          ],
        });
        last = m.index + m[0].length;
      }
      if (last < value.length) parts.push({ type: "text", value: value.slice(last) });
      p.children.splice(index, 1, ...parts);
      return [SKIP, index + parts.length];
    });
  };
}

function rehypePeopleLinks(people: string[]) {
  const names = [...people].filter(Boolean).sort((a, b) => b.length - a.length);
  const linked = new Set<string>();
  return (tree: Root) => {
    if (!names.length) return;
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      const p = parent as Element;
      if (p.type === "element" && ["a", "code", "pre", "h1", "h2", "h3", "sup"].includes(p.tagName)) return;
      let value = node.value;
      const out: ElementContent[] = [];
      let touched = false;
      for (const name of names) {
        if (linked.has(name)) continue;
        const at = value.indexOf(name);
        if (at < 0) continue;
        linked.add(name);
        touched = true;
        const before = value.slice(0, at);
        const after = value.slice(at + name.length);
        if (before) out.push({ type: "text", value: before });
        out.push({
          type: "element",
          tagName: "a",
          properties: { href: `/people/${slugify(name)}`, className: ["person"], "data-person": name },
          children: [{ type: "text", value: name }],
        });
        value = after;
      }
      if (!touched) return;
      if (value) out.push({ type: "text", value });
      p.children.splice(index, 1, ...out);
      return [SKIP, index + out.length];
    });
  };
}

function rehypeDecorate() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a") {
        const href = String(node.properties?.href ?? "");
        if (/^https?:\/\//.test(href)) {
          node.properties = { ...node.properties, target: "_blank", rel: ["noopener"] };
        }
      }
      if (node.tagName === "table") {
        node.properties = { ...node.properties, className: ["data-table"] };
      }
    });
    // Sections: mark the list following "By the numbers" and "What to watch" headings.
    const kids = tree.children;
    for (let i = 0; i < kids.length; i++) {
      const el = kids[i];
      if (el.type !== "element" || el.tagName !== "h2") continue;
      const text = hastToString(el).trim().toLowerCase();
      if (text.startsWith("by the numbers")) {
        el.properties = { ...el.properties, className: ["numbers-heading"] };
        const next = kids[i + 1];
        if (next && next.type === "element" && (next.tagName === "ul" || next.tagName === "ol")) {
          next.properties = { ...next.properties, className: ["numbers"] };
        }
      }
      if (text.startsWith("what to watch")) {
        el.properties = { ...el.properties, className: ["watch-heading"] };
      }
    }
  };
}

function rehypeSourcesList() {
  return (tree: Root) => {
    const kids = tree.children;
    for (let i = 0; i < kids.length; i++) {
      const el = kids[i];
      if (el.type !== "element" || el.tagName !== "h2") continue;
      if (!hastToString(el).trim().toLowerCase().startsWith("sources")) continue;
      el.properties = { ...el.properties, className: ["sources-heading"], id: "sources" };
      const next = kids[i + 1];
      if (next && next.type === "element" && next.tagName === "ol") {
        next.properties = { ...next.properties, className: ["sources"] };
        let n = 0;
        for (const li of next.children) {
          if (li.type === "element" && li.tagName === "li") {
            n++;
            li.properties = { ...li.properties, id: `source-${n}` };
          }
        }
      }
    }
  };
}

async function render(md: string, people: string[]): Promise<{ html: string; headings: Heading[]; plain: string }> {
  const headings: Heading[] = [];
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(() => (tree: Root) => {
      visit(tree, "element", (node: Element) => {
        if (node.tagName === "h2") {
          headings.push({ id: String(node.properties?.id ?? ""), text: hastToString(node) });
        }
      });
    })
    .use(rehypeCitations)
    .use(rehypePeopleLinks, people)
    .use(rehypeDecorate)
    .use(rehypeSourcesList)
    .use(rehypeStringify)
    .process(md);
  const html = String(file);
  const plain = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return { html, headings, plain };
}

function extractNumbers(md: string): string[] {
  const m = md.match(/^##\s+By the numbers\s*$([\s\S]*?)(?=^##\s|\s*$)/m);
  if (!m) return [];
  return m[1]
    .split("\n")
    .map((l) => l.replace(/^\s*[-*]\s+/, "").trim())
    .filter(Boolean)
    .map((l) => l.replace(/\s*\[\d+\](\[\d+\])*\s*$/g, ""));
}

async function loadPiece(section: Section, dir: string, file: string): Promise<Piece> {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const { data, content } = matter(raw);
  const people: string[] = Array.isArray(data.people) ? data.people.map(String) : [];
  const { body } = splitSources(content);
  const { html, headings, plain } = await render(content, people);
  const wordCount = countWords(body.replace(/^---[\s\S]*?---/, ""));
  const category = String(data.category ?? "research");
  const kind = String(data.kind ?? (section === "blog" ? "opinion" : "analysis"));
  const orderFromFile = Number((file.match(/^(\d+)-/) || [])[1] ?? 0);
  const sources: Source[] = Array.isArray(data.sources)
    ? data.sources.map((s: Record<string, unknown>, i: number) => ({
        id: Number(s.id ?? i + 1),
        title: String(s.title ?? ""),
        publication: String(s.publication ?? ""),
        author: s.author ? String(s.author) : undefined,
        date: s.date ? String(s.date instanceof Date ? s.date.toISOString().slice(0, 10) : s.date) : undefined,
        url: String(s.url ?? ""),
      }))
    : [];
  const date = data.date ? (data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date)) : undefined;
  const updated = data.updated ? (data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated)) : undefined;
  return {
    section,
    slug: String(data.slug ?? file.replace(/^\d+-/, "").replace(/\.md$/, "")),
    file,
    title: String(data.title ?? ""),
    dek: String(data.dek ?? ""),
    kind,
    kindLabel: KINDS[kind] ?? kind,
    category,
    categoryLabel: CATEGORIES[category]?.label ?? category,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    people,
    companies: Array.isArray(data.companies) ? data.companies.map(String) : [],
    author: String(data.author ?? "AI Lately Desk"),
    editor: data.editor ? String(data.editor) : undefined,
    byline: data.byline ? String(data.byline) : undefined,
    role: data.role ? String(data.role) : undefined,
    date,
    updated,
    order: Number(data.order ?? orderFromFile ?? 0),
    featured: Boolean(data.featured),
    series: data.series ? String(data.series) : undefined,
    automated: kind === "automated" || Boolean(data.automated),
    seo: {
      title: data.seo?.title ? String(data.seo.title) : undefined,
      description: data.seo?.description ? String(data.seo.description) : undefined,
      keywords: Array.isArray(data.seo?.keywords) ? data.seo.keywords.map(String) : [],
    },
    epigraph: {
      text: String(data.epigraph?.text ?? ""),
      stat: String(data.epigraph?.stat ?? ""),
      attribution: data.epigraph?.attribution ? String(data.epigraph.attribution) : "",
    },
    sources,
    markdown: content,
    html,
    plain,
    wordCount,
    readingMinutes: Math.max(1, Math.round(wordCount / 230)),
    headings: headings.filter((h) => !/^sources$/i.test(h.text.trim())),
    numbers: extractNumbers(content),
  };
}

function loadWeeks(): Week[] {
  if (!fs.existsSync(WEEKS_DIR)) return [];
  return fs
    .readdirSync(WEEKS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const data = JSON.parse(fs.readFileSync(path.join(WEEKS_DIR, f), "utf8")) as Week;
      const range = data.range ?? isoWeekRange(data.week) ?? { start: "", end: "" };
      const moves = (data.moves ?? []).filter((m) => m.person && m.to && m.confidence && m.sourceUrl);
      return { ...data, range, moves };
    })
    .sort((a, b) => (a.week < b.week ? 1 : -1));
}

function loadRosters(): Roster[] {
  if (!fs.existsSync(ROSTERS_DIR)) return [];
  return fs
    .readdirSync(ROSTERS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(ROSTERS_DIR, f), "utf8")) as Roster)
    .map((r) => ({ ...r, moves: (r.moves ?? []).filter((m) => m.person && m.to && m.confidence && m.sourceUrl).sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99)) }))
    .sort((a, b) => b.year - a.year);
}

function buildPeople(pieces: Piece[], weeks: Week[], rosters: Roster[]): Person[] {
  const map = new Map<string, Person>();
  const get = (name: string) => {
    const key = slugify(name);
    let p = map.get(key);
    if (!p) {
      p = { name, slug: key, pieces: [], moves: [] };
      map.set(key, p);
    }
    return p;
  };
  for (const piece of pieces) for (const name of piece.people) get(name).pieces.push(piece);
  for (const w of weeks) for (const m of w.moves) get(m.person).moves.push({ ...m, week: w.week });
  for (const r of rosters) for (const m of r.moves) get(m.person).moves.push({ ...m, year: r.year });
  for (const p of map.values()) {
    p.moves.sort((a, b) => (a.date < b.date ? 1 : -1));
    // Deduplicate identical moves that appear in both a week and a roster.
    const seen = new Set<string>();
    p.moves = p.moves.filter((m) => {
      const k = `${m.date}|${m.to}|${m.title}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
    p.latest = p.moves[0];
    p.pieces.sort((a, b) => a.order - b.order);
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export async function loadAll() {
  if (cache) return cache;
  const articles = await Promise.all(readDirMd(ARTICLES_DIR).map((f) => loadPiece("articles", ARTICLES_DIR, f)));
  const blog = await Promise.all(readDirMd(BLOG_DIR).map((f) => loadPiece("blog", BLOG_DIR, f)));
  const pieces = [...articles, ...blog];
  const weeks = loadWeeks();
  const rosters = loadRosters();
  const people = buildPeople(pieces, weeks, rosters);
  cache = { pieces, weeks, rosters, people };
  return cache;
}

export async function getArticles(): Promise<Piece[]> {
  const { pieces } = await loadAll();
  return pieces
    .filter((p) => p.section === "articles")
    .sort((a, b) => {
      // Newest dated pieces first; within the same date, editorial order.
      if (a.date !== b.date) return (a.date ?? "") < (b.date ?? "") ? 1 : -1;
      return a.order - b.order;
    });
}

export async function getPosts(): Promise<Piece[]> {
  const { pieces } = await loadAll();
  return pieces
    .filter((p) => p.section === "blog")
    .sort((a, b) => {
      // Featured pieces lead; among dated pieces the newest runs first; the
      // undated standing essays fall back to alphabetical order.
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      if ((a.date ?? "") !== (b.date ?? "")) return (a.date ?? "") < (b.date ?? "") ? 1 : -1;
      return a.title.localeCompare(b.title);
    });
}

export async function getPiece(section: Section, slug: string): Promise<Piece | undefined> {
  const { pieces } = await loadAll();
  return pieces.find((p) => p.section === section && p.slug === slug);
}

export async function getWeeks(): Promise<Week[]> {
  return (await loadAll()).weeks;
}

export async function getRosters(): Promise<Roster[]> {
  return (await loadAll()).rosters;
}

export async function getPeople(): Promise<Person[]> {
  return (await loadAll()).people;
}

export async function getPerson(slug: string): Promise<Person | undefined> {
  return (await loadAll()).people.find((p) => p.slug === slug);
}

export async function getStats() {
  const { pieces, weeks, rosters, people } = await loadAll();
  const articles = pieces.filter((p) => p.section === "articles");
  const sources = new Set<string>();
  for (const p of pieces) for (const s of p.sources) if (s.url) sources.add(s.url);
  const moves = weeks.reduce((n, w) => n + w.moves.length, 0) + rosters.reduce((n, r) => n + r.moves.length, 0);
  return {
    articles: articles.length,
    posts: pieces.length - articles.length,
    weeks: weeks.length,
    people: people.length,
    sources: sources.size,
    moves,
    words: pieces.reduce((n, p) => n + p.wordCount, 0),
  };
}

export function related(all: Piece[], piece: Piece, n = 4): Piece[] {
  const score = (p: Piece) => {
    if (p.slug === piece.slug || p.section !== piece.section) return -1;
    let s = 0;
    if (p.category === piece.category) s += 3;
    if (p.series && p.series === piece.series) s += 2;
    s += p.people.filter((x) => piece.people.includes(x)).length * 2;
    s += p.companies.filter((x) => piece.companies.includes(x)).length;
    s += p.tags.filter((x) => piece.tags.includes(x)).length;
    return s;
  };
  return [...all]
    .map((p) => ({ p, s: score(p) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.p.order - b.p.order)
    .slice(0, n)
    .map((x) => x.p);
}

export function apCitation(piece: Piece, url: string): string {
  const author = piece.section === "blog" ? piece.author : `${piece.author}`;
  const date = piece.date ? new Date(`${piece.date}T12:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" }) : "undated";
  return `${author}, "${piece.title}," AI Lately, ${date}, ${url}`;
}
