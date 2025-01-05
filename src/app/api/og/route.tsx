import { ImageResponse } from "@vercel/og";
import { type ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export const GET = async () => {
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
                    <span style={{ color: "#fff", marginRight: 4 }}>TV</span>
                    <span style={{ color: "#eda1c5" }}>Finder</span>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
};
