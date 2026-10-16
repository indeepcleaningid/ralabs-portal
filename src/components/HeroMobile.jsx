// ===== HERO MOBILE (di bawah md, kurang dari 768px) =====
// 🔒 LOCKED sama Bang Rob (16 Okt 2026). Jangan diubah kecuali diminta eksplisit.
// Layout ini mengikuti artboard mobile(360x800).svg.
// Surface-nya 4 band HORISONTAL (beda dari tablet yang vertikal, tapi isinya sama):
//   hitam 0-18.75% -> putih 18.75-56.25% -> merah 56.25-94.375% -> strip hitam 94.375-100%
// Rasio artboard 360:800, jadi tinggi section = 222.22vw (800/360).
// Elemen: eyebrow (dot putih + teks putih), headline pill merah, kartu logo,
// quote 2 paragraf + 2 tanda kutip hitam, kartu ENJOY kuning. Tanpa chevron.
import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'

export default function HeroMobile({ started }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: '222.22vw' }}
      aria-hidden="true"
    >
      {/* surface: 4 band warna, fade in pas preloader kelar */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* band atas: hitam (0-18.75%) */}
        <div className="absolute left-0 top-0 h-[18.75%] w-full bg-ink" />
        {/* band tengah: putih (18.75-56.25%) */}
        <div className="absolute left-0 top-[18.75%] h-[37.5%] w-full bg-white" />
        {/* band merah (56.25-94.375%) */}
        <div className="absolute left-0 top-[56.25%] h-[38.125%] w-full bg-accent" />
        {/* strip bawah: hitam (94.375-100%) */}
        <div className="absolute left-0 top-[94.375%] h-[5.625%] w-full bg-ink" />
      </motion.div>

      {/* eyebrow: dot putih + teks putih, di tengah band hitam (center y 10.625%).
          Animasi zoom samain kayak desktop & tablet.
          Catatan: keyframe eyebrow-zoom berakhir di scale(0.81), jadi elemen ini
          tampil 81% dari ukuran yang ditulis. Sama kayak HeroTablet. */}
      <div
        className={`absolute left-0 top-[calc(10.625%+10px)] flex w-full -translate-y-1/2 items-center justify-center ${
          started ? 'animate-[eyebrow-zoom_1300ms_ease-in-out_both]' : 'opacity-0'
        }`}
      >
        <span className="flex items-center gap-[1.4vw]">
          <span className="aspect-square w-[2.5vw] rounded-full bg-white" aria-hidden="true" />
          <span className="font-display text-[3.8vw] font-bold text-white">
            Bengkel Kode &amp; Karya Gue
          </span>
        </span>
      </div>

      {/* headline: pill merah (x 9.44-89.44%, y 13.5-26.125%) berisi teks putih 2 baris.
          Animasi "endok semen" sama persis kayak desktop & tablet. */}
      <div className="absolute left-[9.44%] top-[calc(13.5%+30px)] z-10 h-[calc(12.625%-20px-10px)] w-[80%]">
        <motion.div
          className="h-full w-full origin-center"
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
          <TiltCard maxTilt={8} className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center rounded-full border-[0.6vw] border-ink bg-accent px-[4%] shadow-[1vw_1.5vw_1.6vw_rgba(27,24,24,0.4)]">
              <h1
                className="text-center font-display text-[6.6vw] font-black leading-[1.03] text-white"
                style={{ WebkitTextStroke: '0.45vw #ffffff' }}
              >
                Selamat Datang Di Portal Utama
              </h1>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* kartu logo: kartu putih border hitam (x 23.89-74.72%, y 24.125-55.625%).
          Animasi jatuh + jelly, lalu miring -6 pas settle (sama tablet).
          🔒 LOCKED sama Bang Rob. Jangan diubah kecuali diminta eksplisit. */}
      <motion.div
        className="absolute left-[calc(50%-27.955%)] top-[calc(24.125%+100px-20px-20px-10px)] h-[34.65%] w-[55.91%] origin-bottom"
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
        {/* lurus pas jatuh + jelly, baru miring -6 pas settle */}
        <motion.div
          className="h-full w-full"
          initial={{ rotate: 0 }}
          animate={started ? { rotate: -6 } : { rotate: 0 }}
          transition={{ duration: 0.25, delay: 1.7, ease: 'easeOut' }}
        >
          <TiltCard maxTilt={8} className="h-full w-full">
            <div className="relative h-full w-full rounded-[3vw] border-[0.9vw] border-ink bg-white shadow-[1vw_1.5vw_1.6vw_rgba(27,24,24,1)]">
              {/* 2 ring dekorasi pojok atas (konsisten dengan kartu desktop & tablet) */}
              <span className="absolute left-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.4vw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <span className="absolute right-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.4vw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <div className="flex h-full flex-col items-center justify-center gap-[1vw] px-[8%]">
                <img
                  src="/images/favicon-logo.webp"
                  alt="Logo kubus RaLabs"
                  className="h-[56%] w-auto"
                />
                <img src="/images/logo-text.webp" alt="Ra Labs" className="w-[63%]" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* quote: 2 paragraf + tanda kutip hitam kiri-atas & kanan-bawah.
          Area quote ada di band merah (y 56.25-73.75%).
          🔒 LOCKED sama Bang Rob. Jangan diubah kecuali diminta eksplisit. */}
      <div className="absolute left-[calc(50%-48.5%)] top-[calc(56.25%+50px+20px)] z-10 h-[17.5%] w-[97%]">
        <motion.div
          className="relative h-full w-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={started ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }}
        >
          <span
            aria-hidden="true"
            className="absolute left-[calc(18.9%-30px)] top-[calc(50px-20px-10px+5px)] rotate-[15deg] font-display text-[15vw] font-bold leading-none text-black"
          >
            &ldquo;
          </span>
          <div className="flex h-full w-full items-center justify-center px-[12%]">
            <div className="text-center font-display text-[4.6vw] font-black leading-[1.3] text-ink">
              <p>Tempat dimana semua ide, apps, websites, dan tools.</p>
              <p>Yang lahir dan live 24 Jam</p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-[-5px] right-[calc(23.9%-30px-10px)] rotate-[15deg] scale-x-[-1] font-display text-[15vw] font-bold leading-none text-black"
          >
            &ldquo;
          </span>
        </motion.div>
      </div>

      {/* kartu ENJOY: pill kuning (x 12.5-88.06%, y 75.75-86.625%) + maskot.
          Animasi "lari nabrak tembok" sama kayak tablet. */}
      <motion.div
        className="absolute left-[12.5%] top-[calc(75.75%+10px+20px+20px-20px)] z-30 h-[10.875%] w-[75.56%] origin-center"
        initial={{ opacity: 0, x: '-60vw', scaleX: 1, scaleY: 1 }}
        animate={
          started
            ? {
                opacity: [0, 1, 1, 1, 1],
                x: ['-60vw', 0, 0, 0, 0],
                scaleX: [1, 1.18, 0.9, 1.08, 1],
                scaleY: [1, 0.85, 1.12, 0.94, 1],
              }
            : { opacity: 0, x: '-60vw', scaleX: 1, scaleY: 1 }
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
        <TiltCard maxTilt={8} className="h-full w-full">
          <div className="flex h-full w-full items-center justify-center gap-[2vw] rounded-full border-[0.4vw] border-ink/30 bg-sun px-[4%] shadow-[0.8vw_1.2vw_1.6vw_rgba(27,24,24,0.3)]">
            <span
              className="font-display text-[7vw] font-black leading-none text-ink"
              style={{ WebkitTextStroke: '0.4vw #1B1818' }}
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
      </motion.div>
    </section>
  )
}
