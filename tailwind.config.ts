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
          950: "#0A1F16",
          900: "#103123",
          800: "#1A4F38",
          700: "#246B4E",
          600: "#31926A",
          500: "#41B886",
          400: "#60CBA0",
          300: "#86DDB8",
        },
        cream: "#F9FAF9",
        coral: "#FF6B6B",
        sand: "#F4F4F5",
        surface: {
          light: "#FFFFFF",
          dark: "#09090B",
        }
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "reveal": "reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
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
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, rgba(10,31,22,0.95) 0%, rgba(26,79,56,0.85) 50%, rgba(49,146,106,0.7) 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
