import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 w-full max-w-[1180px] px-5 pb-14 sm:px-8">
      <div className="rule-double pt-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="wordmark text-[1.6rem] leading-none">AI Lately</p>
          <p className="mt-3 max-w-[38ch] text-[0.95rem] leading-relaxed text-ink-soft">
            {SITE.tagline} Read the people, and you read the strategy — edited by {SITE.editor}.
          </p>
          <p className="meta mt-4">
            Corrections: <a href={`mailto:${SITE.corrections}`} className="hover:text-blue">{SITE.corrections}</a>
          </p>
        </div>
        <nav aria-label="Sections" className="sans text-[0.85rem]">
          <p className="kicker kicker--gray mb-3">Read</p>
          <ul className="space-y-2">
            <li><Link href="/articles" className="hover:text-blue">Articles</Link></li>
            <li><Link href="/signal" className="hover:text-blue">The Signal</Link></li>
            <li><Link href="/blog" className="hover:text-blue">Opinion</Link></li>
            <li><Link href="/people" className="hover:text-blue">People</Link></li>
          </ul>
        </nav>
        <nav aria-label="Publication" className="sans text-[0.85rem]">
          <p className="kicker kicker--gray mb-3">Publication</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue">About and masthead</Link></li>
            <li><Link href="/editorial-standards" className="hover:text-blue">Editorial standards</Link></li>
            <li><Link href="/corrections" className="hover:text-blue">Corrections</Link></li>
            <li><Link href="/terms" className="hover:text-blue">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-blue">Privacy</Link></li>
          </ul>
        </nav>
        <nav aria-label="Machines" className="sans text-[0.85rem]">
          <p className="kicker kicker--gray mb-3">For machines</p>
          <ul className="space-y-2">
            <li><a href="/llms.txt" className="hover:text-blue">llms.txt</a></li>
            <li><a href="/feed.xml" className="hover:text-blue">RSS</a></li>
            <li><a href="/api/signal" className="hover:text-blue">Signal JSON</a></li>
          </ul>
        </nav>
      </div>

      <p className="meta mt-10">
        © {new Date().getFullYear()} {SITE.name}. Independent of every company covered.
      </p>
    </footer>
  );
}
