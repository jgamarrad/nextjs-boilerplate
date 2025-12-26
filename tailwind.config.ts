import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0B0D",       // negro grafito
          card: "#111114",     // tarjetas
          line: "rgba(255,255,255,0.10)",
          ivory: "#F6F2EA",    // marfil (texto claro)
          gold: "#C9A24D",     // dorado
          wine: "#7A1E2B",     // rojo vino (acento)
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;

