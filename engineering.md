# Log Perubahan

Catatan perubahan RaLabs. Satu entri per pull request. PR tanpa entri di sini belum boleh di-merge.

Format entri:

- Tanggal
- Judul PR
- File yang berubah
- Hasil tes: dev server ok, build ok, cek 360/768/1280, kontras lolos, tidak ada tombol mati

---

## 15 Okt 2026, Batch 0: fondasi repo dan dev server

- Tanggal: 15 Okt 2026
- Judul: fondasi repo, scaffold React plus Tailwind, dev server port 5015
- File yang berubah:
  - Baru: `README.md`, `engineering.md`, `contributing.md`, `LICENSE`
  - Baru: `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
  - Baru: `entries/index.html`, `src/main.jsx`, `src/App.jsx`, `src/pages/Home.jsx`
  - Baru: `src/components/Navbar.jsx`, `src/components/Hero.jsx`
  - Baru: `src/styles/global.css`
  - Baru: `public/images/` isi hasil copy dari `../assets/` (4 file)
- Hasil tes:
  - Dev server: jalan, Vite 6.4.4 ready di `http://localhost:5015/` (strictPort, tidak lompat port)
  - Render React: `#root` terisi Navbar plus Home, terbukti lewat dump DOM headless Chrome
  - Aset: `/images/favicon-logo.webp`, `/images/logo+logotext.webp`, `/images/logo-text.webp`, `/images/og-banner.webp` semua 200
  - Console: tidak ada error JavaScript (hanya warning infra Chrome soal sandbox dan sqlite, bukan dari aplikasi)
  - Layout: screenshot di 360, 768, 1280. Di 360 tidak ada scroll horizontal, navbar jadi sticky bar, gambar mengecil rapi
  - Font: Comfortaa terpakai di heading dan body, JetBrains Mono terpakai di baris label atas
  - Kontras: teks `#1B1B1B` di atas surface `#E8EEF4` ratio 14.74:1 lolos, aksen `#D70000` di atas surface 4.62:1 lolos
  - Belum diuji di batch ini: `npm run build` (sengaja tidak dijalankan sebelum review), section Koleksi sampai Kontak (batch berikutnya)

## 16 Okt 2026, Batch 2: Hero dan bukti build jalan

- Tanggal: 16 Okt 2026
- Judul: section Hero sesuai copy locked, build pertama dibuktikan jalan
- File yang berubah:
  - Baru: `src/components/Hero.jsx`
  - Ubah: `src/pages/Home.jsx` (rakit Navbar plus Hero, scaffold batch 1 dibuang)
  - Ubah: `PRD/plan-portal-akar-v1.md` (celah command `cp dist/*.html` tidak match, diganti `cp dist/entries/*.html .` plus tambah `dist/images/`)
  - Hasil build dicopy ke root: `index.html`, `assets/`, `images/`
- Hasil tes:
  - `npm run build`: sukses, 452 modul, 1.65 detik. Output `dist/entries/index.html` 3.26 kB, CSS 8.90 kB, JS 321.43 kB
  - Copy hasil build ke root: `index.html` root kini menunjuk `/assets/main-BVfZ3s3J.js` (bundle hasil build, bukan source)
  - Dev server tetap menyajikan source di `/` sesudah root `index.html` ada, terbukti curl masih memuat `/src/main.jsx` (middleware dev bekerja)
  - Render Hero terbukti lewat dump DOM dan screenshot: copy "Selamat Datang di Portal Utama RaLabs." tampil, kata Ra berwarna aksen
  - Layout 1280: dua kolom asimetris, teks kiri, kartu logo kanan, sticky note ENJOY di sudut kanan bawah kartu
  - Layout 360: menumpuk rapi urutannya teks lalu kartu, sticky note tetap masuk layar, tidak ada scroll horizontal
  - Font Comfortaa terpakai di heading dan body, JetBrains Mono di baris label atas
  - Console: tidak ada error JavaScript
  - Link mati: nol. Tombol CTA `#koleksi` dan `#tentang` sengaja BELUM dipasang karena section tujuannya belum ada
  - Belum diuji di batch ini: section Koleksi sampai Kontak, Navbar link (baru ada isinya setelah section tujuannya masuk)

