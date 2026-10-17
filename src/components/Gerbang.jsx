import { useEffect, useRef } from 'react'
import Logo3D from './Logo3D.jsx'

/**
 * Gerbang: layar pertama, bukan halaman kedua.
 * Dialog, fokus masuk ke tombol Masuk. Escape tidak menutup,
 * karena tidak ada halaman di belakangnya sebelum dibuka.
 * Logo pakai GLB yang sama kayak hero (logo-ralabs-3d.glb):
 * satu file BISA dipakai dua section, browser cache otomatis,
 * jadi tidak perlu clone/duplikat 1.5MB.
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
      className="gerbang-surface fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 text-kertas"
      style={{ height: '100dvh' }}
    >
      <div className="w-[min(420px,80vw)]">
        <Logo3D />
      </div>
      <button ref={tombolRef} type="button" onClick={onMasuk} className="tombol-merah">
        Masuk
      </button>
    </div>
  )
}
