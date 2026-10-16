import { useEffect, useState } from 'react'
import TiltCard from './TiltCard.jsx'

// Link nav diisi per batch begitu section-nya benar benar ada.
// Sekarang penuh: Koleksi, Tentang, Alur, Kontak, semua anchor real.
const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Koleksi', href: '#koleksi', id: 'koleksi' },
  { label: 'Tentang', href: '#tentang', id: 'tentang' },
  { label: 'Alur', href: '#alur', id: 'alur' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
]

const GITHUB_URL = 'https://github.com/indeepcleaningid/ralabs-portal'

export default function Navbar({ started }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [ghBounce, setGhBounce] = useState(false)

  function handleGithubClick() {
    setGhBounce(true)
    setTimeout(() => setGhBounce(false), 400)
  }

  // Scroll-spy: section aktif = yang paling akhir sudah lewat garis ~40% viewport.
  // #home dipegang satu pembungkus di Hero.jsx (bukan tiap varian hero),
  // biar gak ada ID kembar dan elemen aktif selalu ada di semua breakpoint.
  // Kasus khusus: kalau udah mentok bawah halaman, paksa section terakhir aktif
  // (biar section pendek kayak Kontak tetap kena walau gak nyampe garis).
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean,
    )
    if (sections.length === 0) return

    let frame = 0

    function update() {
      frame = 0
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (window.scrollY >= maxScroll - 2) {
        setActive(sections[sections.length - 1].id)
        return
      }

      const line = window.innerHeight * 0.4
      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id
      }
      setActive(current)
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        className={`pointer-events-auto relative mx-auto mt-4 flex h-[52px] w-[calc(100%-50px)] max-w-[calc(1152px-50px)] items-center justify-between rounded-full bg-white pl-5 pr-2 shadow-[0_6px_24px_rgba(27,24,24,0.18)] transition-opacity duration-[800ms] ease-out sm:pl-8 ${
          started ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a href="/" className="flex shrink-0 items-center gap-2" aria-label="RaLabs beranda">
          <img
            src="/images/favicon-logo.webp"
            alt=""
            width="32"
            height="40"
            className="h-9 w-auto"
          />
          <img
            src="/images/logo-text.webp"
            alt="RaLabs"
            width="72"
            height="20"
            className="hidden h-5 w-auto sm:block"
          />
        </a>

        {/* Desktop: link di tengah pill, yang aktif jadi kotak hitam full-height */}
        <ul className="absolute left-1/2 hidden h-full -translate-x-1/2 items-stretch md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.href} className="flex">
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  style={{ WebkitTextStroke: isActive ? '0px' : '0.03vw #1B1818' }}
                  className={`inline-flex items-center px-4 text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-ink text-white'
                      : 'text-ink hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-1">
          <TiltCard maxTilt={10} className="hidden md:block">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleGithubClick}
              className={`inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-bold text-white transition-colors duration-200 hover:bg-ink hover:text-white ${
                ghBounce ? 'animate-bounce' : ''
              }`}
            >
              Github
            </a>
          </TiltCard>

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
        </div>

        {/* Panel menu mobile. Klik link langsung menutup menu. */}
        {open && (
          <ul
            id="menu-nav"
            className="neu-card absolute left-0 right-0 top-full z-50 mt-3 overflow-hidden py-2 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center px-5 text-sm font-bold transition hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center px-5 text-sm font-bold text-accent transition hover:opacity-90"
              >
                Github
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
