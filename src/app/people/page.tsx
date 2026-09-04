import type { Metadata } from "next";
import Link from "next/link";
import { getPeople } from "@/lib/content";

export const metadata: Metadata = {
  title: "People index",
  description: "Every person AI Lately has covered, with their latest move and the pieces that mention them. AI is about people and what they have been up to lately.",
  alternates: { canonical: "/people" },
};

export default async function PeoplePage() {
  const people = await getPeople();
  const groups = new Map<string, typeof people>();
  for (const p of people) {
    const letter = p.name.normalize("NFKD").replace(/[̀-ͯ]/g, "")[0]?.toUpperCase() ?? "#";
    groups.set(letter, [...(groups.get(letter) ?? []), p]);
  }
  const letters = [...groups.keys()].sort();
  return (
    <section className="pt-8">
      <header className="rule-strong pt-4 pb-6 max-w-[70ch]">
        <p className="kicker">People</p>
        <h1 className="mt-2 text-[2rem] leading-tight font-medium tracking-[-0.01em]">{people.length} people, lately</h1>
        <p className="mt-2 text-ink-soft">Every name the desk has covered, with the latest recorded move and the pieces that mention them. Names in articles link here automatically.</p>
        <nav aria-label="Alphabet" className="sans mt-4 flex flex-wrap gap-1 text-[0.8rem]">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="rounded px-1.5 py-0.5 text-ink-soft hover:bg-cloud hover:text-blue">{l}</a>
          ))}
        </nav>
      </header>
      {letters.map((l) => (
        <section key={l} id={`letter-${l}`} className="scroll-mt-20">
          <div className="rule pt-4 pb-2"><h2 className="kicker kicker--gray">{l}</h2></div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 pb-6">
            {groups.get(l)!.map((p) => (
              <li key={p.slug} className="leading-snug">
                <Link href={`/people/${p.slug}`} className="font-medium u-draw">{p.name}</Link>
                <span className="meta block">
                  {p.latest ? `→ ${p.latest.to}, ${p.latest.title}` : `${p.pieces.length} piece${p.pieces.length === 1 ? "" : "s"}`}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
}
