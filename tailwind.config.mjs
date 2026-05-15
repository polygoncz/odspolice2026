/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#39D4D8',
        secondary: '#26A9AE',
        ink:       '#002D52',
        paper:     '#FFFFFF',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
