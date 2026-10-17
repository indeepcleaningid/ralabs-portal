import { useState } from 'react'
import { bacaTema, pasangTema } from '../theme.js'
import CardNav from './CardNav.jsx'
import './Navbar.css'

const GITHUB = 'https://github.com/robbyaliasaakbar'

// Empat kartu, satu per section. Statis, jadi ditaruh di luar komponen.
const KARTU = [
  {
    label: 'Home',
    description: 'Portal semua projects.',
    links: [{ label: 'Home', href: '#home' }],
  },
  {
    label: 'About',
    description: 'Kumpulan projects yang dibangun sendiri atau bareng tim.',
    links: [{ label: 'About', href: '#about' }],
  },
  {
    label: 'Collection',
    description: 'Seluruh keleksi project yang sudah diterbitkan',
    links: [{ label: 'Collection', href: '#collection' }],
  },
  {
    label: 'Contact',
    description: 'Email, WhatsApp, dan tautan lain.',
    links: [{ label: 'Kontak', href: '#contact' }],
  },
]

// Warna CardNav wajib lewat prop style, bukan CSS: komponennya menulis
// semua variabel --cn-* sebagai inline style, jadi CSS class kalah.
const PALET_TERANG = {
  '--cn-panel': '#f8fafc',
  '--cn-solid': '#f8fafc',
  '--cn-text': '#0c0c0c',
  '--cn-muted': 'rgba(12, 12, 12, 0.7)',
  '--cn-tile': '#f8fafc',
  '--cn-tile-rim': 'inset 0 0 0 1px rgba(12, 12, 12, 0.12)',
  '--cn-edge': 'rgba(12, 12, 12, 0.14)',
  '--cn-highlight': 'rgba(255, 255, 255, 0.9)',
  '--cn-hover': 'rgba(12, 12, 12, 0.06)',
  '--cn-ring': '#d70000',
  '--cn-shadow': '0 10px 24px -14px rgba(12, 12, 12, 0.35)',
}

const PALET_GELAP = {
  '--cn-panel': '#0c0c0c',
  '--cn-solid': '#0c0c0c',
  '--cn-text': '#f8fafc',
  '--cn-muted': 'rgba(248, 250, 252, 0.7)',
  '--cn-tile': '#0c0c0c',
  '--cn-tile-rim': 'inset 0 0 0 1px rgba(248, 250, 252, 0.14)',
  '--cn-edge': 'rgba(248, 250, 252, 0.16)',
  '--cn-highlight': 'rgba(255, 255, 255, 0.06)',
  '--cn-hover': 'rgba(248, 250, 252, 0.08)',
  '--cn-ring': '#d70000',
  '--cn-shadow': '0 10px 24px -14px rgba(0, 0, 0, 0.8)',
}

export default function Navbar() {
  const [tema, setTema] = useState(() => bacaTema())

  const gantiTema = () => {
    const berikutnya = tema === 'gelap' ? 'terang' : 'gelap'
    pasangTema(berikutnya)
    setTema(berikutnya)
  }

  // Label nunjukin tema yang akan dituju, bukan yang sedang aktif.
  // "Dark" pas temanya terang, "Light" pas temanya gelap.
  // Nama aksesibelnya diawali teks yang kelihatan itu, supaya pengguna
  // kontrol suara bisa bilang "klik Dark" dan tetap cocok (WCAG 2.5.3).
  const labelTema = tema === 'terang' ? 'Dark' : 'Light'
  const palet = tema === 'gelap' ? PALET_GELAP : PALET_TERANG

  const tombolTema = (
    <button
      type="button"
      className="cn-tema"
      onClick={gantiTema}
      aria-label={`${labelTema}, ganti ke tema ${tema === 'terang' ? 'gelap' : 'terang'}`}
    >
      {labelTema}
    </button>
  )

  return (
    <header className="navbar-ralabs sticky top-0 z-40">
      {/* Pita: bidang selebar layar, sedikit lebih tinggi dari bar CardNav. */}
      <div className="pita-navbar">
        <div className="px-4">
          <CardNav
            logo="/images/logo+logotext.webp"
            logoAlt="RaLabs"
            logoHref="#home"
            items={KARTU}
            actions={tombolTema}
            cta={{
              label: 'GitHub',
              href: GITHUB,
              // Buka di tab baru, jadi portalnya nggak ketutup. noopener
              // nutup celah reverse tabnabbing, noreferrer sekalian.
              target: '_blank',
              rel: 'noopener noreferrer',
            }}
            theme={tema === 'gelap' ? 'dark' : 'light'}
            surface="solid"
            openOn="click"
            cardEffect="unfold"
            stagger={0.18}
            bounce={0.4}
            speed={0.9}
            cardHeight={160}
            maxWidth={1120}
            accentColor="#d70000"
            menuLabel={true}
            intro={true}
            ariaLabel="Navigasi utama"
            style={{ ...palet, '--cn-logo': '34px' }}
          />
        </div>
      </div>
    </header>
  )
}
