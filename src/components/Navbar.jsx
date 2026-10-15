import { useEffect, useState } from 'react'

// Link nav diisi per batch begitu section-nya benar benar ada.
// Sekarang penuh: Koleksi, Tentang, Alur, Kontak, semua anchor real.
const NAV_ITEMS = [
  { label: 'Koleksi', href: '#koleksi' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Alur', href: '#alur' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Escape menutup menu, supaya user keyboard tidak kesulitan (plan 5.1).
  useEffect(() => {
    if (!open) return

    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="/" className="flex items-center gap-3 py-1">
          <img
            src="/images/favicon-logo.webp"
            alt="Logo RaLabs"
            width="36"
            height="36"
            className="h-9 w-9"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            <span className="text-accent">Ra</span>Labs
          </span>
        </a>

        {/* Desktop: langsung kelihatan semua link */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: tombol buka tutup menu */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-nav"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition hover:text-accent md:hidden"
        >
          <span aria-hidden="true" className="font-display text-2xl leading-none">
            {open ? '×' : '≡'}
          </span>
        </button>

        {/* Panel menu mobile. Klik link langsung menutup menu. */}
        {open && (
          <ul
            id="menu-nav"
            className="neu-card absolute left-5 right-5 top-full z-50 overflow-hidden py-2 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center px-5 text-sm font-medium transition hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
