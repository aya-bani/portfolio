/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ['Preahvihear', 'sans-serif'], // Fallback to sans-serif
      },
      colors: {
        'custom-purple': '#7127BA', 
        'custom-purple-1': '#251043',
        'custom-purple-2': '#130428',
        'custom-purple-3': '#38126D',
        'custom-purple-4': '#261045',
        'custom-purple-5': '#190634',

      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
