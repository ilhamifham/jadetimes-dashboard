import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wix-100" : "#eceff3",
        "wix-200" : "#d6e6fe",
        "wix-300" : "#116dff",
      },
      fontFamily: {
        sans: ["var(--font-madefor)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
