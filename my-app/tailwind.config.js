/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#e6eef2',
          100: '#ccdde6',
          200: '#99bbcc',
          300: '#6699b3',
          400: '#337799',
          500: '#005580',
          600: '#004466',
          700: '#00334d',
          800: '#002233',
          900: '#00111a',
        },
        dark: {
          primary: '#0c192f',   // Dark blue from Theme_2
          secondary: '#09101f', // Darker blue
        }
      },
    },
  },
  plugins: [],
}; 