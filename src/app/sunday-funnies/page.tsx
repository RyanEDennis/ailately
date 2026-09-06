import type { Metadata } from "next";
import Link from "next/link";
import { getComics } from "@/lib/comics";
import { formatDate } from "@/lib/slug";
import ComicViewer from "@/components/ComicViewer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sunday Funnies",
  description:
    "A weekly, kid-friendly comic strip about growing up alongside AI — warm, gentle, and rooting for the relationship between kids and their machines. New every Sunday from AI Lately.",
  alternates: { canonical: "/sunday-funnies" },
};

export default async function SundayFunniesPage() {
  const comics = getComics();
  const [latest, ...rest] = comics;

  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker kicker--magenta">Sunday Funnies</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">Growing up with a robot</h1>
        <p className="mt-2 text-ink-soft">
          Every Sunday, a small strip about kids and the machines learning beside them — kind, curious, and drawn to make the friendship feel real. Tap any panel to open it full size.
        </p>
      </header>

      {latest && (
        <article className="rule pt-6 pb-10 max-w-[74ch]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="kicker kicker--magenta">This week</p>
            <span className="meta tnum">{formatDate(latest.date, { weekday: "long", month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
          <h2 className="mt-2 text-[1.9rem] leading-tight font-medium tracking-[-0.01em]">
            <Link href={`/sunday-funnies/${latest.slug}`} data-primary className="u-draw">{latest.title}</Link>
          </h2>
          <div className="mt-5 max-w-[560px]">
            <ComicViewer image={latest.image} alt={latest.alt} title={latest.title} caption={latest.caption} />
          </div>
        </article>
      )}

      {rest.length > 0 && (
        <ol className="reveal list-none p-0 m-0">
          {rest.map((c) => (
            <li key={c.slug} className="row grid gap-x-5 gap-y-3 rule py-6 md:grid-cols-[1fr_11rem]">
              <div>
                <p className="kicker kicker--mocha">Sunday Funnies</p>
                <h2 className="mt-1.5 text-[1.5rem] leading-[1.15] font-medium tracking-[-0.008em]">
                  <Link href={`/sunday-funnies/${c.slug}`} data-primary className="u-draw">{c.title}</Link>
                </h2>
                {c.caption ? <p className="mt-2 max-w-[62ch] text-[0.98rem] leading-snug text-ink-soft">{c.caption}</p> : null}
              </div>
              <div className="meta md:text-right md:pt-1 tnum">
                {formatDate(c.date, { month: "short", day: "numeric", year: "numeric" })}
              </div>
            </li>
          ))}
        </ol>
      )}

      <p className="meta mt-10 max-w-[60ch]">
        A collaboration in progress at {SITE.name}. New strips land each Sunday.
      </p>
    </section>
  );
}
