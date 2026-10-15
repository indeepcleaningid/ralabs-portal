import { motion } from 'framer-motion'

// Kedua tombol external, tab baru sesuai plan 5.4.
// primary true dapat gaya tombol merah, sisanya outline.
const LINKS = [
  {
    label: 'Lihat Porto Utama',
    href: 'https://robbyaliasaakbar.github.io',
    primary: true,
  },
  {
    label: 'Lihat Bisnis Gue',
    href: 'https://indeepcleaningid.site',
    primary: false,
  },
]

export default function Tentang() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="neu-card flex justify-center p-8 sm:p-12">
          <img
            src="/images/favicon-logo.webp"
            alt="Logo kubus RaLabs"
            className="w-40 sm:w-52"
          />
        </div>

        <div>
          {/* Judul section gak dikunci eksplisit di plan, gue selaraskan dengan CTA hero. */}
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold">
            Kenalan sama Bang Rob.
          </h2>

          <p className="mt-5 max-w-xl text-ink/80 sm:text-lg">
            Gue Bang Rob dari Bekasi. Sehari hari membangun sistem AI dan automasi, sekaligus
            menjalankan bisnis jasa bersih InDeep Cleaning ID. Portal ini rumah untuk semua
            eksperimen yang lolos seleksi dan berani live.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.primary
                    ? 'inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 font-display font-bold text-white transition hover:opacity-90'
                    : 'inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-6 font-display font-bold text-ink transition hover:border-accent hover:text-accent'
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
