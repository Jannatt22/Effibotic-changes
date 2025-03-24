/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecf5fa',
          100: '#d0e6f2',
          200: '#a3cde5',
          300: '#75b3d7',
          400: '#489aca',
          500: '#3a7d9e', // Main brand color
          600: '#2e658a',
          700: '#2c5d78', // Secondary brand color
          800: '#1a3c50',
          900: '#0d1e28',
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
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}; 