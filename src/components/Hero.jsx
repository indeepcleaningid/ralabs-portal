export default function Hero() {
  return (
    <section id="home" className="bg-bidang text-teks">
      <div className="mx-auto grid max-w-6xl gap-y-10 px-4 py-16 md:grid-cols-12 md:items-center md:gap-x-[40px] md:py-24">
        <div className="min-w-0 md:col-span-7">
          <h1 className="judul-hero">
            Ini portal untuk aplikasi, situs, dan alat yang saya bangun. Yang punya halaman sudah live, dan saya rawat
            berkala. Yang tidak punya halaman, tautannya mengarah ke sumbernya.
          </h1>
          <p className="isi mt-6">Yang sedang saya fokuskan ada di InDeep Cleaning ID.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://indeepcleaningid.site/" target="_blank" rel="noopener noreferrer" className="tombol-merah">
              Lihat InDeep Cleaning ID
            </a>
            <a
              href="https://robbyaliasa.tongkrongan.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="tombol-garis"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>

        {/* Benda di kanan, bukan latar. Teks tidak pernah melintas di atas gambar. */}
        <div className="flex min-w-0 justify-start md:col-span-5 md:justify-end">
          <img
            src="/images/banner-logo.webp"
            alt="Tanda RaLabs"
            className="h-auto w-[192px] max-w-full md:w-[240px]"
            width={366}
            height={538}
          />
        </div>
      </div>
    </section>
  )
}
