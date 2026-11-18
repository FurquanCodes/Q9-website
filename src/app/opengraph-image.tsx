import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#070d26",
          backgroundImage:
            "radial-gradient(circle at 50% 25%, rgba(255,106,0,0.3) 0%, transparent 65%)",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "28px",
          }}
        />

        {/* Logo Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "22px",
              background: "linear-gradient(135deg, #ff5500, #ffaa00)",
              color: "#ffffff",
              fontSize: "40px",
              fontWeight: 900,
            }}
          >
            Q9
          </div>
          <div
            style={{
              fontSize: "46px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "0.08em",
            }}
          >
            TECHNOLOGIES
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "920px",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Great People Building Useful Apps
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "36px",
          }}
        >
          <div
            style={{
              padding: "10px 26px",
              borderRadius: "999px",
              background: "rgba(255, 106, 0, 0.15)",
              border: "1px solid rgba(255, 106, 0, 0.45)",
              color: "#ff8c1a",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Simpler Tomorrow
          </div>
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Android & iOS Applications
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
