// Featured art for every piece.
//
// A piece gets its image by slug when we have chosen bespoke art for it, and
// otherwise by category, so every article and post carries a relevant image —
// including ones published later. All photos are free stock from Pexels
// (https://www.pexels.com), embedded from the Pexels CDN.

export type PieceImage = { url: string; alt: string; source: string };

const cdn = (id: number, ext: "jpeg" | "png" = "jpeg") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=1600`;
const page = (id: number) => `https://www.pexels.com/photo/${id}/`;
const img = (id: number, alt: string, ext: "jpeg" | "png" = "jpeg"): PieceImage => ({
  url: cdn(id, ext),
  alt,
  source: page(id),
});

// One image per editorial category. Every category in src/lib/site.ts appears
// here, so any piece resolves to art through its category at the very least.
export const CATEGORY_IMAGES: Record<string, PieceImage> = {
  hiring: img(6814523, "Two people shaking hands across an office desk"),
  agents: img(6424584, "Lines of program code on a screen"),
  models: img(17483871, "An artist's visualisation of a neural network", "png"),
  compute: img(17489163, "A server unit glowing in blue light"),
  capital: img(8370389, "Stacks of silver and gold coins"),
  enterprise: img(3182823, "Colleagues working together around a table"),
  policy: img(8788264, "The United States Capitol building"),
  safety: img(5380647, "A hooded figure at a computer in a dark room"),
  web3: img(7267602, "Gold and silver cryptocurrency coins"),
  applied: img(7089024, "A CT scanner in a hospital imaging room"),
  consumer: img(32665242, "A hand holding a smartphone full of app icons"),
  labor: img(5439381, "A handshake after a job interview"),
  research: img(18069493, "A 3D visualisation of artificial intelligence", "png"),
  geopolitics: img(6687532, "A stylised image of the globe"),
};

// Bespoke art for specific pieces, chosen to fit the story. Overrides the
// category image above.
export const SLUG_IMAGES: Record<string, PieceImage> = {
  "ai-in-software-testing": img(16592498, "Program source code on a monitor in blue light"),
  "inference-is-the-new-oil": img(17489163, "A server unit glowing in blue light"),
  "linkedins-last-year": img(6814523, "Two people shaking hands across an office desk"),
  "people-are-the-product": img(18068768, "An abstract illustration of artificial intelligence", "png"),
  "reasonings-rebate": img(17483871, "An artist's visualisation of a neural network", "png"),
  "the-agent-economy-needs-a-bank": img(8370389, "Stacks of silver and gold coins"),
  "agent-native-money-x402-coinbase-base": img(7267602, "Gold and silver cryptocurrency coins"),
  "crypto-ai-talent-migration": img(5439381, "A handshake after a job interview"),
  "coding-agents-cursor-cognition-claude-code-codex": img(6424584, "Lines of program code on a screen"),
  "healthcare-legal-ai-abridge-openevidence-harvey": img(7089024, "A CT scanner in a hospital imaging room"),
  "entry-level-jobs-ai-canaries": img(3182823, "Colleagues working together around a table"),
  "world-models-next-paradigm-lecun-worldlabs": img(18069493, "A 3D visualisation of artificial intelligence", "png"),
  "nvidia-hugging-face-open-source": img(6636476, "A close-up of a blue computer circuit board"),
};

export function pieceImage(slug: string, category?: string): PieceImage | undefined {
  return SLUG_IMAGES[slug] ?? (category ? CATEGORY_IMAGES[category] : undefined);
}
