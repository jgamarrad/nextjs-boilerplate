import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#070709",
          card: "rgba(255,255,255,0.06)",
          stroke: "rgba(255,255,255,0.12)",
          gold: "#D4AF37",
          gold2: "#B78A2A",
          rose: "#B3122B",
          ivory: "#F5F1E8"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.12), 0 24px 80px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        hero:
          "radial-gradient(1100px 520px at 10% 15%, rgba(212,175,55,0.18), transparent 55%), radial-gradient(900px 420px at 85% 25%, rgba(179,18,43,0.18), transparent 52%), radial-gradient(900px 520px at 50% 110%, rgba(255,255,255,0.06), transparent 60%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
