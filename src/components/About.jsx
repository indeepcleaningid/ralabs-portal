export default function About() {
  return (
    <section id="about" className="bg-bidang text-teks">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <div className="min-w-0 px-4 py-16 md:py-24">
          <h2 className="judul-bagian">
            Portal ini kumpulan proyek yang saya bangun sendiri, atau bersama tim.
          </h2>
          <p className="isi mt-6">
            Alamat lain untuk porto yang sama:{' '}
            <a href="https://robbyaliasaakbar.github.io" className="tautan-teks" target="_blank" rel="noopener noreferrer">
              robbyaliasaakbar.github.io
            </a>
            .
          </p>
          <a
            href="https://robbyaliasa.tongkrongan.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="tombol-merah mt-10"
          >
            Lihat porto
          </a>
        </div>

        {/* Kuning hanya di sini, sebagai tanah mascot. Tidak ada teks di atas kuning. */}
        <div className="flex min-w-0 items-center justify-center bg-kuning px-4 py-16 md:py-24">
          <img src="/images/mascot-enjoy.svg" alt="Maskot RaLabs" className="h-[224px] w-auto max-w-full md:h-[288px]" />
        </div>
      </div>
    </section>
  )
}
