/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '12px'],
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        ens: ['Exo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gradient: {
          start: '#aafff8',
          end: '#e1b1fc',
        },
        ens: {
          background: '#141414;',
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
