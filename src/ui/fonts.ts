import { SUSE } from "next/font/google";

export const suse = SUSE({
    weight: ["500", "800"], // 500 for normal text, 800 for bold text
    preload: true,
    subsets: ["latin"],
    variable: "--font-suse",
});
