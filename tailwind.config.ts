import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#1B2A6B",
          50: "#EEF0FA",
          100: "#D6DBF0",
          200: "#AEB8E1",
          300: "#8595D2",
          400: "#5D72C3",
          500: "#3A4EA0",
          600: "#2A3A83",
          700: "#1B2A6B",
          800: "#141F4F",
          900: "#0D1533",
        },
        tiffany: {
          DEFAULT: "#0ABAB5",
          50: "#E6FBFA",
          100: "#C0F4F2",
          200: "#8AEAE6",
          300: "#54E0DA",
          400: "#2AC9C3",
          500: "#0ABAB5",
          600: "#089591",
          700: "#07716D",
          800: "#054C49",
          900: "#032826",
        },
        silver: {
          DEFAULT: "#C7CDDB",
          50: "#FAFBFC",
          100: "#F2F4F8",
          200: "#E5E9F1",
          300: "#D7DDE9",
          400: "#C7CDDB",
          500: "#A9B1C6",
          600: "#8991AC",
          700: "#6B7389",
          800: "#4D5266",
          900: "#2F3242",
        },
        ivory: "#FBFCFE",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "royal-gradient":
          "linear-gradient(135deg, #0D1533 0%, #1B2A6B 45%, #2A3A83 100%)",
        "tiffany-shine":
          "linear-gradient(120deg, #0ABAB5 0%, #54E0DA 50%, #C7CDDB 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(27, 42, 107, 0.35)",
        glow: "0 0 40px rgba(10, 186, 181, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        flutter: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(30px, -40px) rotate(8deg)" },
          "50%": { transform: "translate(60px, 10px) rotate(-6deg)" },
          "75%": { transform: "translate(20px, 40px) rotate(4deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        wingFlap: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.72)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        flutter: "flutter 18s ease-in-out infinite",
        wingFlap: "wingFlap 0.6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
