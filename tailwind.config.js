/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070912",
          soft: "#0c1020",
          card: "#0f1424",
        },
        navy: {
          DEFAULT: "#0d2f52", // primary heading / dark text
          soft: "#33415c", // body text
          light: "#123c66",
          dark: "#0a2340",
        },
        brand: {
          DEFAULT: "#1b8fd6",
          dark: "#155f9a",
        },
        cyanx: {
          DEFAULT: "#22c9f0", // electric cyan accent
        },
        cta: {
          DEFAULT: "#f5831f",
          dark: "#e06d0c",
        },
        success: {
          DEFAULT: "#34d17e",
        },
      },
      fontFamily: {
        display: ["'Instrument Serif'", "ui-serif", "Georgia", "serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(34, 201, 240, 0.45)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        aurora: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -4%) scale(1.15)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        spinslow: "spinslow 40s linear infinite",
      },
    },
  },
  plugins: [],
};
