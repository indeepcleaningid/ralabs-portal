import HeroDesktop from './HeroDesktop.jsx'
import HeroTablet from './HeroTablet.jsx'
import HeroMobile from './HeroMobile.jsx'

// Pengatur Hero: tampilkan sesuai breakpoint.
// - Desktop  : lg ke atas   -> HeroDesktop (SUDAH DI-LOCK)
// - Tablet   : md sampai lg -> HeroTablet (belum dibuat, nyusul)
// - Mobile   : di bawah md  -> HeroMobile  (belum dibuat, nyusul)
// Penting: tiap versi file sendiri-sendiri, jadi ngurus satu gak ngerusak yang lain.
export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
      <div className="hidden md:block lg:hidden">
        <HeroTablet />
      </div>
      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </>
  )
}