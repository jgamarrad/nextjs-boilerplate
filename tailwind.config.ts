import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E0E0E",
        fg: "#F6F2EA",
        gold: "#C9A24D",
        wine: "#8B1E2D",
        card: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.10)",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
