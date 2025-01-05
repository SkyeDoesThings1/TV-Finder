import { suse } from "@/ui/fonts";
import { TopBar } from "@/components/TopBar";
import { type Viewport, type Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "TV Finder",
    description:
        "A service to show TV shows and series ratings and where users can find them!",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
        title: "TV Finder",
        description:
            "A service to show TV shows and series ratings and where users can find them!",
        url: "https://tv.skyler.lol/",
        type: "website",
        images: [
            {
                url: "/api/og",
                width: 1200,
                height: 630,
                alt: "TV Finder Open Graph Image",
            },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: "#eda1c5",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${suse.variable} bg-white font-sans text-black antialiased selection:bg-[#eda1c4] selection:text-black dark:bg-black dark:text-white dark:selection:text-white`}
            >
                <ThemeProvider attribute="class">
                    <div id="app">
                        <TopBar />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
