import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lune Escola de Dança — Transforme sua paixão em ritmo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#BD14DF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          gap: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#FFD400",
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#FFD400",
            letterSpacing: "-4px",
            lineHeight: 1,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          LUNE
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#ffffff",
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Escola de Dança
        </div>
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#FFD400",
            borderRadius: "2px",
            margin: "8px 0",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: "800px",
            display: "flex",
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Transforme sua paixão em ritmo
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "16px",
          }}
        >
          {["Ballet", "Hip Hop", "Jazz-Funk", "K-pop"].map((m) => (
            <div
              key={m}
              style={{
                background: "rgba(255,212,0,0.15)",
                border: "2px solid #FFD400",
                color: "#FFD400",
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "1px",
                display: "flex",
              }}
            >
              {m}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          📍 Jundiaí, SP • luneescoladedanca.com
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#FFD400",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
