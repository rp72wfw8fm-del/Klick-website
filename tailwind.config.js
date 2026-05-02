/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#00B4A0',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        dark: '#11181C',
        light: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
