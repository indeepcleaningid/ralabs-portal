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
        /* Headline hero pakai Anton (condensed tegas, 1 weight 400).
           Archivo dilepas dari headline. Font lain tetap Comfortaa + JetBrains Mono. */
        headline: ['Anton', 'Archivo', 'Manrope', 'ui-rounded', 'system-ui', 'sans-serif'],
        /* Manrope khusus judul tebal; sisanya tetap Comfortaa + JetBrains Mono. */
        heading: ['Manrope', 'Comfortaa', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['Comfortaa', 'ui-rounded', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
