// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 1. ADD THIS LINE
  darkMode: 'class', 
  
  content: [
    // Ensure all relevant files are listed here
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}