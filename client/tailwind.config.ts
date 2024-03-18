import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "whatsapp-bp": "755px",
      },
      flex:{
        '2':'0 0 30%',
        '60':'0 0 60%'
      },
    },
  },
  plugins: [],
};
export default config;
