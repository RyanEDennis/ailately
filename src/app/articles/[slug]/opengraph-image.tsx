import { ImageResponse } from "next/og";
import { getArticles, getPiece } from "@/lib/content";

export const runtime = "nodejs";
export const alt = "AI Lately";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getArticles()).map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = await getPiece("articles", slug);
  const title = piece?.title ?? "AI Lately";
  const kicker = piece?.categoryLabel ?? "";
  const stat = piece?.epigraph.stat ?? "";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#101820", padding: "56px 64px", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Helvetica, Arial, sans-serif", fontSize: 22, letterSpacing: 2, color: "#0f4c81" }}>
          <span>{kicker.toUpperCase()}</span>
          <span style={{ color: "#939597" }}>AI LATELY</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: title.length > 60 ? 56 : 68, fontWeight: 500, letterSpacing: -1.5, lineHeight: 1.08 }}>{title}</div>
          {stat && <div style={{ marginTop: 22, fontSize: 30, color: "#be3455", fontFamily: "Helvetica, Arial, sans-serif" }}>{stat}</div>}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: -1 }}>AI Lately</div>
          <div style={{ display: "flex", gap: 10 }}>
            {["#0f4c81", "#be3455", "#a47864", "#6667ab", "#f5df4d", "#f0eee9"].map((c) => (
              <div key={c} style={{ width: 44, height: 12, background: c, borderRadius: 3 }} />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
