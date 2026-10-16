import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Social share image (1200×630) generated at build time.
 * Replaces the old preview that pointed at localhost and never loaded.
 */
export const dynamic = "force-static";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const bars = Array.from({ length: 41 }, (_, i) => {
    const t = 1 - Math.abs(i - 20) / 21;
    return Math.round(30 + 330 * Math.pow(t, 1.6));
  });

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#061d38",
        padding: "72px 80px",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 70,
          bottom: 0,
          display: "flex",
          alignItems: "flex-end",
          gap: 7,
          height: 400,
        }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: h,
              background: "#1f6bb5",
              borderRadius: 4,
              opacity: 0.85,
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 8 }}>
          VISMAY
        </div>
        <div style={{ fontSize: 20, opacity: 0.75, marginTop: 6 }}>
          International Corporation
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 800,
          lineHeight: 1.05,
          maxWidth: 720,
          letterSpacing: -2,
        }}
      >
        {site.tagline}
      </div>
    </div>,
    size,
  );
}
