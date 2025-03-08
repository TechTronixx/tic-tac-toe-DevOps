/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "game-dark": "#0f172a",
        "game-dark-secondary": "#1e293b",
        "game-dark-hover": "#334155",
        "game-accent": "#0d9488",
        "game-accent-hover": "#0f766e",
        "game-accent-light": "#5eead4",
        "game-secondary": "#3b82f6",
        "game-secondary-light": "#93c5fd",
      },
    },
  },
  plugins: [],
};
