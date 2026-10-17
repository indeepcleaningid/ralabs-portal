import FadeIn from './FadeIn.jsx'
import Logo3D from './Logo3D.jsx'

/* Hero portal RaLabs. Rombakan mengikuti plan-prd/hero-rombak/design.md:
   headline SATU baris di atas, brand mark magnet+tilt di tengah-bawah,
   bar jenis: statement kiri + CTA kanan. Warna ikut tema terang/gelap. */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh_-_84px)] flex-col overflow-x-clip bg-bidang text-teks"
    >
      {/* Headline: satu baris. Spacing huruf default (tanpa tracking negatif).
          Ukuran 13vw buat Bebas Neue: teks "HERE'S RALABS" lebarnya 4.6em,
          jadi 13vw = 60vw dari 97vw area yang tersedia (px-[1.5vw]) → terisi 62%.
          Naik/turun-nya lewat angka vw ini, min & max ikut diskalakan. */}
      <div className="relative z-20 overflow-hidden px-[1.5vw] pt-6 sm:pt-4">
        <FadeIn delay={0.1} y={40}>
          {/* Bebas Neue cuma punya satu berat, jadi font-weight tidak berpengaruh. */}
          <h1 className="text-center uppercase whitespace-nowrap font-headline text-[clamp(2.6rem,13vw,33rem)] leading-none tracking-normal">
            <span className="teks-gradasi">HERE&apos;S </span><span className="teks-aksen">RA</span><span className="teks-gradasi">LABS</span>
          </h1>
        </FadeIn>
      </div>

      {/* Logo 3D: mengisi sisa ruang vertikal di antara headline dan bar.
          Ukuran mengikuti tinggi layar & tinggi headline (13vw) supaya
          hero selalu utuh. Posisi tetap; yang bisa dimainkan cuma rotasinya. */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-[2.5vw]">
        <div className="-translate-y-4 w-[min(320px,40svh)] sm:w-[min(480px,calc(100svh_-_13vw_-_194px))] md:w-[min(520px,calc(100svh_-_13vw_-_194px))] md:-translate-y-[60px] md:scale-[1.22] lg:w-[min(560px,calc(100svh_-_13vw_-_194px))]">
          <FadeIn delay={0.45} y={30}>
            <Logo3D />
          </FadeIn>
        </div>
      </div>

      {/* Bar bawah: statement kiri, CTA kanan. mt-auto diganti flex-1 di atas
          supaya bar selalu menempel dasar tanpa menabrak brand mark. */}
      <div className="flex flex-col gap-5 px-4 pb-7 sm:px-8 sm:pb-8 md:flex-row md:items-end md:justify-between md:px-10 md:pb-6">
        <FadeIn delay={0.55} y={20}>
          <p className="max-w-[300px] font-light uppercase tracking-wide leading-snug text-[clamp(0.72rem,1.15vw,1.05rem)]">
            RUMAH DARI SEMUA PROJECT. SEMUANYA ADA DISINI.
          </p>
        </FadeIn>
        <FadeIn delay={0.7} y={20} className="shrink-0">
          <div className="flex flex-wrap gap-3">
            {/* Target blank + noopener: nutup celah reverse tabnabbing. */}
            <a href="https://indeepcleaningid.site/" target="_blank" rel="noopener noreferrer" className="tombol-merah">
              Lihat Bisnis Saya
            </a>
            <a href="https://robbyaliasa.tongkrongan.tech/" target="_blank" rel="noopener noreferrer" className="tombol-garis">
              Lihat Portfolio
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
