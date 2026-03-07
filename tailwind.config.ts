import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        un: {
          navy: "#002B49",
          blue: "#009EDB",
          "blue-light": "#4DA6C8",
          "blue-pale": "#E8F4F8",
          white: "#FFFFFF",
        },
        slate: {
          850: "#1E293B",
          950: "#0F172A",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(0,43,73,0.75) 0%, rgba(0,43,73,0.5) 50%, rgba(0,43,73,0.9) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
