/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Ensures all React components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}