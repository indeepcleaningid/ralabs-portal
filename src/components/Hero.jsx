import HeroDesktop from './HeroDesktop.jsx'
import HeroTablet from './HeroTablet.jsx'
import HeroMobile from './HeroMobile.jsx'

// Pengatur Hero: tampilkan sesuai breakpoint.
// - Desktop  : lg ke atas   -> HeroDesktop (SUDAH DI-LOCK)
// - Tablet   : md sampai lg -> HeroTablet (SUDAH DI-LOCK)
// - Mobile   : di bawah md  -> HeroMobile
// Penting: tiap versi file sendiri-sendiri, jadi ngurus satu gak ngerusak yang lain.
// Prop `started` wajib diteruskan ke tiap versi, biar animasi pasca-preloader jalan.
//
// 16 Okt 2026 - hero auto-fit: pembungkus (stage) tiap versi sekarang pegang
// tinggi 1 layar + clipping + centering, jadi kotak rasio artboard di dalamnya
// bisa di-contain tanpa ngerusak posisi elemen. Detail + alasannya ada di
// global.css (.hero-stage-desktop / .hero-stage-tablet).
// 16 Okt 2026 (batch 2): tablet ikut auto-fit. Mobile masih pakai pembungkus
// lama, dirapikan di batch berikutnya biar satu PR satu versi.
export default function Hero({ started }) {
  return (
    <section id="home" aria-label="Beranda" className="relative w-full">
      <div className="hero-stage-desktop hidden lg:flex">
        <HeroDesktop started={started} />
      </div>
      <div className="hero-stage-tablet hidden md:flex lg:hidden">
        <HeroTablet started={started} />
      </div>
      <div className="block md:hidden">
        <HeroMobile started={started} />
      </div>
    </section>
  )
}