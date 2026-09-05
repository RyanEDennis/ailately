import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import { getWeeks } from "@/lib/content";

const newsreader = localFont({
  src: [
    { path: "../fonts/newsreader-latin-standard-normal.woff2", style: "normal", weight: "200 800" },
    { path: "../fonts/newsreader-latin-standard-italic.woff2", style: "italic", weight: "200 800" },
    { path: "../fonts/newsreader-latin-ext-standard-normal.woff2", style: "normal", weight: "200 800" },
    { path: "../fonts/newsreader-latin-ext-standard-italic.woff2", style: "italic", weight: "200 800" },
  ],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
});
const inter = localFont({
  src: [{ path: "../fonts/inter-latin-standard-normal.woff2", style: "normal", weight: "100 900" }],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});
const mono = localFont({
  src: [{ path: "../fonts/jetbrains-mono-latin-wght-normal.woff2", style: "normal", weight: "100 800" }],
  variable: "--font-jetbrains",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — AI news through the people who build it`, template: `%s — ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["ai news", "ai hiring", "biggest ai hires", "ai agent infrastructure", "agentic ai", "ai talent", "ai people"],
  authors: [{ name: SITE.editor, url: `${SITE.url}/about` }],
  creator: SITE.editor,
  publisher: SITE.name,
  alternates: { canonical: "/", types: { "application/rss+xml": `${SITE.url}/feed.xml` } },
  openGraph: { type: "website", siteName: SITE.name, locale: SITE.locale, url: SITE.url, title: SITE.name, description: SITE.description },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "llms-txt": `${SITE.url}/llms.txt` },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light", width: "device-width", initialScale: 1 };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const weeks = await getWeeks();
  const latest = weeks.flatMap((w) => w.moves.map((m) => ({ ...m, week: w.week }))).sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 8);
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sans sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-paper focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-blue">
          Skip to content
        </a>
        <Header latest={latest} />
        <main id="main" className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">{children}</main>
        <Footer />
        <KeyboardShortcuts />
      </body>
    </html>
  );
}
