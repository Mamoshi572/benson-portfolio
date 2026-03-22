/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF9F8",
          100: "#D6F0EE",
          200: "#ADE1DD",
          300: "#84D2CC",
          400: "#5BC3BB",
          500: "#0F4C5C", // Deep teal - main brand color
          600: "#0A3A46",
          700: "#082E38",
          800: "#05222A",
          900: "#03161C",
        },
        secondary: {
          50: "#FDF5F0",
          100: "#FCE6D9",
          200: "#F9CDB3",
          300: "#F6B48D",
          400: "#F39B67",
          500: "#F9A26C", // Warm coral - accent
          600: "#E88A4A",
          700: "#D2722A",
          800: "#B65A1A",
          900: "#94420A",
        },
        accent: {
          50: "#EFF9F5",
          100: "#D6F0E6",
          200: "#ADE1CD",
          300: "#84D2B4",
          400: "#5BC39B",
          500: "#2C7A7B", // Muted teal - complementary
          600: "#205E5F",
          700: "#164849",
          800: "#0E3233",
          900: "#061C1D",
        },
        dark: {
          bg: "#0F172A",
          surface: "#1E293B",
          card: "#334155",
          border: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px -10px var(--tw-gradient-from)" },
          to: { boxShadow: "0 0 30px -10px var(--tw-gradient-to)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "ocean-breeze":
          "linear-gradient(135deg, #0F4C5C 0%, #2C7A7B 50%, #F9A26C 100%)",
      },
    },
  },
  plugins: [],
};
