import { motion } from 'framer-motion'

// Proses nyata portal ini, bukan template How It Works.
// Panah dipakai HANYA di section ini (alasan: menunjukkan arah alir, bukan dekorasi).
const STEP_1 = {
  no: '01',
  title: 'Tulis di laptop',
  body: 'React plus Vite, cek di dev server port 5015.',
}

const STEP_2 = {
  no: '02',
  title: 'Build jadi statis',
  body: 'npm run build, hasilnya HTML plus aset.',
}

const STEP_3 = {
  no: '03',
  title: 'Push lalu live',
  body: 'Push ke main, hPanel Hostinger menarik otomatis ke ralabs.my.id.',
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center pt-16 md:flex" aria-hidden="true">
      <span className="text-2xl text-ink/60">→</span>
    </div>
  )
}

function StepCard({ step, tall }) {
  return (
    <article
      className={`neu-card flex flex-col p-6 sm:p-8 ${
        tall ? 'md:min-h-64' : 'md:min-h-48'
      }`}
    >
      <span className="font-mono text-sm text-ink/70">{step.no}</span>
      <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">{step.title}</h3>
      <p className="mt-3 text-ink/80">{step.body}</p>
    </article>
  )
}

export default function Alur() {
  return (
    <section id="alur" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold">
          Cara Portal Ini Hidup.
        </h2>

        {/* Kartu 1 tinggi, kartu 2 dan 3 sejajar pendek, panah hanya di desktop.
            Di HP menumpuk tanpa panah biar alurnya tetap kebaca dari atas ke bawah. */}
        <div className="mt-10 grid gap-5 md:grid-cols-[1.1fr_auto_1fr_auto_1fr] md:items-start">
          <StepCard step={STEP_1} tall />
          <Arrow />
          <StepCard step={STEP_2} />
          <Arrow />
          <StepCard step={STEP_3} />
        </div>
      </motion.div>
    </section>
  )
}
