import { useEffect, useRef, useState } from 'react'
import CardSwap from './CardSwap.jsx'
import { PROYEK } from '../data/proyek.js'

function IsiKartu({ proyek }) {
  return (
    <a
      href={proyek.alamat}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col justify-between gap-6 bg-bidang p-6 text-teks"
    >
      <div>
        <h3 className="text-xl font-bold">{proyek.judul}</h3>
        <p className="mt-3 text-sm leading-relaxed">{proyek.kalimat}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-xs">
        <span>{proyek.status}</span>
        <span className="break-all">{proyek.host}</span>
      </div>
    </a>
  )
}

export default function Collection() {
  const swapRef = useRef(null)
  const [mainSendiri, setMainSendiri] = useState(false)
  const [kurangiGerak, setKurangiGerak] = useState(false)

  useEffect(() => {
    const kueri = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!kueri) return undefined
    const ubah = () => setKurangiGerak(kueri.matches)
    ubah()
    kueri.addEventListener('change', ubah)
    return () => kueri.removeEventListener('change', ubah)
  }, [])

  const autoplay = !mainSendiri && !kurangiGerak

  return (
    <section id="collection" className="bg-lawan text-lawanTeks">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="judul-bagian">Proyek yang sudah ada</h2>
        <p className="isi mt-4">Sembilan yang sudah punya alamat. Delapan membuka halaman. Satu membuka sumbernya.</p>

        {/* Layar sempit: daftar sembilan tautan yang sama, urutan yang sama. */}
        <ul className="mt-10 border-t border-current lg:hidden">
          {PROYEK.map(proyek => (
            <li key={proyek.no} className="border-b border-current">
              <a
                href={proyek.alamat}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] flex-col gap-1 py-4"
              >
                <span className="font-bold">{proyek.judul}</span>
                <span className="text-sm">{proyek.kalimat}</span>
                <span className="flex flex-wrap justify-between gap-2 font-mono text-xs">
                  <span>{proyek.status}</span>
                  <span className="break-all">{proyek.host}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Layar lebar: tumpukan, paling banyak empat kartu kelihatan. */}
        <div className="mt-10 hidden lg:block">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => swapRef.current?.sebelumnya()}
              className="inline-flex min-h-[44px] items-center border border-current px-4 font-mono text-xs"
            >
              Sebelumnya
            </button>
            <button
              type="button"
              onClick={() => swapRef.current?.berikutnya()}
              className="inline-flex min-h-[44px] items-center border border-current px-4 font-mono text-xs"
            >
              Berikutnya
            </button>
            <button
              type="button"
              onClick={() => setMainSendiri(main => !main)}
              aria-pressed={mainSendiri || kurangiGerak}
              className="inline-flex min-h-[44px] items-center border border-current px-4 font-mono text-xs"
            >
              {mainSendiri || kurangiGerak ? 'Jalankan' : 'Jeda'}
            </button>
          </div>

          <div className="mt-8 h-[480px]">
            <CardSwap
              ref={swapRef}
              lebar={460}
              tinggi={260}
              jarakKartu={44}
              jarakVertikal={52}
              terlihatKartu={4}
              autoplay={autoplay}
              jeda={5000}
            >
              {PROYEK.map(proyek => (
                <IsiKartu key={proyek.no} proyek={proyek} />
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}
