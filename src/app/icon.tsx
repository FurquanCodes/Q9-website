import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#070d26",
          border: "1.5px solid #ff7a00",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px",
          fontWeight: 900,
        }}
      >
        <span style={{ color: "#ffffff" }}>Q</span>
        <span style={{ color: "#ff7a00" }}>9</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
