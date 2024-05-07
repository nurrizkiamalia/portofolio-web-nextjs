import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#F4F7FA",
        offblack: "#0B0C0E",
        gray: "#3C3D3E",
        lightgray: "#C7D0D9"
      },
      fontFamily:{
        dmSans: "DM Sans, sans-serif",
        inter: "Inter, sans-serif"
      },
      fontSize: {
        headdisplay: "150.4px",
        heading1: "91px",
        heading2: "60px",
        heading3: "40px",
        heading4: "27px",
        paraLg: "27px",
        paraMd: "18px",
        paraSm: "16px",
        paraXs: "14px"
      }
    },
  },
  plugins: [],
};
export default config;
