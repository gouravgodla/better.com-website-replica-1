import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'better-green': '#00a686',
        'better-green-light': '#e6f6f3',
        'better-green-dark': '#00856b',
        'better-text': '#1c1c1c',
        'better-text-secondary': '#5d5d5d',
      },
    },
  },
  plugins: [],
};
export default config;
