/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    './src/components/**/*.{js,jsx}'
],
  theme: {
    fontFamily: {
      'display': ['Saira', 'sans-serif'],
      'sans': ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'greenbg': '#0F1512',
        'greenlbg': '#CEE9DC',
        'greenft': '#003829',
        'greenlft': '#B2CCC0',
        'bluefooter': '#274B5D',
        'wppcolor': '#00513D',
      },
    },
  },
  plugins: [],
}

