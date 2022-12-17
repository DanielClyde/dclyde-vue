/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'valid': '#285677',
        'err': '#8d0a16',
        'primary': '#3E89BF'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
