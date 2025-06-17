/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        artesano: {
          primary: '#8B4513',    // Saddle Brown
          secondary: '#DAA520',  // Goldenrod
          accent: '#228B22',     // Forest Green
          dark: '#654321',       // Dark Brown
          light: '#F5E6D3',      // Beige
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}