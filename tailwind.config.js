/** @type {import('tailwindcss').Config} */
export default {
  content: ['./entries/**/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Empat warna palet RaLabs. Tidak ada warna kelima.
        kertas: '#F8FAFC',
        tinta: '#0C0C0C',
        merah: '#D70000',
        kuning: '#FFE578',
        // Bidang dan teks ikut tema lewat CSS variable di global.css.
        bidang: 'var(--bidang)',
        teks: 'var(--teks)',
        garis: 'var(--garis)',
        lawan: 'var(--lawan-bidang)',
        lawanTeks: 'var(--lawan-teks)',
      },
      fontFamily: {
        sans: ['Comfortaa', 'ui-rounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
