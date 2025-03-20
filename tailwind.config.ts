import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "calc(var(--radius) + 2px)",
        md: "calc(var(--radius) + 4px)",
      },
      colors: {
        lightest: "hsl(var(--lightest))",
        lighter: "hsl(var(--lighter))",
        light: "hsl(var(--light))",
        between: "hsl(var(--between))",
        dark: "hsl(var(--dark))",
        darker: "hsl(var(--darker))",
        darkest: "hsl(var(--darkest))",

        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      },
      keyframes: {
        "rotate-ccw": { to: { transform: "rotate(-1turn)" } },
        "move-bg": {
          "0%": { backgroundPositionX: "0%" },
          "100%": { backgroundPositionX: "400%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg) translateX(6px)" },
          "50%": { transform: "rotate(10deg) translateX(-6px)" },
        },
      },
      animation: {
        "rotate-ccw": "rotate-ccw 10s linear infinite",
        "move-bg": "move-bg 20s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
