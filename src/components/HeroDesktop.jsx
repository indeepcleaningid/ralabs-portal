import { motion } from 'framer-motion'
import TiltCard from './TiltCard.jsx'

// ===== HERO DESKTOP (lg ke atas) =====
// Layout ini SUDAH DI-LOCK sama Bang Rob. Jangan diubah-ubah kecuali diminta.
// Kalau mau ubah tablet/mobile, buka HeroTablet / HeroMobile, bukan file ini.
// 16 Okt 2026: ditambah auto-fit (diminta Bang Rob). Kotak section ini sekarang
// jadi "frame" rasio artboard 16:9 yang di-contain di dalam stage 1 layar
// (.hero-stage-desktop), dan semua satuan vw di konten ganti jadi cqw supaya
// ikut skala frame. Nilai/posisi elemen nggak ada yang berubah.
export default function HeroDesktop({ started }) {
  return (
    <section
      className="hero-frame-desktop bg-white"
      aria-hidden="true"
    >
      {/* surface: 4 blok warna. Mulai opacity 0, fade in pas preloader kelar.
          Satu wrapper absolute inset-0 biar posisi tiap blok nggak berubah.
          Tiap blok melar keluar lewat --bleed-x / --bleed-y (diisi
          .hero-frame-desktop) biar nutup sisa stage kalau rasio layar bukan 16:9.
          Cuma tepi yang nempel ke luar yang digeser + dibesarin; tepi yang nempel
          ke dalam nggak disentuh, jadi batas antar blok tetap persis sama. */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* blok kiri-atas: hitam (melar ke kiri + ke atas).
            16 Okt 2026: batas bawahnya balik ke 45.37% (artboard). Dulu ada
            nudge -150u yang nurunin batasnya ke 31.5%, jadi blok hitamnya
            kelihatan kekecilan dan semua elemen kayak ketarik ke atas
            (dikeluhkan Bang Rob). Sekarang 45.37% vs blok putih 54.63%, jadi
            hitamnya tetap nggak lebih tinggi dari putih. */}
        <div className="absolute left-[calc(-1*var(--bleed-x))] top-[calc(-1*var(--bleed-y))] h-[calc(45.37%+var(--bleed-y))] w-[calc(59.11%+var(--bleed-x))] bg-ink" />

        {/* blok kiri-bawah: putih, dari batas hitam/putih sampai DASAR frame
            (melar ke kiri + ke bawah).
            16 Okt 2026: dulu blok ini berhenti di 95.83%-200u, jadi bawah hero
            ada gutter putih polos dan blok merah/putih kelihatan nggak full
            (dikeluhkan Bang Rob). Sekarang pakai top + bottom biar otomatis
            nyampe dasar, termasuk area bleed di luar frame. */}
        <div className="absolute left-[calc(-1*var(--bleed-x))] top-[45.37%] bottom-[calc(-1*var(--bleed-y))] w-[calc(59.11%+var(--bleed-x))] bg-white" />

        {/* blok kanan: merah, dari atas sampai DASAR frame (melar ke kanan, atas,
            dan bawah). Sama alasannya kayak blok putih: biar surface cuma 3 warna
            dan full nutup hero, tanpa strip putih polos di bawah. */}
        <div className="absolute left-[59.11%] top-[calc(-1*var(--bleed-y))] bottom-[calc(-1*var(--bleed-y))] w-[calc(40.89%+var(--bleed-x))] bg-accent" />

        {/* 16 Okt 2026: strip hitam bawah DIHAPUS (diminta Bang Rob, keliatan ganggu).
            Dulu ada bar hitam 4.17% di posisi 95.83% dikurangi 200 unit artboard,
            jadi ngambang di atas dasar hero. Sekarang ikut putih dari bg-white section. */}
      </motion.div>

      {/* eyebrow: titik merah + teks, lurus, selalu di TENGAH SURFACE.
          16 Okt 2026: posisi dibenerin (diminta Bang Rob).
          - Horizontal: balik ke tengah surface. Lebar elemen 100% selebar frame,
            jadi `justify-center` naruh isinya tepat di tengah bidang, bukan
            di tengah blok hitam.
          - Vertikal: center elemen di 10.625% tinggi frame, jadi naik dikit
            mendekat ke navbar (sebelumnya 15.74%, kelihatan kejauhan).
          Animasi zoom dipindah ke span di dalam: keyframe eyebrow-zoom nulis
          `transform`, dan transform itu bakal nimpa transform utility. Jadi
          translate -50% wajib di elemen luar biar tetap kepakai setelah animasi
          kelar. Soal skala: keyframe udah berakhir di scale(0.81), makanya
          scale-[0.81] di elemen luar dihapus (kalau nggak, jadi dobel 0.81x0.81). */}
      <div className="absolute left-0 top-[10.625%] flex w-full -translate-y-1/2 items-center justify-center">
        <span
          className={`flex items-center gap-[0.56cqw] border-b-[0.2cqw] border-accent pb-[0.4cqw] ${
            started ? 'animate-[eyebrow-zoom_1300ms_ease-in-out_both]' : 'opacity-0'
          }`}
        >
          <span className="aspect-square w-[1.23cqw] rounded-full bg-accent" aria-hidden="true" />
          <span className="font-display text-[1.12cqw] font-bold text-accent">
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
      <div className="absolute left-0 top-[calc(22%-50*var(--u)+10*var(--u)+10*var(--u))] z-10 flex w-full justify-center">
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
            <div className="-rotate-2 scale-[0.9] rounded-full bg-accent px-[2.03cqw] py-[0.97cqw] shadow-[-6px_-6px_12px_#ffffff,6px_6px_12px_#c4cdd8]">
              <h1
                className="font-display text-[2.43cqw] font-black leading-none text-white"
                style={{ WebkitTextStroke: '0.12cqw #ffffff' }}
              >
                Selamat Datang Di Portal Utama
              </h1>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* 16 Okt 2026: cuma quote + kartu + ENJOY yang dibungkus grup, terus
          digeser bareng lewat .hero-content-desktop (lihat --geser-y di
          .hero-frame-desktop). Tujuannya mindahin isi area bawah biar proporsional
          tanpa nyentuh eyebrow & headline: dua elemen itu sengaja dibiarin di luar
          grup, karena eyebrow harus tetap center di surface dan headline harus
          tetap di posisi atas. Surface/band warna juga nggak ikut kebungkus. */}
      <div className="hero-content-desktop">

      {/* quote: 3 baris + kutip kiri-atas & kanan-bawah.
          Satu group di quote-group. Semua perubahan (geser/scale/rotate)
          cukup dipasang di sini karena kalimat + 2 tanda kutip di dalamnya.
          Animasi: opacity 0 + kecil, muncul perlahan ke ukuran & posisi
          sekarang (scale 0.765) dengan easing smooth. */}
      <div className="absolute left-0 top-[calc(47%+30*var(--u)-125*var(--u)-20*var(--u)-15*var(--u))] z-10 flex w-[59.11%] justify-center">
        <motion.div
          className="quote-group relative left-[calc(50*var(--u)+50*var(--u)+50*var(--u))] w-[54.14%]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={started ? { opacity: 1, scale: 0.765 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }} // mulai 0.7s setelah eyebrow
        >
          {/* kutip kiri-atas, miring ke kanan */}
          <span
            aria-hidden="true"
            className="absolute -left-[1.5cqw] -top-[2cqw] rotate-[15deg] font-display text-[6.3cqw] font-bold leading-none text-accent [text-shadow:0.2cqw_0.25cqw_0.3cqw_rgba(27,24,24,0.4)]"
            style={{ WebkitTextStroke: '0.15cqw #1B1818' }}
          >
            &ldquo;
          </span>
          {/* teks quote */}
          <p className="text-center font-display text-[1.8cqw] font-black leading-[1.35] text-ink">
            Tempat dimana semua
            <br />
            ide, apps, websites, dan tools.
            <br />
            Yang lahir dan live 24 Jam
          </p>
          {/* kutip kanan-bawah, dibalik + miring ke kiri */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[calc(2.5cqw+50*var(--u))] -right-[calc(1.5cqw+20*var(--u))] rotate-[15deg] scale-x-[-1] font-display text-[6.3cqw] font-bold leading-none text-accent [text-shadow:0.2cqw_0.25cqw_0.3cqw_rgba(27,24,24,0.4)]"
            style={{ WebkitTextStroke: '0.15cqw #1B1818' }}
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
        className="absolute left-[calc(65%+0*var(--u)-100*var(--u)+50*var(--u))] top-[calc(13%+50*var(--u)-100*var(--u)-30*var(--u)-20*var(--u)-30*var(--u)-50*var(--u)+15*var(--u))] h-[76.8%] w-[28.8%] origin-bottom"
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
            <div className="relative h-full w-full rounded-[2cqw] border-[0.45cqw] border-ink bg-white shadow-[0.6cqw_0.9cqw_1cqw_rgba(27,24,24,1)]">
              <span className="absolute left-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25cqw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <span className="absolute right-[3%] top-[3%] flex aspect-square w-[6%] items-center justify-center rounded-full border-[0.25cqw] border-ink">
                <span className="aspect-square w-1/3 rounded-full bg-ink" />
              </span>
              <div className="flex h-full flex-col items-center justify-center gap-[1cqw] px-[8%]">
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
          jelly kayak banner headline & kartu logo kanan. left-[calc(150*var(--u))] &
          scale-[0.72] di lapisan dalam biar posisi & ukuran akhir tetap. */}
      <div className="absolute left-0 top-[calc(68%-20*var(--u)-125*var(--u)-100*var(--u))] z-10 flex h-[22%] w-[59.11%] items-center justify-center">
        <motion.div
          className="h-full w-[67.67%] origin-center"
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
          <div className="relative left-[calc(150*var(--u))] h-full w-full scale-[0.72]">
            <TiltCard maxTilt={8} className="h-full w-full">
              <div className="flex h-full w-full items-center justify-center gap-[2cqw] rounded-full border-[0.15cqw] border-ink/30 bg-sun px-[4%] shadow-[0.4cqw_0.6cqw_1cqw_rgba(27,24,24,0.3)]">
                <span
                  className="font-display text-[4.5cqw] font-bold leading-none text-ink"
                  style={{ WebkitTextStroke: '0.15cqw #1B1818' }}
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

      </div>{/* /hero-content-desktop: quote + kartu + ENJOY */}

      {/* chevron panah ke bawah DIHAPUS 16 Okt 2026 (Bang Rob): dirasa ganggu
          dan nggak perlu. Navigasi ke Koleksi tetap ada di navbar. */}
    </section>
  )
}