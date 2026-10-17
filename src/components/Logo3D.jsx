import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const SUMBER = '/images/logo-ralabs-3d.glb'
const CADANGAN = '/images/logo-preload.webp'
const PUTAR_AWAL = { x: 0.05, y: -0.32 }
const JEDA_SPIN = 2500

/* Warna aset disimpan sebagai vertex color linear ternormalisasi (Uint8).
   Nilai dibaca apa adanya (tanpa konversi color space): file GLB versi ini
   memang menyimpan warna dalam linear. Nada terang/bayang dari aset dibiarkan
   apa adanya — tidak di-remap, tidak dikunci per-face. */
function siapkanWarna(geo) {
  const attr = geo.getAttribute('color')
  if (!attr) return false

  const item = attr.itemSize
  const sumber = attr.array
  const maks = sumber instanceof Uint8Array ? 255 : sumber instanceof Uint16Array ? 65535 : 1
  const data = new Float32Array(attr.count * item)
  const warna = new THREE.Color()

  for (let i = 0; i < attr.count; i++) {
    const o = i * item
    const r = attr.normalized ? sumber[o] / maks : sumber[o]
    const g = attr.normalized ? sumber[o + 1] / maks : sumber[o + 1]
    const b = attr.normalized ? sumber[o + 2] / maks : sumber[o + 2]
    warna.setRGB(r, g, b)
    data[o] = warna.r
    data[o + 1] = warna.g
    data[o + 2] = warna.b
    if (item === 4) data[o + 3] = 1
  }

  geo.setAttribute('color', new THREE.BufferAttribute(data, item))
  return true
}

/* Logo3D: model GLB logo RaLabs, dirender three.js.
   - Bisa diputar dengan drag (OrbitControls, tanpa pan/zoom) → posisi tetap,
     cuma rotasinya yang berubah. Idle → berputar pelan sendiri.
   - Warna & shadow mengikuti aset (vertex color).
   - Reduced motion / gagal WebGL → tanpa spin, atau gambar cadangan. */
