import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "TV Thing",
    description:
        "A service to show TV shows and series ratings and where users can find them!",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
        title: "TV Thing",
        description:
            "A service to show TV shows and series ratings and where users can find them!",
        url: "https://tv.skyler.lol/",
        type: "website",
        images: [
            {
                url: "/api/og",
                width: 1200,
                height: 630,
                alt: "TV Thing Open Graph Image",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>{children}</body>
        </html>
    );
}
