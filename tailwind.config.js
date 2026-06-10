/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#093c5d',     // Primary text, headings, navbar background
          steelblue: '#3b7597', // Cards, section accents, secondary elements
          cyan: '#6fd1d7',      // Borders, subtle highlights, dividers
          mint: '#5df8d8',      // CTA buttons, hover glow effects, accents
          amber: '#D4A017',     // Logo accent, premium highlights
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}
