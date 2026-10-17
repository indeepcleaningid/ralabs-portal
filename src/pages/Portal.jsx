import { useEffect, useRef, useState } from 'react'
import About from '../components/About.jsx'
import Collection from '../components/Collection.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Gerbang from '../components/Gerbang.jsx'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'

export default function Portal() {
  const [gerbangTerbuka, setGerbangTerbuka] = useState(false)
  const isiRef = useRef(null)

  // Setelah gerbang terbuka, fokus pindah ke isi utama supaya alur keyboard lanjut.
  useEffect(() => {
    if (gerbangTerbuka) isiRef.current?.focus()
  }, [gerbangTerbuka])

  if (!gerbangTerbuka) {
    return <Gerbang onMasuk={() => setGerbangTerbuka(true)} />
  }

  return (
    <>
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-merah focus:px-4 focus:py-3 focus:font-bold focus:text-kertas"
      >
        Lewati ke isi utama
      </a>
      <Navbar />
      <main id="konten-utama" ref={isiRef} tabIndex={-1}>
        <Hero />
        <About />
        <Collection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
