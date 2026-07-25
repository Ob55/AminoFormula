/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d2f52",
          dark: "#0a2340",
          light: "#123c66",
        },
        brand: {
          DEFAULT: "#1b75bc", // bottle-label blue
          dark: "#155f9a",
        },
        cyanx: {
          DEFAULT: "#00a8e1", // DNA-helix cyan accent
        },
        cta: {
          DEFAULT: "#f5831f", // high-converting orange
          dark: "#e06d0c",
        },
        success: {
          DEFAULT: "#2e9e5b",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 10px 30px rgba(13, 47, 82, 0.10)",
        cardHover: "0 18px 45px rgba(13, 47, 82, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
