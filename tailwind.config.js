export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        university: {
          navy: '#00008B',     // Deep navy blue from the header
          cream: '#F8F0D8',    // Cream color from the logo
          gold: '#D4AF37',     // Gold/yellow accent from the logo
          teal: '#1D7A7A',     // Teal/green from the logo shield
        },
        blue: {
          900: '#00008B',      // Override Tailwind's blue-900 to match university navy
          800: '#000080',
          700: '#0000A0',
          600: '#1515B0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 