## 16 Okt 2026, Batch 3: Section Koleksi dan CTA Hero aktif

- Tanggal: 16 Okt 2026
- Judul: bento grid 2-1-1-2 sesuai plan 5.3, CTA Hero dan Navbar link pertama menyala
- File yang berubah:
  - Baru: `src/components/Koleksi.jsx`
  - Ubah: `src/pages/Home.jsx` (rakit Koleksi di bawah Hero)
  - Ubah: `src/components/Hero.jsx` (CTA primer "Lihat Koleksi" ke `#koleksi` dipasang, CTA sekunder masih ditunda)
  - Ubah: `src/components/Navbar.jsx` (item nav pertama: Koleksi)
  - Hasil build dicopy ke root: `index.html`, `assets/` (bundle lama dibersihkan dulu), `images/`
- Hasil tes:
  - `npm run build`: sukses, 453 modul, 1.60 detik. Output CSS 10.28 kB, JS 324.24 kB di `dist/`
  - Compile modul baru dicek langsung lewat dev server 5015 milik Bang Rob, HTTP 200, transform bersih
  - Screenshot 360, 768, 1280: pola 2-1-1-2 kebaca di desktop (dua kartu sejajar, dua bar penuh, dua kartu sejajar), tablet tetap dua kolom, HP satu kolom urut kartu portal dulu baru slot kosong, tidak ada scroll horizontal
  - Teks section ke-render semua di DOM dump: judul, nama portal, label slot, status, empty state
  - Kontras: tidak ada pasangan warna baru. `ink/80` 8.31:1, `ink/70` 5.83:1, putih di aksen 5.40:1, titik status aksen 4.62:1, semua lolos
  - Em dash: nol di seluruh `src/` dan file markdown
  - Link mati: nol. Hanya dua tujuan href di seluruh `src/`, yaitu `/` (logo dan tombol Buka Portal, reload real) dan `#koleksi` (section sudah ada, terverifikasi di DOM)
  - Console: tidak ada error JavaScript, hanya warning internal Chrome soal sqlite dan GPU
  - Belum diuji di batch ini: section Tentang sampai Kontak, Footer, 404, robots, sitemap, humans, komponen GtagTracker, menu mobile (baru dua item nav jadi belum perlu)
- Catatan review: nama 5 slot masih pola isi `app1` sampai `app4` plus `tools`, karena plan hanya mengunci jumlah 5 dan rentang app1 sampai tools. Boleh diganti nama aslinya saat review, tidak mengubah layout.

## 16 Okt 2026, Batch 4: Section Tentang dan CTA sekunder Hero

- Tanggal: 16 Okt 2026
- Judul: section Tentang dua kolom, kedua CTA hero aktif
- File yang berubah:
  - Baru: `src/components/Tentang.jsx`
  - Ubah: `src/components/Hero.jsx` (CTA sekunder "Kenalan sama Bang Rob" ke `#tentang`, gaya outline)
  - Ubah: `src/components/Navbar.jsx` (item Tentang masuk)
  - Ubah: `src/pages/Home.jsx` (rakit Tentang)
- Hasil tes:
  - Compile lewat dev server 5015: HTTP 200 untuk semua file yang berubah
  - Judul section "Kenalan sama Bang Rob." diselaraskan dengan teks CTA, karena plan tidak mengunci judul section ini secara eksplisit
  - Kedua tombol external pakai `target="_blank"` plus `rel="noopener noreferrer"`
  - Logo kubus `favicon-logo.webp` 358x447 dipakai besar di kolom kiri, bukan di upscale berlebihan
  - Link mati: nol. `#tentang` baru aktif SETELAH sectionnya ada
  - Belum diuji di batch ini: screenshot lebar penuh (dikerjakan di audit akhir batch 7)

## 16 Okt 2026, Batch 5: Section Alur

- Tanggal: 16 Okt 2026
- Judul: tiga kartu proses nyata dengan panah, cuma di section ini
- File yang berubah:
  - Baru: `src/components/Alur.jsx`
  - Ubah: `src/components/Navbar.jsx` (item Alur masuk)
  - Ubah: `src/pages/Home.jsx` (rakit Alur)
