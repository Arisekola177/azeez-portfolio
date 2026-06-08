/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "240px",
        sm: "320px",
        sml: "480px",
        md: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        bone: "#f5f0e8",
        inkLight: "#1a1a1a",
        inkMid: "#2a2a2a",
        inkBorder: "#2e2e2e",
        dusty: "#888888",
        dustyLight: "#aaaaaa",
        accent: "#e8e0d0",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
