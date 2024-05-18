/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        night: {
          default: '#0d1120',
          50: '#171E2C',
          500: '#0d1120',
        }

      },

      keyframes: {
        float:{
          '0%, 100%': { transform: 'translateY(2px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },

      animation: {
        float: 'float 2.3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      }
    },
  },

  plugins: [],
}