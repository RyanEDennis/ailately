// Vetted public sources for the daily newsdesk. Every source here is an official, no-auth public
// interface: company newsroom RSS, the SEC EDGAR JSON APIs, and the arXiv Atom API. LinkedIn is
// categorically excluded and enforced by scripts/lib/guard.mjs.

import { guardedFetch } from "./guard.mjs";

const ANNOUNCE = /(joins|joining|appointed|appoints|named|welcomes?|hires?|promoted|steps? down|stepping down|departs?|departure|to lead|to head|chief|officer|founding|co-?founder)/i;

// Company newsrooms that publish an RSS/Atom feed. Slugs the desk vetted for the launch universe.
export const RSS_FEEDS = [
  { company: "OpenAI", url: "https://openai.com/news/rss.xml", sector: "ai" },
  { company: "Google DeepMind", url: "https://deepmind.google/blog/rss.xml", sector: "ai" },
  { company: "Microsoft AI", url: "https://blogs.microsoft.com/ai/feed/", sector: "ai" },
  { company: "NVIDIA", url: "https://nvidianews.nvidia.com/releases.xml", sector: "compute" },
  { company: "Hugging Face", url: "https://huggingface.co/blog/feed.xml", sector: "ai" },
];

// SEC EDGAR: 8-K Item 5.02 is departure/appointment of directors and officers. Public companies only.
export const EDGAR_CIKS = [
  { company: "NVIDIA", cik: "0001045810", sector: "compute" },
  { company: "Palantir", cik: "0001321655", sector: "enterprise" },
  { company: "Coinbase", cik: "0001679788", sector: "web3" },
  { company: "CoreWeave", cik: "0001769628", sector: "compute" },
  { company: "Salesforce", cik: "0001108524", sector: "enterprise" },
];

function stripTags(s) {
  return (s || "").replace(/<!\[CDATA\[/g, "").replace(/\]\]>/g, "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
}

function parseItems(xml) {
  const items = [];
  const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) || [];
  for (const b of blocks) {
    const title = stripTags((b.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]);
    let link = (b.match(/<link[^>]*href="([^"]+)"/i) || [])[1] || stripTags((b.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1]);
    const date = stripTags((b.match(/<(pubDate|updated|published)[^>]*>([\s\S]*?)<\/\1>/i) || [])[2]);
    const summary = stripTags((b.match(/<(description|summary|content)[^>]*>([\s\S]*?)<\/\1>/i) || [])[2]);
    if (title && link) items.push({ title, link, date, summary });
  }
  return items;
}

export async function fetchRss(feed, { sinceDays = 3 } = {}) {
  const cutoff = Date.now() - sinceDays * 864e5;
  try {
    const res = await guardedFetch(feed.url);
    if (!res.ok) return [];
    const xml = await res.text();
    return parseItems(xml)
      .filter((it) => ANNOUNCE.test(`${it.title} ${it.summary}`))
      .filter((it) => {
        const t = Date.parse(it.date);
        return Number.isNaN(t) ? true : t >= cutoff;
      })
      .map((it) => ({ ...it, company: feed.company, sector: feed.sector, source: "newsroom" }));
  } catch (e) {
    return [{ error: String(e), company: feed.company, source: "newsroom" }];
  }
}

export async function fetchEdgar(entry, { sinceDays = 7 } = {}) {
  const cutoff = Date.now() - sinceDays * 864e5;
  const url = `https://data.sec.gov/submissions/CIK${entry.cik}.json`;
  try {
    const res = await guardedFetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) return [];
    const data = await res.json();
    const recent = data.filings?.recent;
    if (!recent) return [];
    const out = [];
    for (let i = 0; i < (recent.form?.length ?? 0); i++) {
      if (recent.form[i] !== "8-K") continue;
      const items = recent.items?.[i] ?? "";
      if (!items.includes("5.02")) continue;
      const filed = recent.filingDate?.[i];
      if (filed && Date.parse(filed) < cutoff) continue;
      const acc = (recent.accessionNumber?.[i] ?? "").replace(/-/g, "");
      const doc = recent.primaryDocument?.[i] ?? "";
      out.push({
        company: entry.company,
        sector: entry.sector,
        source: "edgar",
        title: `${entry.company}: 8-K Item 5.02 (officer/director change) filed ${filed}`,
        link: `https://www.sec.gov/Archives/edgar/data/${Number(entry.cik)}/${acc}/${doc}`,
        date: filed,
        summary: "SEC Form 8-K, Item 5.02: departure or appointment of directors or principal officers.",
      });
    }
    return out;
  } catch (e) {
    return [{ error: String(e), company: entry.company, source: "edgar" }];
  }
}

export async function fetchArxiv({ sinceDays = 2, max = 20 } = {}) {
  const q = encodeURIComponent('cat:cs.AI OR cat:cs.CL OR cat:cs.MA');
  const url = `http://export.arxiv.org/api/query?search_query=${q}&sortBy=submittedDate&sortOrder=descending&max_results=${max}`;
  const cutoff = Date.now() - sinceDays * 864e5;
  try {
    const res = await guardedFetch(url);
    if (!res.ok) return [];
    const xml = await res.text();
    return parseItems(xml)
      .filter((it) => {
        const t = Date.parse(it.date);
        return Number.isNaN(t) ? true : t >= cutoff;
      })
      .map((it) => ({ ...it, company: "arXiv", sector: "research", source: "arxiv" }));
  } catch (e) {
    return [{ error: String(e), source: "arxiv" }];
  }
}

export async function gatherLeads(opts = {}) {
  const results = await Promise.all([
    ...RSS_FEEDS.map((f) => fetchRss(f, opts)),
    ...EDGAR_CIKS.map((c) => fetchEdgar(c, opts)),
    fetchArxiv(opts),
  ]);
  const flat = results.flat();
  const leads = flat.filter((x) => !x.error);
  const errors = flat.filter((x) => x.error);
  return { leads, errors };
}
