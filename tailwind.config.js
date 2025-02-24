/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-primeui')]
}