- Hasil tes:
  - Compile dev server: HTTP 200
  - Kartu 1 tinggi (min 256px di desktop), kartu 2 dan 3 pendek (min 192px), panah `→` hanya desktop, di HP menumpuk tanpa panah
  - Judul dan isi kartu copy verbatim dari plan 5.5, label nomor langkah pakai JetBrains Mono
  - Belum diuji di batch ini: screenshot lebar penuh (audit akhir batch 7)

## 16 Okt 2026, Batch 6: Kontak, Footer, dan menu mobile

- Tanggal: 16 Okt 2026
- Judul: kanal kontak real semua, footer satu baris, navbar penuh plus menu mobile
- File yang berubah:
  - Baru: `src/components/Kontak.jsx`, `src/components/Footer.jsx`
  - Ubah: `src/components/Navbar.jsx` (rewrite: 4 item, tombol hamburger, panel mobile, Escape menutup)
  - Ubah: `src/pages/Home.jsx` (rakit Kontak plus Footer)
- Hasil tes:
  - Compile dev server: HTTP 200
  - Empat kanal: email `mailto:`, WhatsApp `wa.me`, GitHub, LinkedIn. LinkedIn diambil dari profil GitHub dan porto pribadi Bang Rob sendiri, bukan tebakan
  - Tidak ada form di v1, sesuai plan (form butuh backend)
  - Menu mobile diuji interaksi asli lewat Chrome DevTools Protocol di lebar 360: tombol buka menu, `aria-expanded` jadi true, Escape menutup, klik link menu menutup menu dan pindah ke `#kontak`
  - Link footer `robots.txt`, `sitemap.xml`, `humans.txt` baru dibuat di batch 7, jadi sudah ada isinya begitu batch 7 kelar

## 16 Okt 2026, Batch 7: File statis, pelacak GA4, dan audit akhir

- Tanggal: 16 Okt 2026
- Judul: 404 plus robots, sitemap, humans, pelacak pageview, build final dan audit penuh
- File yang berubah:
  - Baru: `public/robots.txt`, `public/sitemap.xml`, `public/humans.txt`, `public/404.html` (statis, noindex, tombol ke `/`)
  - Baru: `src/components/GtagTracker.jsx`
  - Ubah: `src/App.jsx` (pasang GtagTracker)
  - Ubah: `entries/index.html` (config GA4 `send_page_view: false` supaya pageview tidak dobel)
  - Hasil build final dicopy ke root: `index.html`, `assets/`, `images/`, `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt`
- Hasil tes:
  - `npm run build` final: sukses, 458 modul, CSS 12.06 kB, JS 330.98 kB
  - GA4 diuji beneran lewat Chrome DevTools Protocol pada build produksi (server statis): dataLayer terisi, config `G-QCTML33T41` dengan `send_page_view: false`, dan TEPAT SATU event `page_view` terkirim. Di dev server bisa terlihat dua, itu efek samping debug React StrictMode, bukan bug
  - Screenshot 360, 768, 1280: semua section tampil, menu hamburger muncul di 360, nav 4 item langsung di 768 dan 1280, tidak ada scroll horizontal
  - CTA hero diuji klik asli: `Lihat Koleksi` mengubah hash ke `#koleksi`
  - Link external diuji HEAD request: porto, bisnis, WhatsApp, GitHub semua 200. LinkedIn membalas 999 karena memang memblokir IP server, URL-nya sendiri terverifikasi dari porto pribadi
  - Link lokal via dev server: `robots.txt`, `sitemap.xml`, `humans.txt`, `404.html`, gambar semua 200
  - Em dash: nol di seluruh file
  - Kontras: tidak ada pasangan warna baru sejak batch 3, semua sudah pernah lolos script
  - Link mati: nol. Semua href di seluruh `src/` diverifikasi tujuannya ada atau URL real
- Catatan jujur:
  - Di dev server pageview bisa terlihat dua kali karena React StrictMode hanya menggandakan efek di mode pengembangan. Build produksi sudah terbukti hanya sekali
  - Alur di lebar 768 sempit, tapi tidak ada teks terpotong dan tidak ada scroll horizontal, jadi dibiarkan. Kalau Bang Rob mau lega, titik panah bisa digeser dari breakpoint md ke lg
  - Komponen `Seo.jsx` dari struktur plan tidak dibuat, karena meta SEO sudah lengkap di `entries/index.html` dan portal ini satu halaman, jadi memisahkannya ke komponen tidak menambah nilai
  - Footer memakai copy "Dibangun dengan React dan PHP di shared hosting" persis seperti plan, walau PHP belum dipakai di v1. Ini copy pemilik, bukan klaim teknis halaman

