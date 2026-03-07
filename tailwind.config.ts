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
          "top-bar": "#D4E9F2",
          white: "#FFFFFF",
        },
        "nav-dark": "#2C3E50",
        "accent-red": "#E31837",
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
