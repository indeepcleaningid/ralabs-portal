import { motion } from 'framer-motion'

// Semua kanal real, tanpa form (form butuh backend, v1 dilarang punya backend).
const LINKS = [
  {
    label: 'EMAIL',
    text: 'ibborarts@gmail.com',
    href: 'mailto:ibborarts@gmail.com',
    external: false,
  },
  {
    label: 'WHATSAPP',
    text: '+62 877-5477-8218',
    href: 'https://wa.me/6287754778218',
    external: true,
  },
  {
    label: 'GITHUB',
    text: 'robbyaliasaakbar',
    href: 'https://github.com/robbyaliasaakbar',
    external: true,
  },
  {
    label: 'LINKEDIN',
    text: 'Robby Aliasa Akbar',
    href: 'https://www.linkedin.com/in/robby-aliasa-akbar-001a2a267',
    external: true,
  },
]

export default function Kontak() {
  return (
    <section id="kontak" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-2xl"
      >
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold">
          Mampir dan Sapa.
        </h2>

        <ul className="neu-card mt-8 divide-y divide-ink/10">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex min-h-11 flex-col justify-center gap-1 px-6 py-4 transition hover:text-accent sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="font-mono text-xs text-ink/70">{link.label}</span>
                <span className="font-medium underline decoration-ink/30 underline-offset-4">
                  {link.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
