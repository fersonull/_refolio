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
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-glow": {
          textShadow: "0 0 8px #fff",
        },
        ".text-soft": {
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
        },
      });
    },
  ],
}

