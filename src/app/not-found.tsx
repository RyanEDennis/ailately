import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-16 pb-24 max-w-[60ch]">
      <p className="kicker kicker--magenta">404</p>
      <h1 className="mt-2 text-[2.2rem] leading-tight font-medium tracking-[-0.012em]">That page moved on, lately.</h1>
      <p className="mt-3 text-ink-soft">The address you followed points at empty space. The archive, the Signal, and the people index all remain one click away.</p>
      <p className="sans mt-6 flex gap-4 text-[0.85rem] font-medium">
        <Link href="/" className="text-blue hover:underline">Articles</Link>
        <Link href="/signal" className="text-blue hover:underline">The Signal</Link>
        <Link href="/people" className="text-blue hover:underline">People</Link>
      </p>
    </section>
  );
}