## 16 Okt 2026, Validasi produksi dan fix halaman 404

- Tanggal: 16 Okt 2026
- Judul: portal live di ralabs.my.id, satu temuan 404 custom belum terpakai
- File yang berubah:
  - Baru: `.htaccess` (satu baris ErrorDocument 404 ke /404.html)
- Hasil validasi produksi di https://ralabs.my.id/:
  - Halaman utama status 200, isi HTML identik persis dengan `dist/entries/index.html` hasil build lokal
  - Bundle yang diload `main-BI1AvY-B.js` plus `main-D1N9zIu4.css`, hash cocok dengan build, artinya yang live memang kode hasil merge PR 1
  - Title, description, OG image, JSON-LD, dan tag GA4 lengkap
  - GA4 terbukti bukan cuma kode mati: ada request jaringan asli ke `google-analytics.com/g/collect` berisi `tid=G-QCTML33T41` dan `en=page_view`, pageview awal tepat satu
  - Semua section terender di DOM produksi, console tanpa error JavaScript
  - Menu mobile diuji asli di domain live: buka, Escape tutup, CTA hero mengubah hash ke #koleksi
  - robots.txt, sitemap.xml, humans.txt, 404.html, semua gambar: status 200
  - http redirect ke https berjalan
- Temuan yang diperbaiki di PR ini:
  - Sebelumnya `/halaman-ngawur-123` mengembalikan status 404 tetapi menampilkan template 404 bawaan Hostinger, bukan `404.html` milik kita. Penyebabnya tidak ada konfigurasi ErrorDocument, jadi ditambahkan lewat `.htaccess`
- Belum diuji di batch ini: tampilan 404 custom di live, baru bisa dicek SESUDAH PR ini merge dan ke-deploy. Kalau masih juga tampil template Hostinger setelah deploy, langkah cadangan adalah mengatur custom error page lewat hPanel, bagian itu dari sisi panel Bang Rob
- Catatan opsional (belum dikerjakan, bukan kebutuhan v1): `www.ralabs.my.id` masih menyajikan isi sama tanpa redirect ke domain utama. Canonical sudah menunjuk ke domain tanpa www, jadi SEO aman, redirect www hanya rapi-rapi

## 16 Okt 2026, Pasca merge PR 2: buka tutup temuan tersisa

- Tanggal: 16 Okt 2026
- File yang berubah: `engineering.md` saja (catatan verifikasi, tanpa ubahan kode)
- Hasil verifikasi:
  - 404 custom SETELAH deploy: `https://ralabs.my.id/halaman-ngawur-123` mengembalikan status 404 dan menampilkan halaman 404 milik portal, yaitu judul 404, teks "Halaman tidak ketemu", tombol "Ke Portal Utama". Template Hostinger tidak tampil lagi, `.htaccess` terbaca server. Temuan dari PR 2 resmi tertutup
  - Zoom dan overflow di lebar 320, 480, 640 (setara zoom 200 persen dari 1280), dan 1280: tidak ada scroll horizontal, tidak ada teks terpotong. Ini verifikasi terakhir dari plan bagian 6 yang belum pernah dikerjakan
  - `npm audit`: 7 temuan, semuanya ada di rantai dependensi build time milik tailwindcss (braces dan postcss-selector-parser), tidak ikut masuk bundle produksi. `npm audit fix` tanpa force terbukti no-op, nol file berubah. Force berarti meloncat dari Tailwind 3.4 ke 4, melanggar stack yang sudah dikunci. Keputusan: diterima seperti adanya, karena hanya kena alat build, perlu keputusan Bang Rob kalau suatu saat mau migrasi Tailwind 4
