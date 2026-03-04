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
        forest: {
          950: "#0D2818",
          900: "#1B4332",
          800: "#2D6A4F",
          700: "#40916C",
          600: "#52B788",
          500: "#74C69D",
          400: "#95D5B2",
          300: "#B7E4C7",
        },
        cream: "#F8F4ED",
        coral: "#E07A5F",
        sand: "#EDE7E3",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, rgba(13,40,24,0.92) 0%, rgba(27,67,50,0.85) 50%, rgba(45,106,79,0.7) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