export default function Logo3D({ className = '' }) {
  const wadahRef = useRef(null)
  const [gagal, setGagal] = useState(false)

  useEffect(() => {
    const wadah = wadahRef.current
    if (!wadah) return undefined

    const kurangiGerak = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    } catch {
      setGagal(true)
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.opacity = '0'
    renderer.domElement.style.transition = 'opacity 400ms ease-out'
    renderer.domElement.setAttribute('aria-hidden', 'true')
    wadah.appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    // Orthographic: ukuran objek tetap di semua sudut (tanpa gede-kecil),
    // dan frustum bisa dihitung sekali agar seluruh rotasi masuk frame.
    const kamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
    kamera.position.set(0, 0, 10)
    kamera.lookAt(0, 0, 0)

    const grup = new THREE.Group()
    scene.add(grup)

    // Frustum ortho ukuran tetap; posisinya digeser per frame supaya objek
    // selalu di tengah. Skala jadi konstan, rotasi bebas, tanpa clipping.
    const sudutKotak = []
    let setengahFit = 0

    // Kontrol putar: kiri-drag / satu jari. Tanpa pan & zoom, jadi objek
    // tidak bisa dipindah atau digeser dari posisinya.
    const kontrol = new OrbitControls(kamera, renderer.domElement)
    kontrol.enablePan = false
    kontrol.enableZoom = false
    kontrol.enableDamping = true
    kontrol.dampingFactor = 0.08
    kontrol.rotateSpeed = 0.9
    // Rotasi bebas: horizontal 360° dan vertikal sampai batas aman kutub.
    const POLAR_MIN = 0.35
    const POLAR_MAX = Math.PI - 0.35
    kontrol.minPolarAngle = POLAR_MIN
    kontrol.maxPolarAngle = POLAR_MAX
    // Titik pandang sedikit ke bawah → objek duduk lebih tinggi di kanvas,
    // memberi ruang bawah saat diputar (tidak terpotong).
    kontrol.target.set(0, 0, 0)
    kontrol.autoRotate = !kurangiGerak
    kontrol.autoRotateSpeed = 0.9
    renderer.domElement.style.touchAction = 'none'
    renderer.domElement.style.cursor = 'grab'

    let jedaSpin = 0
    const saatMulai = () => {
      kontrol.autoRotate = false
      renderer.domElement.style.cursor = 'grabbing'
      window.clearTimeout(jedaSpin)
    }
    const saatSelesai = () => {
      renderer.domElement.style.cursor = 'grab'
      if (kurangiGerak) return
      window.clearTimeout(jedaSpin)
      jedaSpin = window.setTimeout(() => {
        kontrol.autoRotate = true
      }, JEDA_SPIN)
    }
    kontrol.addEventListener('start', saatMulai)
    kontrol.addEventListener('end', saatSelesai)

    const titikUji = new THREE.Vector3()

    const pusatkanFrustum = () => {
      if (!setengahFit || !sudutKotak.length) return
      kamera.updateMatrixWorld()
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
      for (const sudut of sudutKotak) {
        titikUji.copy(sudut).applyMatrix4(kamera.matrixWorldInverse)
        if (titikUji.x < minX) minX = titikUji.x
        if (titikUji.x > maxX) maxX = titikUji.x
        if (titikUji.y < minY) minY = titikUji.y
        if (titikUji.y > maxY) maxY = titikUji.y
      }
      const cx = (minX + maxX) / 2
      const cy = (minY + maxY) / 2
      kamera.left = cx - setengahFit
      kamera.right = cx + setengahFit
      kamera.top = cy + setengahFit
      kamera.bottom = cy - setengahFit
      kamera.updateProjectionMatrix()
    }

    let frame = 0
    let hidup = true
    let terlihat = true

    const gambar = () => {
      if (!hidup) return
      if (!terlihat) {
        frame = 0
        return
      }
      kontrol.update()
      pusatkanFrustum()
      renderer.render(scene, kamera)
      frame = requestAnimationFrame(gambar)
    }

    const loader = new GLTFLoader()
    loader.load(
      SUMBER,
      (gltf) => {
        const model = gltf.scene

        // Normalisasi: center di origin, tinggi maksimal 1 (kamera menyesuaikan).
        const kotak = new THREE.Box3().setFromObject(model)
        const ukuran = new THREE.Vector3()
        kotak.getSize(ukuran)
        const tengah = new THREE.Vector3()
        kotak.getCenter(tengah)
        model.position.sub(tengah)
        const skala = 1 / Math.max(ukuran.x, ukuran.y)
        model.scale.setScalar(skala)

        model.traverse((anak) => {
          if (!anak.isMesh) return
          const mat = new THREE.MeshBasicMaterial({ vertexColors: true })
          anak.material = mat
          siapkanWarna(anak.geometry)
        })

        grup.add(model)
        grup.rotation.set(PUTAR_AWAL.x, PUTAR_AWAL.y, 0)

        // Frustum ortho ukuran tetap: cari half-extent terbesar dari bbox
        // untuk semua sudut rotasi. Nilai ini jadi ukuran jendela; posisinya
        // digeser tiap frame oleh pusatkanFrustum() supaya objek di tengah.
        grup.updateMatrixWorld(true)
        model.updateMatrixWorld(true)
        const kotakModel = new THREE.Box3().setFromObject(grup)
        sudutKotak.length = 0
        for (const x of [kotakModel.min.x, kotakModel.max.x]) {
          for (const y of [kotakModel.min.y, kotakModel.max.y]) {
            for (const z of [kotakModel.min.z, kotakModel.max.z]) {
              sudutKotak.push(new THREE.Vector3(x, y, z))
            }
          }
        }
        const kameraUji = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)
        const uji = new THREE.Vector3()
        let perlu = 0
        for (let pol = POLAR_MIN; pol <= POLAR_MAX + 0.001; pol += 0.05) {
          for (let az = 0; az < Math.PI * 2; az += Math.PI / 24) {
            kameraUji.position.set(
              10 * Math.sin(pol) * Math.sin(az),
              10 * Math.cos(pol),
              10 * Math.sin(pol) * Math.cos(az),
            )
            kameraUji.lookAt(0, 0, 0)
            kameraUji.updateMatrixWorld()
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
            for (const sudut of sudutKotak) {
              uji.copy(sudut).applyMatrix4(kameraUji.matrixWorldInverse)
              if (uji.x < minX) minX = uji.x
              if (uji.x > maxX) maxX = uji.x
              if (uji.y < minY) minY = uji.y
              if (uji.y > maxY) maxY = uji.y
            }
            perlu = Math.max(perlu, (maxX - minX) / 2, (maxY - minY) / 2)
          }
        }
        setengahFit = perlu * 1.03
        pusatkanFrustum()
        renderer.domElement.style.opacity = '1'
        gambar()
      },
      undefined,
      () => setGagal(true),
    )

    const ukurUlang = () => {
      const sisi = wadah.clientWidth
      if (!sisi) return
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(sisi, sisi, false)
    }
    const pengawasUkuran = new ResizeObserver(ukurUlang)
    pengawasUkuran.observe(wadah)
    ukurUlang()

    const pengawasTerlihat = new IntersectionObserver(([entri]) => {
      terlihat = entri.isIntersecting
      if (terlihat && !frame && hidup) gambar()
    })
    pengawasTerlihat.observe(wadah)

    return () => {
      hidup = false
      cancelAnimationFrame(frame)
      pengawasUkuran.disconnect()
      pengawasTerlihat.disconnect()
      window.clearTimeout(jedaSpin)
      kontrol.removeEventListener('start', saatMulai)
      kontrol.removeEventListener('end', saatSelesai)
      kontrol.dispose()
      renderer.dispose()
      scene.traverse((obj) => {
        obj.geometry?.dispose()
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
        else obj.material?.dispose()
      })
      if (renderer.domElement.parentNode === wadah) wadah.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      className={`relative aspect-square w-full ${className}`}
      role="img"
      aria-label="Logo RaLabs tiga dimensi"
    >
      <div ref={wadahRef} className="h-full w-full" />
      {gagal && (
        <img
          src={CADANGAN}
          alt="Logo RaLabs"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  )
}