- Sisa yang butuh keputusan Bang Rob, bukan bug:
  - Nama asli 5 slot subdomain, sekarang masih isi `app1` sampai `app4` plus `tools`
  - Titik lebar penuh section Alur, sekarang mulai di 768 yang sempit, bisa digeser ke 1024 kalau mau lebih lega
  - Redirect `www` ke domain utama, sekarang masih menyajikan isi sama
  - Verifikasi link LinkedIn dari browser pribadi, karena IP server diblokir LinkedIn
  - Cek laporan Realtime GA4 dari akun analytics milik Bang Rob

## 16 Okt 2026, Redesign hero desktop sesuai artboard Bang Rob + preloader

- Tanggal: 16 Okt 2026
- Judul: hero desktop ulang persis artboard Full HD/2K/4K (surface 4 blok, banner, quote, kartu ENJOY, maskot, poster), navbar Home + pill floating, preloader "Buka Portal" dengan tirai, split layout tablet/mobile, checkpoint
- File yang berubah:
  - Token warna baru di `tailwind.config.js`: `ink` `#1B1818`, `accent` `#E3222B`, tambah `sun` `#FFE578`
  - `src/styles/global.css`: body warna ink, `:focus-visible` accent, keyframe `fadeIn`
  - Baru: `public/images/mascot-enjoy.svg` (maskot ENJOY di-extract dari artboard)
  - Baru: `src/components/TiltCard.jsx` (efek 3D tilt mengikuti mouse, pakai framer-motion)
  - Baru: `src/components/Preloader.jsx` (overlay hitam + logo turun + tombol "Buka Portal" + tirai belah dua ke samping)
  - Baru: `src/components/HeroDesktop.jsx` (hero desktop final: surface 4 blok, eyebrow, heading, quote + kutip, poster kanan, kartu ENJOY, chevron)
  - Baru: `src/components/HeroTablet.jsx`, `src/components/HeroMobile.jsx` (placeholder sementara, dirombak batch berikutnya)
  - `src/components/Hero.jsx` jadi pengatur: tampilkan HeroDesktop/Tablet/Mobile sesuai breakpoint
  - `src/components/Navbar.jsx`: pill putih floating, item Home, tombol Github dengan tilt + hover hitam + bounce
  - `src/pages/Home.jsx`: rakit Preloader di atas halaman
- Hasil tes:
  - `npm run build`: sukses, tidak ada error. Bundle baru terhash (JS ~342 kB, CSS ~18 kB)
  - Surface: rasio blok hitam/putih/merah/strip diukur dari PNG artboard Full HD (1920×1080), tetap proporsional di 2K/4K karena full-bleed pakai persen dan tinggi 56.25vw
  - Layout desktop (width >= 1024px): blok warna full nge-fill tanpa margin putih di atas/bawah/kanan/kiri, cocok dengan artboard Bang Rob
  - Penempatan huruf logo + text di poster kanan, eyebrow, heading, quote, kartu ENJOY, chevron: dipasang lalu di-micro-manage Bang Rob dan di-lock
  - TiltCard: banner kanan, kartu kuning, tombol Github, tombol Buka Portal mengikuti arah mouse, halus pakai spring
  - Chevron: hover jadi merah, klik bounce + smooth scroll ke `#koleksi`
  - Preloader: muncul tiap refresh (sementara, sebelum sessionStorage), logo turun dari atas, tombol fade in, klik membuka tirai dari tengah ke samping dengan garis merah ikut panel, homepage muncul setelahnya
  - Navbar: item Home baru scroll balik ke `#home` (hero)
  - Split layout: Hero jadi pengatur breakpoint, tablet (md-lg) dan mobile (<md) pakai file sendiri-sendiri sebagai placeholder, desktop pakai HeroDesktop yang di-lock
  - Link mati: nol. Semua href menunjuk section yang ada atau URL real
  - Console: tidak ada error JavaScript
- Catatan jujur:
  - Tablet dan mobile MASIH placeholder sederhana (blok warna + judul), belum sesuai artboard `tablet(768x1024).svg` dan `mobile(360x800).svg`. Cek kelengkapan 360/768 baru tuntas setelah batch tablet dan mobile masing-masing
  - `mascot-enjoy.svg` di-extract dari `desktop(1280x800).svg` artboard Bang Rob, warna dan path diambil persis dari desain vector
  - Preloader sengaja dibuat tampil tiap refresh supaya mudah di-micro-manage; setelah final bisa dikembalikan ke sekali per sesi (sessionStorage)
