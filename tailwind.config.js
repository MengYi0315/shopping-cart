/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFF',
        'william': {
          '50': '#f4f9f9',
          '100': '#dbecea',
          '200': '#b7d8d7',
          '300': '#8abebe',
          '400': '#629e9f',
          '500': '#488284',
          '600': '#3c6e71',
          '700': '#305355',
          '800': '#294446',
          '900': '#26393b',
          '950': '#121f21',
        },
        'pickled-bluewood': {
          '50': '#f4f8fb',
          '100': '#e8eff6',
          '200': '#ccdeeb',
          '300': '#9fc4da',
          '400': '#6ba4c5',
          '500': '#4889af',
          '600': '#366e93',
          '700': '#2d5977',
          '800': '#284b63',
          '900': '#264054',
          '950': '#192a38',
        },
        'alto': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#d9d9d9',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-primeui')]
}

