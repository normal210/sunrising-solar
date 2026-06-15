/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#ebf0f7",
          100: "#d7e1ef",
          200: "#afc3df",
          300: "#87a5cf",
          400: "#5f87bf",
          500: "#1a365d",
          600: "#162e52",
          700: "#122546",
          800: "#0e1d3b",
          900: "#0a142f",
        },
        accent: {
          50: "#fef9ed",
          100: "#fdf3db",
          200: "#fbe7b7",
          300: "#f9db93",
          400: "#f6ad55",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
