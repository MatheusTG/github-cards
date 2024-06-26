import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#A855F7",

        gray100: '#ffffff',
        gray200: "#F4F4F5",
        gray400: "#F2F2F2",
        gray500: "#D9D9D9",
        // gray300: "#AAAAAA",
      },
      boxShadow: {
        'card-shadow': '1px 4px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
