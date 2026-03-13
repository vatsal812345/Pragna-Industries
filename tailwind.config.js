/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pragna-maroon': '#800000',
        'pragna-gray': '#333333',
        'pragna-gold': '#facc15',
        'pragna-white': '#ffffff',
        'pragna-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}

