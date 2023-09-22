import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bgImg.jpeg')"
      },
      colors: {
        bodyColor: "#fbfaf7",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5"
      }
    }
  },
  plugins: []
};

export default config;