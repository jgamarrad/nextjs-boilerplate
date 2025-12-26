import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        llama: {
          bg: "#070708",
          panel: "rgba(255,255,255,0.06)",
          panel2: "rgba(255,255,255,0.08)",
          line: "rgba(255,255,255,0.10)",
          text: "rgba(255,255,255,0.92)",
          muted: "rgba(255,255,255,0.70)",
          gold: "#D6B15A",
          gold2: "#B8902E",
          rose: "#C22C4E",
        },
      },
      boxShadow: {
        soft: "0 12px 50px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};

export default config;
