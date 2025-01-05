import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-suse)", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
} satisfies Config;
