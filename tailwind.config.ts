import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FINAL THEME — Rose / Fuchsia / Amber
        // Class names kept as violet/emerald/amber for compatibility.
        violet: {
          DEFAULT: "#E11D48",
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        },
        emerald: {
          DEFAULT: "#D946EF",
          300: "#F0ABFC",
          400: "#E879F9",
          500: "#D946EF",
          600: "#C026D3",
        },
        amber: {
          DEFAULT: "#F59E0B",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
        },
        ink: {
          950: "#000000",
          900: "#0A0A0A",
          800: "#111111",
          700: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(225,29,72,0.22), transparent 60%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(225,29,72,0.30) 0%, rgba(217,70,239,0.12) 40%, transparent 75%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(244,63,94,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
