// ===== HERO TABLET (md sampai lg) =====
// BELUM DIBUAT — ini cuma placeholder biar tablet gak error.
// Pas ngurus tablet version nanti, ROMBAK file ini dari awal.
// Jangan sentuh HeroDesktop / HeroMobile pas ngerjain ini.
export default function HeroTablet() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white" style={{ height: '56.25vw' }}>
      {/* blok kiri-atas: hitam */}
      <div className="absolute left-0 top-0 h-[45%] w-[60%] bg-ink" />
      {/* blok kiri-bawah: putih */}
      <div className="absolute left-0 top-[45%] h-[55%] w-[60%] bg-white" />
      {/* blok kanan: merah */}
      <div className="absolute left-[60%] top-0 h-[100%] w-[40%] bg-accent" />
      {/* konten sederhana */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="px-6 text-center font-display text-[5vw] font-bold text-white">
          Selamat Datang Di Portal Utama
        </h1>
      </div>
    </section>
  )
}