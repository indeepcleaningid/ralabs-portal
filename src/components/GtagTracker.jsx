import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Kirim pageview ke GA4 tiap kali route berubah.
// Pageview awal juga dikirim dari sini, makanya di entries/index.html
// config GA4 diset send_page_view: false supaya tidak dobel.
export default function GtagTracker() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
      page_title: document.title,
    })
  }, [location])

  return null
}
