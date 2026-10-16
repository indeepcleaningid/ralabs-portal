import { useEffect, useState } from 'react'
import TiltCard from './TiltCard.jsx'

// Preloader: overlay hitam + logo RaLabs + tombol "Buka Portal".
// - Logo turun dari atas ke posisi tengah (smooth).
// - Tombol muncul pelan (fade in) setelah logo mendarat.
// - Pas tombol diklik, tirai (2 panel) kebuka ke samping, homepage muncul.
// SEMENTARA tampil tiap refresh biar gampang di-micro-manage.
export default function Preloader({ onDone }) {
  const [done, setDone] = useState(false)
  const [opening, setOpening] = useState(false)
  // Logo mulai di atas layar (di luar), lalu turun ke tengah pas mount.
  const [landed, setLanded] = useState(false)

  // Kunci scroll selama preloader tampil.
  useEffect(() => {
    if (done) return
    document.body.style.overflow = 'hidden'

    // Paksa browser render posisi awal dulu, baru trigger transisi turun.
    const frame = requestAnimationFrame(() => setLanded(true))
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = ''
    }
  }, [done])

  function handleOpen() {
    setOpening(true)
    // Tunggu animasi tirai selesai (2 panel geser ke samping), baru hapus overlay.
    setTimeout(() => {
      setDone(true)
      onDone?.()
    }, 1200)
  }

  if (done) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden" aria-hidden={opening}>
      {/* panel tirai belah dua: kiri geser ke kiri, kanan geser ke kanan.
          Garis merah nempel di tepi tengah tiap panel, jadi ikut kebawa
          pas tirai kebuka (belah dua, masing-masing nyangkut di panelnya). */}
      <div className="absolute inset-0 flex">
        <div
          className={`pointer-events-auto relative h-full w-1/2 bg-black transition-transform duration-[1100ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
            opening ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          {/* garis merah di tepi kanan panel kiri: muncul pas klik buka portal */}
          <span
            className={`absolute right-0 top-0 h-full w-[0.4vw] bg-accent transition-opacity duration-150 ${
              opening ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div
          className={`pointer-events-auto relative h-full w-1/2 bg-black transition-transform duration-[1100ms] ease-[cubic-bezier(0.7,0,0.3,1)] delay-75 ${
            opening ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          {/* garis merah di tepi kiri panel kanan: muncul pas klik buka portal */}
          <span
            className={`absolute left-0 top-0 h-full w-[0.4vw] bg-accent transition-opacity duration-150 ${
              opening ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
      <div
        className={`pointer-events-auto absolute inset-0 flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${
          opening ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div
          className="transition-transform duration-[900ms] ease-out"
          style={{ transform: landed ? 'translateY(0)' : 'translateY(-60vh)' }}
        >
          <TiltCard maxTilt={8}>
            <img
              src="/images/logo-preload.webp"
              alt="RaLabs"
              className="w-[396px] max-w-[95vw]"
            />
          </TiltCard>
        </div>

        <span className="inline-flex">
          <TiltCard maxTilt={10}>
            <button
              type="button"
              onClick={handleOpen}
              className="animate-[fadeIn_0.8s_ease-out_0.9s_both] rounded-full bg-accent px-[3.24rem] py-[1.215rem] font-display text-[48px] font-black text-white transition-colors duration-200 hover:bg-white hover:text-ink [-webkit-text-stroke:0.12vw_currentColor]"
            >
              Buka Portal
            </button>
          </TiltCard>
        </span>
      </div>
    </div>
  )
}