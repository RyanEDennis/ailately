import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const alt = "AI Lately";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#101820", padding: "64px 72px", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#939597", fontFamily: "Helvetica, Arial, sans-serif", letterSpacing: 2 }}>
          <span>AILATELY.COM</span>
          <span>{SITE.edition.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 500, letterSpacing: -3, lineHeight: 1 }}>AI Lately</div>
          <div style={{ marginTop: 24, fontSize: 34, fontStyle: "italic", color: "#3d444c" }}>{SITE.tagline}</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["#0f4c81", "#be3455", "#a47864", "#6667ab", "#f5df4d", "#f0eee9"].map((c) => (
            <div key={c} style={{ width: 56, height: 14, background: c, borderRadius: 3 }} />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
