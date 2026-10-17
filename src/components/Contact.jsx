const TAUTAN = [
  { label: 'GitHub', alamat: 'https://github.com/robbyaliasaakbar' },
  { label: 'LinkedIn', alamat: 'https://www.linkedin.com/in/robby-aliasa-akbar-001a2a267' },
  { label: 'Reddit', alamat: 'https://www.reddit.com/user/Full_Director87/' },
  { label: 'Instagram', alamat: 'https://www.instagram.com/ybboraa/' },
  { label: 'TikTok', alamat: 'https://www.tiktok.com/@ybborraa' },
  { label: 'Bisnis', alamat: 'https://indeepcleaningid.site/' },
  { label: 'Porto', alamat: 'https://robbyaliasa.tongkrongan.tech/' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-bidang text-teks">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="judul-bagian">Contact</h2>

        <div className="mt-8 border-t border-garis">
          <a href="mailto:admin@ralabs.my.id" className="flex min-h-[44px] items-center break-all py-4 font-mono text-lg">
            admin@ralabs.my.id
          </a>
        </div>
        <div className="border-t border-garis">
          <a
            href="https://wa.me/6287754778218"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center break-all py-4 font-mono text-lg"
          >
            +62 877-5477-8218
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6">
          {TAUTAN.map(tautan => (
            <li key={tautan.label}>
              <a
                href={tautan.alamat}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-sm underline decoration-1 underline-offset-4"
              >
                {tautan.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
