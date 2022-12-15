/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        budarkblue: '#404168',
        bugray: {
          400: '#969798',
          500: '#666666',
          700: '#353535',
          800: '#262626',
          900: '#171818'
        }
      },
    },
  },
  plugins: [],
};
