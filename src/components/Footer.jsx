// Footer satu baris sesuai plan 5.6. Link file bantuan dibuat di batch 7,
// jadi kalau diklik sekarang memang sudah ada isinya di public/.
const HELP_LINKS = [
  { label: 'robots.txt', href: '/robots.txt' },
  { label: 'sitemap.xml', href: '/sitemap.xml' },
  { label: 'humans.txt', href: '/humans.txt' },
]

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 sm:flex-row">
        <p className="text-center text-sm text-ink/80 sm:text-left">
          RaLabs 2026. Dibangun dengan React dan PHP di shared hosting.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {HELP_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center text-ink/80 underline underline-offset-4 transition hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
