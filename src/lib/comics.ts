// Sunday Funnies — a weekly kid-friendly comic about life with AI.
// Add a new entry each Sunday and drop its image in /public/comics.

export type Comic = {
  date: string; // ISO, the Sunday it ran
  slug: string;
  title: string;
  image: string; // path under /public
  alt: string;
  caption?: string;
};

export const COMICS: Comic[] = [
  {
    date: "2026-09-06",
    slug: "weekly-token-limit",
    title: "Weekly Token Limit",
    image: "/comics/2026-09-06.webp",
    alt:
      "Four-panel comic. A boy asks his little robot to order him a burger and fries. The robot replies that his parents said no takeout, then that it will not follow a bad instruction, and finally that he has reached his weekly token limit.",
    caption: "A boy discovers his helpful robot has limits of its own.",
  },
];

export function getComics(): Comic[] {
  return [...COMICS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function latestComic(): Comic | undefined {
  return getComics()[0];
}

export function getComic(slug: string): Comic | undefined {
  return COMICS.find((c) => c.slug === slug);
}
