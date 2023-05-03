/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
  // Primary
  "light-blue-050": "#EBF8FF",
  "light-blue-100": "#D1EEFC",
  "light-blue-200": "#A7D8F0",
  "light-blue-300": "#7CC1E4",
  "light-blue-400": "#55AAD4",
  "light-blue-500": "#3994C1",
  "light-blue-600": "#2D83AE",
  "light-blue-700": "#1D6F98",
  "light-blue-800": "#166086",
  "light-blue-900": "#0B4F71",

  "green-050": "#E3F9E5",
  "green-100": "#C1EAC5",
  "green-200": "#A3D9A5",
  "green-300": "#7BC47F",
  "green-400": "#57AE5B",
  "green-500": "#3F9142",
  "green-600": "#2F8132",
  "green-700": "#207227",
  "green-800": "#0E5814",
  "green-900": "#05400A",

  // Neutrals
  "cool-grey-050": "#F5F7FA",
  "cool-grey-100": "#E4E7EB",
  "cool-grey-200": "#CBD2D9",
  "cool-grey-300": "#9AA5B1",
  "cool-grey-400": "#7B8794",
  "cool-grey-500": "#616E7C",
  "cool-grey-600": "#52606D",
  "cool-grey-700": "#3E4C59",
  "cool-grey-800": "#323F4B",
  "cool-grey-900": "#1F2933",

  // Supporting
  "purple-050": "#EAE2F8",
  "purple-100": "#CFBCF2",
  "purple-200": "#A081D9",
  "purple-300": "#8662C7",
  "purple-400": "#724BB7",
  "purple-500": "#653CAD",
  "purple-600": "#51279B",
  "purple-700": "#421987",
  "purple-800": "#34126F",
  "purple-900": "#240754",

  "red-050": "#FFEEEE",
  "red-100": "#FACDCD",
  "red-200": "#F29B9B",
  "red-300": "#E66A6A",
  "red-400": "#D64545",
  "red-500": "#BA2525",
  "red-600": "#A61B1B",
  "red-700": "#911111",
  "red-800": "#780A0A",
  "red-900": "#610404",

  "yellow-050": "#FFFAEB",
  "yellow-100": "#FCEFC7",
  "yellow-200": "#F8E3A3",
  "yellow-300": "#F9DA8B",
  "yellow-400": "#F7D070",
  "yellow-500": "#E9B949",
  "yellow-600": "#C99A2E",
  "yellow-700": "#A27C1A",
  "yellow-800": "#7C5E10",
  "yellow-900": "#513C06",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
