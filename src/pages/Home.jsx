import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Koleksi from '../components/Koleksi.jsx'
import Tentang from '../components/Tentang.jsx'
import Alur from '../components/Alur.jsx'
import Kontak from '../components/Kontak.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <Koleksi />
        <Tentang />
        <Alur />
        <Kontak />
      </main>
      <Footer />
    </div>
  )
}
