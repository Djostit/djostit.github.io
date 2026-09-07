/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        kanit: ['Montserrat', 'sans-serif'], // alias so existing classes use Montserrat
      },
      colors: {
        darkBg: '#0C0C0C',
        textLight: '#D7E2EA',
        gradStart: '#646973',
        gradEnd: '#BBCCD7',
      },
    },
  },
  plugins: [],
};
