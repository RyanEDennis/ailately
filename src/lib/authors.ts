// The people who write AI Lately. Bylines link to these profiles.

export type Author = {
  slug: string;
  name: string;
  role: string;
  x: string; // handle without the @
  accent: string; // a Pantone-palette hex, used for the profile monogram
  initials: string;
  bio: string;
  aliases?: string[]; // byline strings that also map to this author
};

export const AUTHORS: Author[] = [
  {
    slug: "ryan-elliott-dennis",
    name: "Ryan Elliott Dennis",
    role: "Founder and Editor",
    x: "xryandennis",
    accent: "#0F4C81", // Classic Blue
    initials: "RD",
    bio: "Ryan Elliott Dennis founded AI Lately and edits it. He writes the opinion column, sets the house standards, and signs every correction — reading the industry through the people who build it.",
  },
  {
    slug: "kelly-dennis",
    name: "Kelly Dennis",
    role: "Co-Editor and Lead Technical Analyst",
    x: "keldenni",
    accent: "#BE3455", // Viva Magenta
    initials: "KD",
    bio: "Kelly Dennis is Co-Editor and Lead Technical Analyst of AI Lately, where she turns the machinery of AI, cloud, and emerging technology into analysis a board member and a build engineer can both act on. Her career centers on that translation: years of technical documentation, UX and content strategy, and reporting on frontier technology from blockchain markets to the modern software stack. Google-certified in UX design, trained at Hampton University, and finishing a B.S. in Information Technology, she pairs a researcher's precision with a writer's ear. Editors reach for her when a story hides inside a spec, a filing, or a benchmark, and someone has to make it plain.",
  },
];

const BY_SLUG = new Map(AUTHORS.map((a) => [a.slug, a]));
const BY_NAME = new Map<string, Author>();
for (const a of AUTHORS) {
  BY_NAME.set(a.name.toLowerCase(), a);
  for (const alias of a.aliases ?? []) BY_NAME.set(alias.toLowerCase(), a);
}

export function getAuthor(slug: string): Author | undefined {
  return BY_SLUG.get(slug);
}

/** Resolve a byline or author string to a known author, when one exists. */
export function authorForName(name?: string): Author | undefined {
  return name ? BY_NAME.get(name.trim().toLowerCase()) : undefined;
}
