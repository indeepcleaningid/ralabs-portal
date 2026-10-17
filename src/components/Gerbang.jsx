import { useEffect, useRef } from 'react'
import Kubus from './Kubus.jsx'

/**
 * Gerbang: layar pertama, bukan halaman kedua.
 * Dialog, fokus masuk ke tombol Masuk. Escape tidak menutup,
 * karena tidak ada halaman di belakangnya sebelum dibuka.
 */
export default function Gerbang({ onMasuk }) {
  const tombolRef = useRef(null)

  // Scroll halaman dikunci selama gerbang ada.
  useEffect(() => {
    const sebelumnya = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = sebelumnya
    }
  }, [])

  // Fokus masuk ke tombol Masuk.
  useEffect(() => {
    tombolRef.current?.focus()
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gerbang RaLabs"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-tinta text-kertas"
      style={{ height: '100dvh' }}
    >
      <Kubus ukuran={232} />
      <button ref={tombolRef} type="button" onClick={onMasuk} className="tombol-merah">
        Masuk
      </button>
    </div>
  )
}
