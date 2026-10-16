import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// TiltCard: bungkus elemen biar bisa miring ngikutin gerakan mouse (efek 3D tilt).
// Pakai framer-motion. Arah kemiringan dihitung dari posisi mouse relatif pusat elemen.
export default function TiltCard({ children, maxTilt = 10, className = '' }) {
  const ref = useRef(null)

  // Posisi mouse (0-1) relatif terhadap elemen
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  // Biar gerakannya halus (spring), bukan langsung nyentak
  const springX = useSpring(mx, { stiffness: 200, damping: 20 })
  const springY = useSpring(my, { stiffness: 200, damping: 20 })

  // Ubah posisi mouse jadi sudut kemiringan
  const rotateY = useTransform(springX, [0, 1], [maxTilt, -maxTilt])
  const rotateX = useTransform(springY, [0, 1], [-maxTilt, maxTilt])

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
  }

  function handleMouseLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <div className="h-full w-full" style={{ perspective: '800px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`h-full w-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  )
}
