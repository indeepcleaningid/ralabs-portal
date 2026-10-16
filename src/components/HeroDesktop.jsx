import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'

// ===== HERO DESKTOP (lg ke atas) =====
// Layout ini SUDAH DI-LOCK sama Bang Rob. Jangan diubah-ubah kecuali diminta.
// Kalau mau ubah tablet/mobile, buka HeroTablet / HeroMobile — bukan file ini.
export default function HeroDesktop({ started }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: '56.25vw' }}
      aria-hidden="true"
    >
      {/* surface: 4 blok warna. Mulai opacity 0, fade in pas preloader kelar.
          Satu wrapper absolute inset-0 biar posisi tiap blok nggak berubah. */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* blok kiri-atas: hitam */}
        <div className="absolute left-0 top-0 h-[calc(45.37%-150px)] w-[59.11%] bg-ink" />

        {/* blok kiri-bawah: putih */}
        <div className="absolute left-0 top-[calc(45.37%-150px)] h-[calc(50.46%+150px-200px)] w-[59.11%] bg-white" />

        {/* blok kanan: merah */}
        <div className="absolute left-[59.11%] top-0 h-[calc(95.83%-200px)] w-[40.89%] bg-accent" />

        {/* strip bawah: hitam, selebar layar */}
        <div className="absolute left-0 top-[calc(95.83%-200px)] h-[4.17%] w-full bg-ink" />
      </motion.div>

      {/* eyebrow: titik merah + teks, center surface, lurus.
          Animasi masuk: zoom out + fade out, lalu zoom in + fade in,
          mendarat di posisi & ukuran yang sama (scale 0.81 tetep). */}
      <div
        className={`absolute left-0 top-[calc(13%+40px-50px+15px)] flex w-full scale-[0.81] items-center justify-center ${
          started ? 'animate-[eyebrow-zoom_1300ms_ease-in-out_both]' : 'opacity-0'
        }`}
      >
        <span className="flex items-center gap-[0.56vw] border-b-[0.2vw] border-accent pb-[0.4vw]">
          <span className="aspect-square w-[1.23vw] rounded-full bg-accent" aria-hidden="true" />
          <span className="font-display text-[1.12vw] font-bold text-accent">
            Bengkel Kode &amp; Karya Gue
          </span>
        </span>
      </div>

      {/* headline: banner merah miring ke atas, center surface.
          Animasi "endok semen": mulai GEDE PERSIS DI DEPAN LAYAR (menghadap
          penonton, masih di sendok), terus "dilempar" nempel ke surface sambil
          menyusut ke ukuran normal, pas nemplok ada tekanan + jelly squash/
          stretch, lalu stabil. Lapisan dalam (-rotate-2, scale-0.9, tilt)
          nggak disentuh biar bentuk akhir tetap persis. */}
      <div className="absolute left-0 top-[calc(22%-50px+10px+10px)] z-10 flex w-full justify-center">
        <motion.div
          className="w-fit origin-center"
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
            delay: 0.5, // mulai 0.5s setelah eyebrow (baseline)
            times: [0, 0.3, 0.5, 0.75, 1],
            ease: [
              'cubic-bezier(0.16,1,0.3,1)',
              'easeInOut',
              'easeInOut',
              'easeInOut',
            ],
          }}
        >
          <TiltCard maxTilt={8} className="w-fit">
            <div className="-rotate-2 scale-[0.9] rounded-full bg-accent px-[2.03vw] py-[0.97vw] shadow-[-6px_-6px_12px_#ffffff,6px_6px_12px_#c4cdd8]">
              <h1
                className="font-display text-[2.43vw] font-black leading-none text-white"
                style={{ WebkitTextStroke: '0.12vw #ffffff' }}
              >
                Selamat Datang Di Portal Utama
              </h1>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* quote: 3 baris + kutip kiri-atas & kanan-bawah.
          Satu group di quote-group — semua perubahan (geser/scale/rotate)
          cukup dipasang di sini karena kalimat + 2 tanda kutip di dalamnya.
          Animasi: opacity 0 + kecil, muncul perlahan ke ukuran & posisi
          sekarang (scale 0.765) dengan easing smooth. */}
      <div className="absolute left-0 top-[calc(47%+30px-125px-20px-15px)] z-10 flex w-[59.11%] justify-center">
        <motion.div
          className="quote-group relative left-[calc(50px+50px+50px)] w-[54.14%]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={started ? { opacity: 1, scale: 0.765 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }} // mulai 0.7s setelah eyebrow
        >
          {/* kutip kiri-atas, miring ke kanan */}
          <span
            aria-hidden="true"
            className="absolute -left-[1.5vw] -top-[2vw] rotate-[15deg] font-display text-[6.3vw] font-bold leading-none text-accent [text-shadow:0.2vw_0.25vw_0.3vw_rgba(27,24,24,0.4)]"
            style={{ WebkitTextStroke: '0.15vw #1B1818' }}
          >
            &ldquo;
          </span>
          {/* teks quote */}
          <p className="text-center font-display text-[1.8vw] font-black leading-[1.35] text-ink">
            Tempat dimana semua
            <br />
            ide, apps, websites, dan tools.
            <br />
            Yang lahir dan live 24 Jam
          </p>
          {/* kutip kanan-bawah, dibalik + miring ke kiri */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[calc(2.5vw+50px)] -right-[calc(1.5vw+20px)] rotate-[15deg] scale-x-[-1] font-display text-[6.3vw] font-bold leading-none text-accent [text-shadow:0.2vw_0.25vw_0.3vw_rgba(27,24,24,0.4)]"
            style={{ WebkitTextStroke: '0.15vw #1B1818' }}
          >
            &ldquo;
          </span>
        </motion.div>
      </div>

      {/* banner kanan: kartu putih miring berisi logo kubus + wordmark.
          Animasi: mulai opacity 0 di atas, jatuh lurus mendarat PERSIS di posisi stay
          (y mendarat sekali, tanpa bounce posisi). Efek jelly-nya di BENTUK kartu:
          squash (melebar+melempem) -> stretch (meregang) -> menyusut -> stabil 1:1,
          kayak jelly jatuh. Origin bawah biar "menghantam" ke permukaan. */}
      <motion.div
        className="absolute left-[calc(65%+0px-100px+50px)] top-[calc(13%+50px-100px-30px-20px-30px-50px+15px)] h-[76.8%] w-[28.8%] origin-bottom"
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
          delay: 0.3, // mulai 0.3s setelah eyebrow (baseline)
          times: [0, 0.45, 0.62, 0.78, 0.9, 1],
          ease: ['easeOut', 'easeInOut', 'easeInOut', 'easeInOut', 'easeInOut'],
        }}
      >
        {/* Miring NOL dulu pas jatuh & jelly; baru miring -6° pas settle.
            Delay 1.7s = 0.3s (delay jatuh) + 1.4s (durasi jelly). Jadi pas jelly
            kelar, card mutar ke posisi miring kayak sekarang. Posisi & ukuran
            akhir sama persis karena ini cuma pindah tempat transform. */}
        <motion.div
          className="h-full w-full"
          style={{ scale: 0.729 }}
          initial={{ rotate: 0 }}
          animate={started ? { rotate: -6 } : { rotate: 0 }}
          transition={{ duration: 0.25, delay: 1.7, ease: 'easeOut' }}
        >
          <TiltCard maxTilt={8} className="h-full w-full">
            <div className="relative h-full w-full rounded-[2vw] border-[0.45vw] border-ink bg-white shadow-[0.6vw_0.9vw_1vw_rgba(27,24,24,1)]">
              <span className="absolute left-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25vw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <span className="absolute right-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25vw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
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
        </motion.div>
      </motion.div>

      {/* kartu kuning ENJOY + maskot.
          Animasi "lari nabrak tembok": mulai opacity 0 di kiri surface (luar
          layar), melesat cepat ke posisi stay, pas nyampe ada squash/stretch
          jelly kayak banner headline & kartu logo kanan. left-[150px] &
          scale-[0.72] di lapisan dalam biar posisi & ukuran akhir tetap. */}
      <div className="absolute left-0 top-[calc(68%-20px-125px-100px)] z-10 flex h-[22%] w-[59.11%] items-center justify-center">
        <motion.div
          className="h-full w-[67.67%] origin-center"
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
            delay: 1, // mulai 1s setelah eyebrow (baseline)
            times: [0, 0.4, 0.6, 0.75, 1],
            ease: [
              'cubic-bezier(0.16,1,0.3,1)',
              'easeInOut',
              'easeInOut',
              'easeInOut',
            ],
          }}
        >
          <div className="relative left-[150px] h-full w-full scale-[0.72]">
            <TiltCard maxTilt={8} className="h-full w-full">
              <div className="flex h-full w-full items-center justify-center gap-[2vw] rounded-full border-[0.15vw] border-ink/30 bg-sun px-[4%] shadow-[0.4vw_0.6vw_1vw_rgba(27,24,24,0.3)]">
                <span
                  className="font-display text-[4.5vw] font-bold leading-none text-ink"
                  style={{ WebkitTextStroke: '0.15vw #1B1818' }}
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
        </motion.div>
      </div>

      {/* chevron panah ke bawah DIHAPUS 16 Okt 2026 (Bang Rob): dirasa ganggu
          dan nggak perlu. Navigasi ke Koleksi tetap ada di navbar. */}
    </section>
  )
}