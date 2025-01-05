import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export async function GET() {
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
                    backgroundColor: "#000",
                    fontSize: 100,
                    fontWeight: 600,
                }}
            >
                <div style={{ display: "flex" }}>
                    <span style={{ color: "#fff" }}>TV</span>
                    <span style={{ color: "#eda1c5" }}>Finder</span>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
