/** @type {import('tailwindcss').Config} */
module.exports = {
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
        transparent: 'transparent',
        'white': '#fff',
        'random': '#D9D9D9',
        'random2': '#000000',
        'random3': '#939C81',
        'random4': '#4A4D43',
        'random5': '#818872',
      },
      fontFamily:{
        helvetica: ['Helvetica','sans-serif'],
      },
    },
  },
  plugins: [],
};
