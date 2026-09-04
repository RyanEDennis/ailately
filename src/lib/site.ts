export const SITE = {
  name: "AI Lately",
  domain: "ailately.com",
  url: "https://ailately.com",
  tagline: "AI is about people, and what they have been up to lately.",
  description:
    "AI Lately reads artificial intelligence through the people who build it: hires, departures, papers, and filings, interpreted as strategy. Data-heavy analysis, the weekly Signal of the biggest AI hires, and opinion from Ryan Elliott Dennis.",
  editor: "Ryan Elliott Dennis",
  editorRole: "Founder and Editor",
  contact: "editor@ailately.com",
  corrections: "corrections@ailately.com",
  privacy: "privacy@ailately.com",
  launchDate: "2026-09-04",
  edition: "Launch Edition",
  twitter: "",
  locale: "en_US",
} as const;

export const CATEGORIES: Record<string, { label: string; blurb: string }> = {
  hiring: { label: "Hiring & Talent", blurb: "Who moved where, and what the move buys." },
  agents: { label: "Agent Infrastructure", blurb: "Payments, protocols, runtimes, and the cost of reasoning." },
  models: { label: "Frontier Models", blurb: "Release cadence and the researchers behind it." },
  compute: { label: "Compute & Silicon", blurb: "Chips, neoclouds, power, and water." },
  capital: { label: "Capital & Markets", blurb: "Rounds, listings, guarantees, and who led them." },
  enterprise: { label: "Enterprise Adoption", blurb: "Audited numbers from the buyers of AI." },
  policy: { label: "Policy & Regulation", blurb: "Brussels, Washington, and the chip corridor." },
  safety: { label: "Safety & Security", blurb: "The people keeping frontier systems contained." },
  web3: { label: "Web3 × AI", blurb: "Agent-native money and the crypto talent corridor." },
  applied: { label: "Applied AI", blurb: "Vertical winners in code, health, and law." },
  consumer: { label: "Consumer AI", blurb: "Scale, devices, and the product leaders." },
  labor: { label: "Labor & Productivity", blurb: "Employment data, read plainly." },
  research: { label: "Research", blurb: "The next paradigm and the people leaving to build it." },
  geopolitics: { label: "Geopolitics", blurb: "Export controls and sovereign compute." },
};

export const KINDS: Record<string, string> = {
  news: "News",
  analysis: "Analysis",
  feature: "Feature",
  opinion: "Opinion",
  roundup: "Roundup",
  automated: "Automated report",
};

// Pantone Colors of the Year: the only chromatic colors on the site.
export const PALETTE = [
  { name: "Cloud Dancer", code: "PANTONE 11-4201", year: 2026, hex: "#F0EEE9", role: "Paper surfaces and panels" },
  { name: "Mocha Mousse", code: "PANTONE 17-1230", year: 2025, hex: "#A47864", role: "Bylines, underlines, warmth" },
  { name: "Peach Fuzz", code: "PANTONE 13-1023", year: 2024, hex: "#FFBE98", role: "Hover wash, selection" },
  { name: "Viva Magenta", code: "PANTONE 18-1750", year: 2023, hex: "#BE3455", role: "The statistic, live marks, confirmed" },
  { name: "Very Peri", code: "PANTONE 17-3938", year: 2022, hex: "#6667AB", role: "The Signal, reported" },
  { name: "Illuminating", code: "PANTONE 13-0647", year: 2021, hex: "#F5DF4D", role: "Highlights, inferred" },
  { name: "Ultimate Gray", code: "PANTONE 17-5104", year: 2021, hex: "#939597", role: "Meta text, rules" },
  { name: "Classic Blue", code: "PANTONE 19-4052", year: 2020, hex: "#0F4C81", role: "Links, focus, progress" },
  { name: "Living Coral", code: "PANTONE 16-1546", year: 2019, hex: "#FF6F61", role: "Departures" },
  { name: "Greenery", code: "PANTONE 15-0343", year: 2017, hex: "#88B04B", role: "Hires" },
] as const;
