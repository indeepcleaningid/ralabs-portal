/** @type {import('tailwindcss').Config} */
export default {
  content: ['./entries/**/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#E8EEF4',
        ink: '#1B1B1B',
        accent: '#D70000',
      },
      fontFamily: {
        sans: ['Comfortaa', 'ui-rounded', 'sans-serif'],
        display: ['Comfortaa', 'ui-rounded', 'sans-serif'],
        body: ['Comfortaa', 'ui-rounded', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
