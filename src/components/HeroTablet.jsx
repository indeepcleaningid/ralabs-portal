// ===== HERO TABLET (md sampai lg, 768-1023px), 🔒 LOCKED =====
// Layout ini SUDAH DI-LOCK sama Bang Rob per sesi micro-manage. JANGAN diubah
// kecuali diminta eksplisit. Kalau mau ngoprek, buka file lain (bukan ini).
// Dibuat ulang persis ukuran artboard tablet(768x1024).svg (rasio 3:4).
// Surface: kiri hitam/putih 60.94%, kanan merah 39.06%.
// Strip hitam bawah dihapus 16 Okt 2026 (diminta Bang Rob, keliatan ganggu).
// Elemen: eyebrow merah, headline pill merah, kartu logo kanan, quote,
// kartu ENJOY kuning full-width. Tanpa chevron (di artboard tidak ada).
import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'

export default function HeroTablet({ started }) {
  return (
    <section
      className="hero-frame-tablet bg-white"
      aria-hidden="true"
    >
      {/* surface: 4 blok warna, fade in pas preloader kelar */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* blok kiri-atas: hitam (0-43.95%, melar ke kiri + ke atas).
            Tingginya nggak diubah, nggak boleh lebih tinggi dari blok putih. */}
        <div className="absolute left-[calc(-1*var(--bleed-x))] top-[calc(-1*var(--bleed-y))] h-[calc(43.95%+var(--bleed-y))] w-[calc(60.94%+var(--bleed-x))] bg-ink" />
        {/* blok kiri-bawah: putih, dari batas hitam/putih sampai DASAR frame.
            16 Okt 2026: dulu berhenti di 95.6%, jadi bawah hero ada strip putih
            polos dan surface kelihatan nggak full (dikeluhkan Bang Rob). */}
        <div className="absolute left-[calc(-1*var(--bleed-x))] top-[43.95%] bottom-[calc(-1*var(--bleed-y))] w-[calc(60.94%+var(--bleed-x))] bg-white" />
        {/* blok kanan: merah, dari atas sampai DASAR frame (melar ke kanan + atas + bawah) */}
        <div className="absolute left-[60.94%] top-[calc(-1*var(--bleed-y))] bottom-[calc(-1*var(--bleed-y))] w-[calc(39.06%+var(--bleed-x))] bg-accent" />
        {/* 16 Okt 2026: strip hitam bawah DIHAPUS (diminta Bang Rob, keliatan ganggu).
            Area 95.6-100% sekarang ikut putih dari bg-white section. */}
      </motion.div>

      {/* eyebrow: dot merah + teks, di atas blok hitam (y 13.5-16.1%).
          Animasi zoom samain kayak desktop. */}
      <div
        className={`absolute left-0 top-[calc(13.5%-100*var(--u)+50*var(--u)-20*var(--u)+10*var(--u))] flex w-full translate-x-[5.25%] items-center justify-center ${
          started ? 'animate-[eyebrow-zoom_1300ms_ease-in-out_both]' : 'opacity-0'
        }`}
      >
        <span className="flex items-center gap-[0.72cqw]">
          <span className="aspect-square w-[1.36cqw] rounded-full bg-white" aria-hidden="true" />
          <span className="font-display text-[2.72cqw] font-bold text-white">
            Bengkel Kode &amp; Karya Gue
          </span>
        </span>
      </div>

      {/* headline: pill merah besar (320x136 artboard = 41.67% x 13.28%).
          Animasi "endok semen" sama persis dengan desktop. */}
      <div className="absolute left-[calc(50%-31.2525%-11.25*var(--u))] top-[calc(23.1%-50*var(--u)-50*var(--u)-10*var(--u)-10*var(--u)+5*var(--u))] z-10 flex w-[calc(62.505%+22.5*var(--u))] justify-center">
        <motion.div
          className="w-full origin-center"
          initial={{ opacity: 0, x: 0, y: 0, scaleX: 1.7, scaleY: 1.7 }}
          animate={
            started
              ? {
                  opacity: [0, 1, 1, 1, 1],
                  x: [0, 0, 0, 0, 0],
                  y: [0, 0, 0, 0, 0],
                  scaleX: [1.7, 1.25, 0.88, 1.1, 1],
                  scaleY: [1.7, 0.88, 1.16, 0.94, 1],
                }
              : { opacity: 0, x: 0, y: 0, scaleX: 1.7, scaleY: 1.7 }
          }
          transition={{
            duration: 1.4,
            delay: 0.5,
            times: [0, 0.3, 0.5, 0.75, 1],
            ease: [
              'cubic-bezier(0.16,1,0.3,1)',
              'easeInOut',
              'easeInOut',
              'easeInOut',
            ],
          }}
        >
          <TiltCard maxTilt={8} className="w-full">
            <div className="flex h-[calc(19.92cqw-75*var(--u)-20*var(--u)-10*var(--u))] w-full items-center justify-center rounded-full border-[0.2cqw] border-ink bg-accent shadow-[0.6vw_0.9vw_1vw_rgba(27,24,24,0.4)]">
              <h1
                className="font-display text-[3.45cqw] font-black leading-none text-white"
                style={{ WebkitTextStroke: '0.2cqw #ffffff' }}
              >
                Selamat Datang Di Portal Utama
              </h1>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* kartu logo kanan (poster): putih miring, x 51.4-95.6%, y 17.4-63.4% */}
      <motion.div
        className="absolute left-[calc(50%-22.05%)] top-[calc(50%-23%-50*var(--u)-50*var(--u)-10*var(--u)+10*var(--u))] h-[50.6%] w-[48.51%] origin-bottom"
        initial={{ opacity: 0, y: '-110vh', scaleX: 1, scaleY: 1 }}
        animate={
          started
            ? {
                y: ['-110vh', 0, 0, 0, 0, 0],
                opacity: [0, 1, 1, 1, 1, 1],
                scaleX: [1, 1.18, 0.9, 1.08, 0.97, 1],
                scaleY: [1, 0.85, 1.12, 0.94, 1.03, 1],
              }
            : { opacity: 0, y: '-110vh', scaleX: 1, scaleY: 1 }
        }
        transition={{
          duration: 1.4,
          delay: 0.3,
          times: [0, 0.45, 0.62, 0.78, 0.9, 1],
          ease: ['easeOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut'],
        }}
      >
        {/* lurus pas jatuh + jelly, baru miring -6 pas settle (sama desktop).
            scale di framer biar nggak ketimpa animasi rotate. */}
        <motion.div
          className="h-full w-full"
          style={{ scale: 0.85 }}
          initial={{ rotate: 0 }}
          animate={started ? { rotate: -6 } : { rotate: 0 }}
          transition={{ duration: 0.25, delay: 1.7, ease: 'easeOut' }}
        >
          <TiltCard maxTilt={8} className="h-full w-full">
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-[1.5cqw] rounded-[2cqw] border-[0.45cqw] border-ink bg-white px-[8%] shadow-[0.6vw_0.9vw_1vw_rgba(27,24,24,1)]">
              {/* 2 ring dekorasi pojok atas (konsisten dengan kartu desktop) */}
              <span className="absolute left-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25cqw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <span className="absolute right-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25cqw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <img
                src="/images/favicon-logo.webp"
                alt="Logo kubus RaLabs"
                className="h-[62%] w-auto"
              />
              <img src="/images/logo-text.webp" alt="Ra Labs" className="w-[70%]" />
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* quote: 3 baris teks hitam di permukaan putih kiri (y 45.9-72.3%) */}
      <div className="absolute left-[calc(50%-48.5%)] top-[calc(45.9%+100*var(--u)+100*var(--u)+50*var(--u))] z-10 flex h-[26.4%] w-[97%] items-start justify-center">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={started ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }}
        >
          <span
            aria-hidden="true"
            className="absolute -left-[calc(1.5cqw-30*var(--u)-15*var(--u))] -top-[2cqw] rotate-[15deg] font-display text-[10cqw] font-bold leading-none text-accent [text-shadow:0.2vw_0.25vw_0.3vw_rgba(27,24,24,0.4)]"
            style={{ WebkitTextStroke: '0.15cqw #1B1818' }}
          >
            &ldquo;
          </span>
          <div className="text-center font-display text-[2.8cqw] font-black leading-[1.35] text-ink">
            <p>Tempat dimana semua ide, apps, websites, dan tools.</p>
            <p>Yang lahir dan live 24 Jam</p>
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-[calc(2.5cqw+2cqw)] -right-[calc(1.5cqw+2cqw-30*var(--u)-30*var(--u)-20*var(--u)+5*var(--u))] rotate-[15deg] scale-x-[-1] font-display text-[10cqw] font-bold leading-none text-white [text-shadow:0.2vw_0.25vw_0.3vw_rgba(27,24,24,0.4)]"
            style={{ WebkitTextStroke: '0.15cqw #1B1818' }}
          >
            &ldquo;
          </span>
        </motion.div>
      </div>

      {/* kartu ENJOY: pill kuning full-width (x 14.3-85.2%, y 72.8-89%) */}
      <motion.div
        className="absolute left-[calc(50%-35.4%+45*var(--u))] top-[calc(72.8%+40*var(--u)+20*var(--u)+10*var(--u)-20*var(--u))] z-30 h-[16.2%] w-[calc(70.8%-40*var(--u)-50*var(--u))] origin-center"
        initial={{ opacity: 0, x: '-60cqw', scaleX: 1, scaleY: 1 }}
        animate={
          started
            ? {
                opacity: [0, 1, 1, 1, 1],
                x: ['-60cqw', 0, 0, 0, 0],
                scaleX: [1, 1.18, 0.9, 1.08, 1],
                scaleY: [1, 0.85, 1.12, 0.94, 1],
              }
            : { opacity: 0, x: '-60cqw', scaleX: 1, scaleY: 1 }
        }
        transition={{
          duration: 1.3,
          delay: 1,
          times: [0, 0.4, 0.6, 0.75, 1],
          ease: [
            'cubic-bezier(0.16,1,0.3,1)',
            'easeInOut',
            'easeInOut',
            'easeInOut',
          ],
        }}
      >
        <div className="h-full w-full scale-[0.8424]">
          <TiltCard maxTilt={8} className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center gap-[2cqw] rounded-full border-[0.15cqw] border-ink/30 bg-sun px-[4%] shadow-[0.4vw_0.6vw_1vw_rgba(27,24,24,0.3)]">
            <span
              className="font-display text-[7.02cqw] font-black leading-none text-ink"
              style={{ WebkitTextStroke: '0.3cqw #1B1818' }}
            >
              ENJOY!!
            </span>
            <img
              src="/images/mascot-enjoy.svg"
              alt="Maskot RaLabs"
              className="h-[85%] w-auto"
            />
          </div>
          </TiltCard>
        </div>
      </motion.div>
    </section>
  )
}