import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-ink/70">Bengkel Kode dan Karya Gue</p>

          <h1 className="mt-4 font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.15]">
            Selamat Datang di Portal Utama <span className="text-accent">Ra</span>Labs.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            Tempat semua ide, apps, website, dan tools lahir dan live 24 jam. Saat ini portal
            akarnya dulu yang hidup, sisanya nyusul satu per satu.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#koleksi"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 font-display font-bold text-white transition hover:opacity-90"
            >
              Lihat Koleksi
            </a>
            <a
              href="#tentang"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-ink px-6 font-display font-bold text-ink transition hover:border-accent hover:text-accent"
            >
              Kenalan sama Bang Rob
            </a>
          </div>
        </motion.div>

        <div className="neu-card relative mx-auto w-full max-w-md p-6 sm:p-8 lg:mx-0">
          <img
            src="/images/logo+logotext.webp"
            alt="Logo RaLabs dan tulisan Ra Labs"
            className="w-full"
          />

          <div className="absolute -bottom-3 -right-2 rotate-[-6deg] rounded-md bg-[#F5E14B] px-4 py-2 font-display text-sm font-bold text-ink shadow-md sm:-right-3">
            ENJOY
          </div>
        </div>
      </div>
    </section>
  )
}
