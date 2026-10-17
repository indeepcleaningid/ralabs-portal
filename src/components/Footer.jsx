export default function Footer() {
  return (
    <footer className="bg-lawan text-lawanTeks">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-6">
        <p className="text-sm">© 2026 RaLabs · Portal karya yang sedang berjalan. · Dev: Robby Aliasa Akbar</p>
        <ul className="flex flex-wrap gap-x-5">
          <li>
            <a href="/robots.txt" className="inline-flex min-h-[44px] items-center font-mono text-xs">
              robots.txt
            </a>
          </li>
          <li>
            <a href="/sitemap.xml" className="inline-flex min-h-[44px] items-center font-mono text-xs">
              sitemap.xml
            </a>
          </li>
          <li>
            <a href="/humans.txt" className="inline-flex min-h-[44px] items-center font-mono text-xs">
              humans.txt
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
