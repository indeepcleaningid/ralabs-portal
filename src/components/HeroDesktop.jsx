import { useState } from 'react'
import TiltCard from './TiltCard.jsx'

// ===== HERO DESKTOP (lg ke atas) =====
// Layout ini SUDAH DI-LOCK sama Bang Rob. Jangan diubah-ubah kecuali diminta.
// Kalau mau ubah tablet/mobile, buka HeroTablet / HeroMobile — bukan file ini.
export default function HeroDesktop() {
  const [bounce, setBounce] = useState(false)

  function handleChevronClick() {
    setBounce(true)
    setTimeout(() => setBounce(false), 400)
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      style={{ height: '56.25vw' }}
      aria-hidden="true"
    >
      {/* blok kiri-atas: hitam */}
      <div className="absolute left-0 top-0 h-[calc(45.37%-150px)] w-[59.11%] bg-ink" />

      {/* blok kiri-bawah: putih */}
      <div className="absolute left-0 top-[calc(45.37%-150px)] h-[calc(50.46%+150px)] w-[59.11%] bg-white" />

      {/* blok kanan: merah */}
      <div className="absolute left-[59.11%] top-0 h-[95.83%] w-[40.89%] bg-accent" />

      {/* strip bawah: hitam, selebar layar */}
      <div className="absolute left-0 top-[95.83%] h-[4.17%] w-full bg-ink" />

      {/* eyebrow: titik merah + teks, center surface, lurus */}
      <div className="absolute left-0 top-[calc(13%+40px-50px)] flex w-full items-center justify-center gap-[0.56vw]">
        <span className="aspect-square w-[1.23vw] rounded-full bg-accent" aria-hidden="true" />
        <span className="font-display text-[1.12vw] font-bold text-accent">
          Bengkel Kode &amp; Karya Gue
        </span>
      </div>

      {/* headline: banner merah miring ke atas, center surface */}
      <div className="absolute left-0 top-[calc(22%-50px)] z-10 flex w-full justify-center">
        <div className="-rotate-2 rounded-[0.97vw] bg-accent px-[2.03vw] py-[0.97vw]">
          <h1 className="font-display text-[2.43vw] font-bold leading-none text-white">
            Selamat Datang Di Portal Utama
          </h1>
        </div>
      </div>

      {/* quote: 3 baris + kutip kiri-atas & kanan-bawah */}
      <div className="absolute left-0 top-[calc(47%+30px-125px)] z-10 flex w-[59.11%] justify-center">
        <div className="relative w-[54.14%]">
          {/* kutip kiri-atas, miring ke kanan */}
          <span
            aria-hidden="true"
            className="absolute -left-[1.5vw] -top-[2vw] rotate-[15deg] font-display text-[6.3vw] font-bold leading-none text-black"
          >
            &ldquo;
          </span>
          {/* teks quote */}
          <p className="text-center font-display text-[1.8vw] font-bold leading-[1.35] text-ink">
            Tempat dimana semua
            <br />
            ide, apps, websites, dan tools.
            <br />
            Yang lahir dan live 24 Jam
          </p>
          {/* kutip kanan-bawah, dibalik + miring ke kiri */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[calc(2.5vw+50px)] -right-[calc(1.5vw+20px)] rotate-[15deg] scale-x-[-1] font-display text-[6.3vw] font-bold leading-none text-black"
          >
            &ldquo;
          </span>
        </div>
      </div>

      {/* banner kanan: kartu putih miring berisi logo kubus + wordmark */}
      <div className="absolute left-[calc(65%+0px)] top-[calc(13%+50px-100px)] h-[76.8%] w-[28.8%] -rotate-6">
        <TiltCard maxTilt={8} className="h-full w-full">
          <div className="relative h-full w-full rounded-[2vw] border-[0.45vw] border-ink bg-white shadow-[0.6vw_0.9vw_1vw_rgba(27,24,24,1)]">
            <span className="absolute left-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25vw] border-ink">
              <span className="aspect-square w-1/3 rounded-full bg-ink" />
            </span>
            <span className="absolute right-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25vw] border-ink">
              <span className="aspect-square w-1/3 rounded-full bg-ink" />
            </span>
            <span className="absolute left-[6%] top-[42%] font-display text-[2.4vw] font-bold leading-none text-accent">
              !
            </span>
            <span className="absolute right-[14%] top-[16%] flex flex-col gap-[0.4vw]">
              <span className="block h-[0.28vw] w-[3.5vw] rounded bg-accent" />
              <span className="block h-[0.28vw] w-[3.5vw] rounded bg-accent" />
            </span>
            <div className="flex h-full flex-col items-center justify-center gap-[1vw] px-[8%]">
              <img
                src="/images/favicon-logo.webp"
                alt="Logo kubus RaLabs"
                className="h-[62%] w-auto"
              />
              <img src="/images/logo-text.webp" alt="Ra Labs" className="w-[70%]" />
            </div>
          </div>
        </TiltCard>
      </div>

      {/* kartu kuning ENJOY + maskot */}
      <div className="absolute left-0 top-[calc(68%-20px-125px)] z-10 flex h-[22%] w-[59.11%] items-center justify-center">
        <div className="relative h-full w-[67.67%]">
          <TiltCard maxTilt={8} className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center gap-[2vw] rounded-[1.2vw] border-[0.15vw] border-ink/30 bg-sun px-[4%] shadow-[0.4vw_0.6vw_1vw_rgba(27,24,24,0.3)]">
              <span
                className="font-display text-[4.5vw] font-bold leading-none text-ink"
                style={{ WebkitTextStroke: '0.25vw #1B1818' }}
              >
                ENJOY!!
              </span>
              <img
                src="/images/mascot-enjoy.svg"
                alt="Maskot RaLabs"
                className="h-[90%] w-auto"
              />
            </div>
          </TiltCard>
        </div>
      </div>

      {/* chevron panah ke bawah */}
      <div className="absolute left-1/2 top-[91%] z-10 -translate-x-1/2">
        <a
          href="#koleksi"
          onClick={handleChevronClick}
          aria-label="Lanjut ke bagian Koleksi"
          className={`block text-ink transition-colors duration-200 hover:text-accent ${
            bounce ? 'animate-bounce' : ''
          }`}
        >
          <svg viewBox="0 0 40 30" className="h-[1.75vw] w-[2.45vw]" fill="none" aria-hidden="true">
            <path d="M4 6 L20 24 L36 6" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}