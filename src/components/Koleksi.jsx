import { motion } from 'framer-motion'

// Satu kartu hidup, lima slot kosong. Di sinilah bento dipakai karena bobot
// konten memang beda besar (plan R-05, section Koleksi dan Journey saja).
const PORTAL = {
  host: 'ralabs.my.id',
  name: 'Portal Utama',
  desc: 'Pintu masuk utama. Semua arah subdomain dimulai dari sini.',
}

// Nama slot masih bisa diganti saat review. Yang locked hanya jumlahnya (5)
// dan rentangnya app1 sampai tools (plan 5.3).
const SLOTS = [
  'app1.ralabs.my.id',
  'app2.ralabs.my.id',
  'app3.ralabs.my.id',
  'app4.ralabs.my.id',
  'tools.ralabs.my.id',
]

function LivePill() {
  return (
    <span className="neu-pill">
      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
      Live
    </span>
  )
}

function SoonPill() {
  return (
    <span className="neu-pill">
      <span className="h-2 w-2 rounded-full border border-ink/50" aria-hidden="true" />
      Coming Soon
    </span>
  )
}

export default function Koleksi() {
  return (
    <section id="koleksi" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold">
          Koleksi Bengkel.
        </h2>
        <p className="mt-3 max-w-2xl text-ink/80">
          Slot untuk semua subdomain yang akan live. Yang sudah ada baru portal ini.
        </p>

        {/* Pola 2-1-1-2: dua kartu sejajar, dua bar penuh di tengah, dua kartu sejajar lagi.
            Bar penuh di tengah bikin zigzag kebaca, bukan grid seragam. */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="neu-card flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-sm text-ink/70">{PORTAL.host}</span>
                <LivePill />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">{PORTAL.name}</h3>
              <p className="mt-2 text-ink/80">{PORTAL.desc}</p>
            </div>

            <a
              href="/"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 font-display font-bold text-white transition hover:opacity-90"
            >
              Buka Portal
            </a>
          </article>

          {SLOTS.map((host, index) => (
            <article
              key={host}
              // Index 1 dan 2 jadi bar penuh di tengah, sisanya tetap setengah lebar.
              className={`neu-inset flex min-w-0 flex-col justify-between bg-surface p-6 ${
                index === 1 || index === 2 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="min-w-0 break-all font-mono text-sm text-ink/70">{host}</span>
                <SoonPill />
              </div>

              <p className="mt-6 text-ink/80">Slot kosong. Ide berikutnya akan lahir di sini.</p>

              <p className="mt-4 font-mono text-xs text-ink/70">[BELUM ADA DATA]</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-ink/80">
          Belum ada apps yang live. Koleksi ini akan bertambah tiap ada yang selesai dan di-deploy.
        </p>
      </motion.div>
    </section>
  )
}
