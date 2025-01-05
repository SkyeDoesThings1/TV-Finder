import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "tv thing",
    description:
        "A service to show TV shows and series ratings and where users can find them!",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
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
