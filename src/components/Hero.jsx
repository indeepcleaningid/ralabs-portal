import HeroDesktop from './HeroDesktop.jsx'
import HeroTablet from './HeroTablet.jsx'
import HeroMobile from './HeroMobile.jsx'

// Pengatur Hero: tampilkan sesuai breakpoint.
// - Desktop  : lg ke atas   -> HeroDesktop (SUDAH DI-LOCK)
// - Tablet   : md sampai lg -> HeroTablet (SUDAH DI-LOCK)
// - Mobile   : di bawah md  -> HeroMobile  (BELUM dibuat, masih placeholder)
// Penting: tiap versi file sendiri-sendiri, jadi ngurus satu gak ngerusak yang lain.
export default function Hero({ started }) {
  return (
    <section id="home" aria-label="Beranda" className="relative w-full">
      <div className="hidden lg:block">
        <HeroDesktop started={started} />
      </div>
      <div className="hidden md:block lg:hidden">
        <HeroTablet started={started} />
      </div>
      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </section>
  )
}