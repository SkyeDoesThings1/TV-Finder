import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-suse)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
} satisfies Config;
