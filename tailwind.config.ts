import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8f2",
          100: "#dcefe1",
          600: "#16834a",
          700: "#116b3b",
          800: "#105632",
          900: "#10472b",
        },
      },
      boxShadow: {
        card: "0 8px 30px rgba(24, 39, 29, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
