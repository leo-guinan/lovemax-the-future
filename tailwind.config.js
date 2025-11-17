/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'love-red': '#FF1744',
        'love-dark': '#0A0A0A',
      },
    },
  },
  plugins: [],
}

