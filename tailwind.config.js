/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'Sans'],
        nyght: ['Nyght Serif Light Italic', 'Outfit'],
      }
    },
  },
  plugins: [],
}

