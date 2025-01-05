"use client";

import Link from "next/link";
import { Logo, MoonIcon, MovieIcon, SunIcon, TVIcon } from "@/components/svg";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/useIsMounted";

const ThemeButton = () => {
    const mounted = useIsMounted();
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-6 w-6 items-center justify-center"
            aria-label={
                mounted
                    ? `Switch to ${isDark ? "light" : "dark"} theme`
                    : "Toggle theme"
            }
        >
            {mounted ? (
                isDark ? (
                    <SunIcon />
                ) : (
                    <MoonIcon />
                )
            ) : (
                <div className="h-6 w-6" />
            )}
        </button>
    );
};

export const TopBar = () => {
    return (
        <div id="navbar" className="px-4 py-2 shadow-md dark:text-white">
            <nav
                className="flex items-center justify-between"
                role="navigation"
            >
                <div className="flex cursor-pointer items-center">
                    <Link href="/" aria-label="Home">
                        <Logo />
                    </Link>
                </div>
                <ul className="flex items-center gap-6">
                    <li className="flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-[#eda1c5]">
                        <TVIcon />
                        <Link href="/tv">TV</Link>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-[#eda1c5]">
                        <MovieIcon />
                        <Link href="/movies">Movies</Link>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2 transition-colors duration-200 hover:text-[#eda1c5]">
                        <ThemeButton />
                    </li>
                </ul>
            </nav>
        </div>
    );
};
