import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        patina: {
          50: "#f5f8f6",
          100: "#dee9e4",
          200: "#bcd3c8",
          300: "#93b5a7",
          400: "#6c9585",
          500: "#527a6b",
          600: "#406155",
          700: "#364f46",
          800: "#2e413b",
          900: "#293833",
          950: "#141f1c",
        },
        havelockblue: {
          50: "#eff7ff",
          100: "#dcecfd",
          200: "#c0defd",
          300: "#95cafb",
          400: "#63acf7",
          500: "#408cf2",
          600: "#296ee7",
          700: "#2158d4",
          800: "#2149ac",
          900: "#204088",
          950: "#182953",
        },
        cello: {
          50: "#f4f6fb",
          100: "#e8edf6",
          200: "#cdd9ea",
          300: "#a1b9d8",
          400: "#6e94c2",
          500: "#4c77ab",
          600: "#3a5e8f",
          700: "#304c74",
          800: "#2b4161",
          900: "#283953",
          950: "#1a2437",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
