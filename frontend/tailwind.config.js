/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4B4B",
        secondary: "#E11D74",
        accent: "#D4AF37",
        "soft-pink": "#F6A1B2",
        "off-white": "#F7F9F8",
        "dark-text": "#0B1F1E",
        "muted-green": "#6B7F7A",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
