/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        llama: {
          black: "#0B0B0E",
          gold: "#D6B25E",
          gold2: "#B8872B",
          rose: "#E24B5B",
          ivory: "#F7F2E8",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
