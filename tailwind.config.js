/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff771c',
          light: '#fff7ed',
          dark: '#e5650f',
        },
        ink: {
          DEFAULT: '#31373a',
          heading: '#252f37',
          muted: '#676c6f',
        },
        logo: {
          wrap: '#3d4a57',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
