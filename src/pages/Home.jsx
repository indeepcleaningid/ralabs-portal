import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Preloader from '../components/Preloader.jsx'
import Hero from '../components/Hero.jsx'
import Koleksi from '../components/Koleksi.jsx'
import Tentang from '../components/Tentang.jsx'
import Alur from '../components/Alur.jsx'
import Kontak from '../components/Kontak.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  // true setelah preloader selesai (tirai kebuka). Dipakai buat trigger
  // animasi masuk elemen hero satu per satu.
  const [preloaded, setPreloaded] = useState(false)

  return (
    <div className="min-h-screen bg-surface font-body text-ink">
      <Preloader onDone={() => setPreloaded(true)} />
      <Navbar started={preloaded} />
      <main>
        <Hero started={preloaded} />
        <Koleksi />
        <Tentang />
        <Alur />
        <Kontak />
      </main>
      <Footer />
    </div>
  )
}
