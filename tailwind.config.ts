import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  plugins: [],
  colors: {
    "redrice-red": "#FF3636",
    "redrice-yellow": "#F9A826",
    "redrice-light-yellow": "#FDC15D",
    "redrice-green": "#1DA1F2",
    "redrice-blue" : "1DA1F2",
  },
};
export default config;
