import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          DEFAULT: "#0A0F16",
          light: "#111923",
          highlight: "#9BEAE0",
          gold: "#F6C66E"
        }
      },
      fontFamily: {
        suisse: ["Suisse Intl", "Space Grotesk", "Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(155, 234, 224, 0.35)",
        vault: "inset 0 0 0 1px rgba(246, 198, 110, 0.25)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(155, 234, 224, 0.35) 0%, rgba(10,15,22,0) 60%)",
        vault: "linear-gradient(135deg, rgba(10, 15, 22, 1) 0%, rgba(17, 25, 35, 1) 50%, rgba(10, 15, 22, 1) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
