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

## 16 Okt 2026, Fix artefak build untuk deploy hPanel

- Tanggal: 16 Okt 2026
- Judul: hasil build dipindah ke root repo supaya hPanel narik versi terbaru
- File yang berubah:
  - `index.html` (root): kini menunjuk bundle baru `main-DPZivlyb.js` + `main-CHyzDmd-.css`
  - `assets/`: bundle lama `main-BI1AvY-B.js` + `main-D1N9zIu4.css` dihapus, bundle baru hasil build PR #4 masuk
  - `images/mascot-enjoy.svg` (root): maskot ikut ter-copy dari `dist/images/`
  - `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt` (root): disamakan dengan hasil build
- Kenapa perlu:
  - Auto-deploy hPanel menarik file dari repo `main` (root folder), bukan dari `dist/` (yang di-gitignore).
  - PR #4 cuma meng-commit source (`src/`, `public/`), hasil build belum ikut masuk repo. Hasilnya live tetap menyajikan bundle lama walau PR sudah merge.
- Hasil tes:
  - `md5` bundle root sama persis dengan bundle `dist/assets/` (d06a9b27450bc6afd28a450e684c0f31)
  - Isi bundle terverifikasi memuat kode baru: string “Buka Portal” dan “Bengkel Kode” ada di bundle
  - `index.html` root nunjuk `/assets/main-DPZivlyb.js` + `/assets/main-CHyzDmd-.css` yang beneran ada di folder assets
- Catatan jujur:
  - Verifikasi output live (`ralabs.my.id`) dilakukan batch ini: masih bundle lama karena hPanel belum narik PR #4 yang baru merge. Setelah PR ini merge, cek ulang bundle di production.

## 16 Okt 2026, Validasi produksi + aturan hasil build + issue tablet/mobile

- Tanggal: 16 Okt 2026
- Judul: validasi production PR #4/#5 dinyatakan OK, contributing.md dapat aturan hasil build wajib ke root, buat 2 issue redesign hero tablet & mobile
- File yang berubah:
  - `contributing.md`: tambah bagian "Hasil build wajib ikut ter-commit di root repo" (langkah copy `dist/` ke root, cek case-sensitive filename, verifikasi setelah merge)
  - Tidak ada perubahan source; murni perbaikan aturan kerja supaya masalah "PR merge tapi hPanel serve versi lama" tidak terulang
- Hasil tes / validasi:
  - Production `https://ralabs.my.id/` dinyatakan OK: bundle JS `main-DPZIVlyb.js` (V kapital) terbukti 200, md5 `d06a9b27450bc6afd28a450e684c0f31` = persis build lokal `dist/`, isi "Buka Portal", "Bengkel Kode", "ENJOY!!" ada
  - Render live lewat headless Chrome: DOM penuh, navbar + hero + preloader semua ke-render, mascot + favicon + logo live 200
  - Sesuai dokumentasi resmi Hostinger (artikel "How to deploy a Git repository in Hostinger"): auto-deploy menarik ROOT repo branch `main` ke `public_html`, tanpa build oleh server
  - Catatan cek: evaluasi awal sempat tampak "404" pada bundle JS karena salah ketik casing (v kecil vs V kapital) pada perintah cek, bukan masalah deploy
- Issue baru:
  - #6: Redesign Hero Tablet (768x1024) sesuai artboard
  - #7: Redesign Hero Mobile (360x800) sesuai artboard
- Catatan jujur:
  - Tablet dan mobile masih placeholder di `HeroTablet.jsx` / `HeroMobile.jsx`, menunggu dikerjakan lewat issue #6 dan #7

## 16 Okt 2026, Micro-manage animasi hero desktop + preloader final

- Tanggal: 16 Okt 2026
- Judul: stagger animasi pasca preload (eyebrow baseline), card kanan turun lurus -> jelly -> baru miring, fix elemen dobel di card logo, preloader rampung (logo gabungan, tilt, tombol super bold)
- File yang berubah:
  - Ubah: `src/components/HeroDesktop.jsx` (delay stagger tiap animasi, rotasi card dipindah ke akhir animasi, scale pindah ke framer style biar ukuran tak berubah, hapus dekorasi dobel `!` dan 2 strip di card, posisi card naik 50px lalu geser kiri 100px lalu kanan 50px)
  - Ubah: `src/components/Preloader.jsx` (logo ganti `logo-preload.webp` ukuran 396px + TiltCard, tombol "Buka Portal" 48px font-black + stroke putih, pill dikecilin 10% dua kali, stroke pakai currentColor biar hover hitam solid)
  - Ubah: `src/pages/Home.jsx`, `src/components/Hero.jsx`, `src/components/Navbar.jsx`, `src/styles/global.css` (rantai prop `started` biar semua animasi mulai setelah preloader kelar)
  - Baru: `public/images/logo-preload.webp` (gabungan favicon kubus + logo-text, desain Bang Rob, 651x651)
  - Hasil build dicopy ke root: `index.html`, `assets/`, `images/`
- Hasil tes:
  - Dev server 5015 HMR: semua perubahan tampil tanpa error console
  - Stagger pasca preload (eyebrow baseline t=0): eyebrow 0s/1.3s, card kanan 0.3s/1.4s, banner headline 0.5s/1.4s, group quote 0.7s/1.1s, kartu ENJOY 1s/1.3s. Semua mulai dari opacity 0
  - Card kanan: turun lurus 0° bersama jelly, setelah settle (delay 1.7s) baru miring -6° durasi 0.25s, ukuran efektif 0.729 (0.81 dikali 0.9 = dikecilin 10%), posisi akhir naik 50px dan geser 50px ke kiri dari posisi semua
  - Fix elemen dobel: span "!" dan 2 strip di card dihapus karena `favicon-logo.webp` sudah punya "!" dan 2 slash sendiri (dibuktikan ukur pixel: geometri elemen di design card identik dengan yang baked di file logo, jarak "!" ke band merah 46px dan slash 195px dari band sama persis). Sekarang card tampil satu set, tidak dobel
  - Preloader: logo gabungan 396px max 95vw dengan tilt 8 derajat, animasi turun tetap; tombol "Buka Portal" font 48px font-black + stroke 0.12vw currentColor (pas hover bg putih teks ink stroke ikut ink), pill jadi px-16 py-6 dulu lalu dikecilin 10% dua kali jadi 3.24rem/1.215rem
  - `npm run build`: sukses, bundle terhash
  - Build dicopy ke root sesuai contributing.md, md5 bundle root sama dengan `dist/assets/`
- Catatan jujur:
  - Preloader masih tampil tiap refresh (sengaja, biar gampang micro-manage); belum dikembalikan ke sekali per sesi (sessionStorage)
  - Issue #6 (tablet) dan #7 (mobile) masih pending, belum dikerjakan di batch ini

## 16 Okt 2026, Final micro-manage hero tablet + fix navbar scroll-spy

- Tanggal: 16 Okt 2026
- Judul: hero tablet rampung di-micro-manage lalu DI-LOCK (issue #6), fix ID `#home` kembar + scroll-spy navbar, minor tweak desktop
- File yang berubah:
  - `src/components/HeroTablet.jsx` (sekarang DI-LOCK): eyebrow dikecilin 20% + posisi disetel; tinggi pill headline diatur; quote dipecah jadi 2 paragraf; font quote disetel sampai stabil di `1.8vw`; group quote digeser center surface (50%) lalu turun total 250px; area quote dilebar dari 61% ke 97%; tanda kutip kiri/kanan digeser; tanda kutip kanan diganti putih + stroke hitam; kartu logo gede 10% + turun 10px; kartu ENJOY gede 20% + naik 20px
  - `src/components/Hero.jsx`: ketiga hero dibungkus SATU `<section id="home">`
  - `src/components/HeroDesktop.jsx`, `src/components/HeroMobile.jsx`: buang `id="home"` (penyebab ID kembar)
  - `src/components/Navbar.jsx`: scroll-spy diganti dari IntersectionObserver ke scroll-based (garis 40% + override kalau mentok bawah halaman); state awal `home`; animasi fade dipindah dari `motion.header` (fixed) ke `<nav>` dalam pakai CSS transition
  - `src/components/HeroDesktop.jsx`: minor, headline turun 10px dan kartu logo turun 15px
  - Hasil build dicopy ke root: `index.html`, `assets/` (bundle lama dibersihkan dulu), `images/`, `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt`
- Hasil tes:
  - `npm run build`: sukses, 463 modul, 1.61 detik. Bundle `main-C7edK_ok.js` 351.52 kB dan `main-mYormn_k.css` 22.93 kB
  - md5 bundle root sama persis dengan `dist/assets/` (JS `c25647d8fdb8377d176555244807be92`), `index.html` root menunjuk bundle yang benar-benar ada (nama case-sensitive dicek)
  - Fix navbar: dulu ada TIGA elemen `id="home"` kembar (HeroDesktop/Tablet/Mobile, karena ketiganya ada di DOM, dua di antaranya `display:none`). `getElementById('home')` cuma nangkap yang pertama, jadi di tablet/mobile elemen itu hidden dan section Home tidak pernah kena. Sekarang `#home` cuma satu, yaitu pembungkus di `Hero.jsx`
  - Scroll-spy: dulu pakai band tipis 5% (`rootMargin -40%/-55%`) sehingga section Kontak (pendek dan di paling bawah) tidak pernah masuk band. Sekarang pakai garis 40% viewport, plus kalau sudah mentok bawah halaman section terakhir dipaksa aktif
  - Navbar fade: dulu animasi `opacity` ditempel di elemen `fixed` (`motion.header`), yang di Chrome rawan gagal repaint saat scroll. Sekarang fade dipasang di `<nav>` dalam lewat CSS transition
- Catatan jujur:
  - Keluhan navbar "kadang ilang pas scroll" di desktop baru di-hipotesis penyebabnya (animasi di elemen fixed) lalu diperbaiki, masih PERLU konfirmasi Bang Rob apakah intermitennya benar hilang
  - Quote tablet dilebar sampai 97% layar (keputusan desain Bang Rob) sehingga teksnya nembus blok merah dan tanda kutip mepet pinggir, sudah sesuai permintaan
  - Preloader masih tampil tiap refresh (sengaja, biar gampang micro-manage); issue #7 (hero mobile) masih placeholder, belum dikerjakan

## 16 Okt 2026, Hero mobile rampung (issue #7) lalu DI-LOCK + rapi-rapi preloader dan navbar mobile

- Tanggal: 16 Okt 2026
- Judul: hero mobile sesuai artboard 360x800 di-micro-manage sampai lock, preloader dan navbar mobile dirapikan, chevron desktop dibuang
- File yang berubah:
  - `src/components/HeroMobile.jsx` (rombak dari nol: surface 4 band horisontal tinggi 222.22vw, eyebrow putih, headline pill merah, kartu logo, quote 2 paragraf plus 2 kutip hitam, kartu ENJOY. Sekarang DI-LOCK)
  - `src/components/Hero.jsx` (prop `started` diteruskan ke `HeroMobile`, sebelumnya tidak dikirim sehingga animasi pasca preloader tidak jalan di mobile)
  - `src/components/Preloader.jsx` (ukuran khusus mobile lewat variant `max-md:`, LOCKED)
  - `src/components/Navbar.jsx` (logo ganti lockup `logo+logotext.webp`, panel mobile dibuang halo `neu-card`, tombol Github jadi pill merah, hamburger custom. Bagian mobile LOCKED)
  - `src/components/HeroDesktop.jsx` (chevron dibuang, dead code `useState`, `bounce`, dan `handleChevronClick` ikut dibersihkan)
  - Hasil build dicopy ke root: `index.html`, `assets/`, `images/`, `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt`
- Hasil tes:
  - `npm run build`: sukses, 463 modul, 1.84 detik. Bundle `main-CtxWOgkj.js` 356.48 kB dan `main-DWaNRq2f.css` 27.16 kB
  - md5 bundle root sama persis dengan `dist/assets/`: JS `c44db26748cda04e3d6b9651c2eb75d6`, CSS `c43a243666ea27e4c0adf92ed4037882`. `index.html` root menunjuk bundle yang benar-benar ada, casing dicek
  - Isi bundle terverifikasi memuat kode baru: `logo+logotext.webp`, `max-md:w-[60vw]`, `clamp(21px,6vw,30px)`, `max-md:whitespace-nowrap` semuanya ada
  - Hero mobile diukur pixel di 360x800: surface 4 band, headline pill, kartu logo, quote, dan kartu ENJOY terender di posisi hasil micro-manage
  - Preloader mobile diperbaiki dengan bukti ukur: logo 342x342px jadi 214x214px, tombol 358x182px dengan teks terpecah 2 baris jadi 228x66px satu baris, lalu dikecilin 20 persen jadi 182x54px
  - Preloader desktop dan tablet TIDAK berubah: screenshot 1440x900 dan 900x1000 sebelum vs sesudah, beda pixel NOL di keduanya
  - Chevron desktop: dump DOM di 1440x900, `Lanjut ke bagian Koleksi` dan svg `viewBox="0 0 40 30"` sama-sama 0 kejadian, sementara `id="koleksi"` tetap 1 sehingga link nav Koleksi tetap punya tujuan
  - Syntax JSX 5 file yang berubah: lolos esbuild
  - Kontras: tidak ada pasangan warna baru. Balok putih di kotak ink dan di pill merah, keduanya kontras tinggi
  - Link mati: nol. Tujuan href sama seperti batch sebelumnya, dan hapus chevron tidak menghilangkan tujuan apa pun
- Catatan jujur:
  - Animasi morf hamburger (2 balok jadi X) dan buka tutup panel mobile BELUM diuji klik sendiri. Headless Chrome tidak bisa klik, dan navbar baru tampil setelah tombol "Buka Portal" di preloader diklik. Jalur state baru dicek lewat code inspection, perlu konfirmasi Bang Rob
  - Preloader masih tampil tiap refresh (sengaja, biar gampang micro-manage)
  - Issue #7 (hero mobile) ditutup setelah PR ini merge dan production tervalidasi

## 17 Okt 2026, Hero auto-fit (desktop + tablet): tinggal 1 layar di rasio apa pun

- Tanggal: 17 Okt 2026
- Judul: hero desktop & tablet auto-fit pakai frame rasio artboard + surface bleed, offset px jadi satuan yang ikut skala frame, surface dijadikan 3 warna penuh, eyebrow dan grup konten desktop dirapikan
- File yang berubah:
  - `src/styles/global.css`: kelas baru `.hero-stage-desktop`, `.hero-frame-desktop`, `.hero-stage-tablet`, `.hero-frame-tablet`, `.hero-content-desktop`, plus blok `@supports (height: 100dvh) and (width: 1cqw)`. Semua aturan di luar `@supports` masih memakai rumus lama (56.25vw / 133.33vw), jadi browser yang belum kenal dvh atau cqw tetap tampil normal, cuma belum ikut auto-fit
  - `src/components/HeroDesktop.jsx`: section jadi frame rasio 16:9, 37 nilai px diubah jadi `calc(<angka>*var(--u))`, satuan `vw` jadi `cqw`, blok putih dan merah ditarik sampai dasar frame, batas hitam/putih balik ke 45.37%, eyebrow dipisah dari grup konten, grup isi bawah (quote + kartu + ENJOY) dibungkus `.hero-content-desktop`
  - `src/components/HeroTablet.jsx`: section jadi frame rasio 3:4, 31 nilai `vw` jadi `cqw`, 35 nilai px jadi `calc(<angka>*var(--u))`, blok putih dan merah ditarik sampai dasar frame
  - `src/components/Hero.jsx`: pembungkus tablet jadi stage 1 layar
  - `src/components/HeroMobile.jsx`: hanya strip hitam di dasar surface yang dihapus. Mobile belum di-auto-fit, itu batch berikutnya
  - Hasil build dicopy ke root: `index.html`, `assets/` (bundle lama `main-CtxWOgkj.js` dan `main-DWaNRq2f.css` dihapus), `images/`, `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt`
- Kenapa perlu:
  - Tinggi hero dikunci ke lebar layar (desktop 56.25vw, tablet 133.33vw), jadi cuma pas 1 layar kalau rasio layarnya sama dengan artboard. Di 1440x900 hero kurang 90px, di 1280x1024 kurang 304px, di 3440x1440 kelebihan 495px
  - Cara kerjanya: stage setinggi 1 layar (`100dvh`) yang meng-clip dan men-center, frame rasio artboard di dalamnya, lalu blok warna melar keluar lewat `--bleed-x` / `--bleed-y` buat nutup sisa stage. Cuma tepi yang nempel ke luar yang digeser, batas antar blok nggak disentuh
  - `--u` = 1px di artboard (desktop 1cqw/19.2 untuk lebar 1920, tablet 1cqw/7.68 untuk lebar 768). Semua offset yang dulu dipatok px sekarang ikut skala frame. Di lebar frame 1920 nilainya persis 1px, jadi tampilan 1920x1080 nol perubahan
- Hasil tes:
  - `npm run build`: sukses, 463 modul, 1.52 detik. Bundle `main-Ckm83RfE.js` 357.12 kB dan `main-R4zIfXOV.css` 30.56 kB
  - md5 bundle root sama persis dengan `dist/assets/`: JS `43dd2caaebf66b98af772fcf1cfe2ab7`, CSS `0be9f04d8442a4bf4510fa18d7456712`. `index.html` root menunjuk bundle yang benar-benar ada, casing dicek
  - Isi bundle terverifikasi memuat kode baru: `.hero-frame-desktop`, `.hero-frame-tablet`, `.hero-content-desktop`, `container-type:inline-size`, `133.33cqw` semuanya ada di CSS hasil build
  - **Nol perubahan di rasio acuan**: screenshot 1920x1080, 2560x1440, dan 1280x720 dibandingkan before vs after, beda pixel 0.00% (frame, 4 blok warna, dan semua elemen konten identik). Tablet 768x1024 vs versi produksi juga 0.000%
  - **Batas blok jadi tetap**: di 7 ukuran desktop, batas hitam/putih sekarang 31.25-31.39% (sebelumnya ayun 19.10-34.86%) dan batas merah 77.08-77.22% (sebelumnya 60.94-81.88%). Di 4 ukuran tablet batasnya 43.83-43.88% dan 95.43-95.51%
  - **Isi frame = fungsi murni ukuran frame**: crop frame dari render non-16:9 dibandingkan dengan render 16:9 di ukuran frame yang sama, beda 0.000% (3440x1440 vs 2560x1440, 1440x900 vs 1440x810, 1280x1024 vs 1280x720)
  - **Surface full 3 warna**: scan pixel di baris 80%, 97%, dan 99.5% dalam frame, isinya cuma putih (59.11% lebar) dan merah (sisanya) di desktop, 60.94% dan sisanya di tablet. Tidak ada lagi gutter putih polos di dasar hero
  - **Grup konten desktop**: titik tengah grup konten (quote + kartu + ENJOY) di 50.03% lebar dan 51.06% tinggi frame di 1920x1080, dan angkanya sama di 1440x900, 1024x768, 3440x1440. Sebelumnya 56.33% lebar (space kiri 449px vs kanan 205px) dan 36% tinggi
  - Posisi elemen desktop hasil ukur DOM, sama di 1920x1080, 1440x900, dan 1024x768: eyebrow center x 50.00% y 10.63%, headline 19.22-26.99%, quote 48.84-61.80% (di area putih, di bawah batas 45.37%), kartu logo 11.60-88.40% (poster utuh, sebelumnya kepotong di atas), ENJOY 59.19-81.19%
  - Tablet dan mobile tidak terpengaruh ubahan desktop: screenshot 768x1024 dan 390x844 sebelum vs sesudah, beda 0.000%
  - Syntax JSX 4 file: lolos esbuild. Em dash: nol di baris yang ditambah
- Catatan jujur:
  - Sisa beda kecil antar render tablet yang ukuran frame-nya sama cuma sub-pixel antialiasing teks (beda maksimum 50 dari 255, tak terlihat). Bounding box semua piksel teksnya pixel-identik
  - `--geser-x` dibiarin 0% karena konten balik ke layout asli (quote dan ENJOY di 29.55%, kartu di 76.8%). Efeknya space kosong kiri/kanan belum imbang. Kalau mau imbang, eyebrow harus keluar dari tengah surface, jadi dua permintaan ini bertabrakan dan diserahkan ke Bang Rob
  - Kalau nanti seluruh tampilan di-redesign, batch auto-fit ini tetap relevan sebagai mekanisme contain-nya. Yang perlu diulang cuma isi kontennya
  - Hero mobile masih memakai rumus lama (`222.22vw`) dan belum di-auto-fit

## 17 Okt 2026, Portal v2: tema terang/gelap, halaman dirombak, navbar ganti ke CardNav

- Tanggal: 17 Okt 2026
- Judul: portal akar naik ke v2 — sistem tema terang/gelap, section About/Collection/Contact, gerbang masuk 3D, dan navbar lama (PillNav) dibuang lalu diganti CardNav dengan satu blok merah yang geser mengikuti hover. Di layar sempit kartunya jadi baris label saja
- File yang berubah:
  - Baru: `src/theme.js` (baca/simpan tema di localStorage, fallback ke `prefers-color-scheme`), `src/pages/Portal.jsx` (kerangka halaman: gerbang 3D dulu, baru portal), `src/data/proyek.js`, `src/components/About.jsx`, `Collection.jsx`, `Contact.jsx`, `Gerbang.jsx`, `Kubus.jsx`, `CardSwap.jsx`, `CardNav.jsx`, `CardNav.css`, `Navbar.css`
  - Dihapus: `PillNav.jsx` + `PillNav.css` (diganti CardNav), `HeroDesktop.jsx`, `HeroMobile.jsx`, `HeroTablet.jsx` (digabung jadi satu `Hero.jsx`), `Tentang.jsx`, `Koleksi.jsx`, `Kontak.jsx` (diganti About/Collection/Contact), `Alur.jsx`, `TiltCard.jsx`, `Preloader.jsx`, `pages/Home.jsx`, `GtagTracker.jsx`
  - Diubah: `src/App.jsx` dan `src/main.jsx` (routing jadi satu halaman Portal), `src/styles/global.css` (token warna + tema gelap), `src/components/Navbar.jsx`, `Footer.jsx`, `Hero.jsx`, `tailwind.config.js`, `package.json`, `entries/index.html`, `public/404.html`, `public/sitemap.xml`, `public/humans.txt`, `README.md`
  - Hasil build dicopy ke root: `index.html`, `assets/` (bundle lama `main-Ckm83RfE.js` dan `main-R4zIfXOV.css` dihapus dulu), `images/`, `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt`
- Kenapa perlu:
  - Navbar CardNav menulis semua variabel `--cn-*` sebagai inline style, jadi CSS proyek tidak bisa menimpa variabelnya, cuma bisa menimpa `background`/`color`/`border-color` di elemennya. Selain itu mesin buka-tutup CardNav menulis `transform`, `opacity`, dan `filter` inline tiap frame, jadi `transform` dan `opacity` di `.card-nav__card` mati. Untuk efek tekan dipakai properti `scale` yang berdiri sendiri, karena `scale` ikut menyusun bersama `transform`
  - Hover kartu dibikin SATU blok merah yang geser, bukan empat background yang nyala-senyala. Kartunya dibikin transparan, lalu `::after` di `.card-nav__cards` yang bergeser `translate` mengikuti `:has()` kartu mana yang kena hover. Kuncinya `:has()`, jadi kalau browser belum kenal `:has()` efeknya cuma tidak jalan, tampilannya tetap utuh
  - Bold maksimal Comfortaa adalah 700, dan permintaan 600 di-atas fixed-weight bikin browser membulatkan ke muka 700. Karena itu URL font di `entries/index.html` diganti ke rentang variabel `wght@300..700` supaya 600 benar-benar 600
  - Di layar sempit empat kartu bertumpuk dengan deskripsi dan baris tautan bikin menunya kepanjangan, jadi tinggal labelnya. Tautannya TIDAK dihapus, cuma dibikin berukuran nol pakai `font-size: 0`: kalau pakai `display: none`, tautannya hilang dari keyboard dan screen reader sekaligus dan lapisan klik di `::after`-nya ikut lenyap, jadi kartunya tidak bisa diklik sama sekali. Cincin fokusnya ikut dipindah ke kartunya karena tautan berukuran nol cuma menyisakan kotak kecil di pojok
- Hasil tes:
  - `npm run build`: sukses, 6084 modul, 3.58 detik. Bundle `main-Ck5gxF4P.js` 691.63 kB (gzip 192.31 kB) dan `main-B_PfGh5a.css` 22.74 kB (gzip 5.29 kB). Ada warning chunk JS di atas 500 kB
  - md5 bundle root sama persis dengan `dist/assets/`: JS `b783e07992f0d384b72d59cd682ce3b9`, CSS `6c092c4d755fb61d4a79e36ebcf3373e`. `index.html` root menunjuk bundle yang benar-benar ada, casing dicek
  - Semua rujukan file lokal di `index.html` root dicek satu-satu dan ada semua: `assets/main-B_PfGh5a.css`, `assets/main-Ck5gxF4P.js`, `images/favicon-logo.webp`, `images/logo+logotext.webp`, `images/og-banner.webp`. `404.html` menunjuk `images/favicon-logo.webp`, ada
  - Gambar yang dirujuk dari dalam bundle JS dicek: `banner-logo.webp`, `logo+logotext.webp`, `mascot-enjoy.svg`, ketiganya ada di `images/`. Nol kemunculan `url()` di bundle CSS, jadi tidak ada file font atau gambar yang bisa putus dari sana (font diambil dari Google Fonts)
  - Nol sisa rujukan ke hash bundle lama (`Ckm83RfE`, `R4zIfXOV`) di seluruh file yang ikut dideploy. `assets/` di root isinya cuma 1 js + 1 css, bundle lama benar-benar terhapus
  - Kode baru terverifikasi masuk bundle CSS hasil build: `data-narrow` muncul 14 kali, termasuk `font-size:0` dan `:has(.card-nav__link:focus-visible)`. Aturan geser merah juga masuk: `card-nav__cards:has(>.card-nav__card:nth-child(2):hover):after{transform:translate(calc(100% + var(--cn-gap)))}` dan seterusnya (minifier menyederhanakan sendiri hitungan `calc`-nya). Urutan di bundle juga benar: aturan vendor `.card-nav__card{gap:10px;padding:14px 14px 12px}` muncul dulu, baru aturan baru `.card-nav__card{gap:0;padding:12px 14px}`
  - Tombol GitHub diperiksa lewat render komponen ke string (react-dom/server, di luar browser): dari enam elemen `<a>` di navbar, hanya tombol GitHub yang dapat `target="_blank"` + `rel="noopener noreferrer"`. Empat tautan kartu dan logo tetap tanpa `target`, jadi tidak ada tautan internal yang ikut buka tab baru
  - Empat belas file JSX lolos build tanpa error sintaks. Blok CSS seimbang
  - Kontras pasangan yang dipakai: kertas `#F8FAFC` di atas merah `#D70000` 5.16:1 (lolos), tinta di atas kertas 18.70:1, merah di atas kertas 5.16:1, stroke merah `#D70000` di atas tinta `#0C0C0C` 3.62:1 (lolos batas 3:1 untuk batas elemen)
- Catatan jujur:
  - BELUM ADA verifikasi browser sama sekali untuk batch ini. Semua yang berkaitan dengan tampilan dan interaksi (lebar 360/768/1280, scroll horizontal, hover, tap, konsol bersih, tiap tombol dan link ditekan) BELUM diuji dan wajib dicek Bang Rob. Lingkungan kerja ini tidak punya browser
  - Yang bisa dibuktikan tanpa browser cuma yang tertulis di atas: build sukses, bundle yang dirujuk benar-benar ada, kode baru benar-benar masuk bundle, dan struktur DOM. Semua klaim soal tampilan di entri ini berasal dari hitungan CSS, bukan pengukuran
  - Tinggi navbar sempit dihitung dari nilai CSS, bukan diukur: label 17px dikali line-height 1.4 = ~24px, plus padding 12+12, jadi ~48px per baris. Empat kartu turun dari ~556px jadi ~216px. Hitungan ini meleset kalau deskripsinya di HP ternyata dua baris, tapi arahnya cuma makin hemat
  - Bundle JS 691.63 kB (gzip 192.31 kB) lewat batas 500 kB, hampir pasti dari `three` yang cuma dipakai `Kubus.jsx` di gerbang masuk. Portal akar jadi mengirim ~192 kB gzip JS. Belum dioptimasi, belum diputuskan mau di-code-split atau dibiarkan
  - `framer-motion` dikeluarkan dari dependency dan nol source memakainya. Ini konsisten dan build bersih, tapi nabrak catatan STACK WAJIB yang masih menyebut framer-motion. Perlu keputusan Bang Rob
  - `GtagTracker.jsx` dihapus. Loader gtag tetap ada di `entries/index.html` (`G-QCTML33T41`) jadi page view awal tetap terkirim, tapi event `page_view` per navigasi SPA hilang. Kalau portal sekarang benar-benar satu halaman, ini tidak masalah. Perlu konfirmasi
  - Dua gambar jadi nganggur karena komponennya dihapus: `images/logo-preload.webp` (dulu dipakai `Preloader.jsx`) dan `images/logo-text.webp`. Belum dihapus, masih ikut ter-commit di root
  - `plan-prd/` ada di `.gitignore`, jadi folder plan dan spec tidak ikut masuk repo ini. Catatan desain batch ini disimpan lokal saja
  - Sebagian besar isi batch ini dikerjakan sebelum sesi ini, jadi alasan per bagiannya tidak semuanya gue tahu. Yang gue rombak di sesi ini bagian navbar CardNav dan versi sempitnya

## 17 Okt 2026, Hero 3D + headline "HERE'S RALABS"

- Tanggal: 17 Okt 2026
- Judul PR: rombak hero — headline HERE'S RALABS (RA aksen) + logo 3D GLB interaktif
- File yang berubah:
  - Baru: `src/components/FadeIn.jsx`, `src/components/Logo3D.jsx`
  - Ubah: `src/components/Hero.jsx`, `src/styles/global.css`, `entries/index.html` (font Manrope), `tailwind.config.js` (`font-heading`), `package.json` + `package-lock.json` (`framer-motion`)
  - Aset: `public/images/logo-ralabs-3d.glb` (1.52 MB), `public/images/banner-logo.webp` (copy), hasil build `images/logo-ralabs-3d.glb`
  - Hasil build dicopy ke root: `index.html`, `assets/main-C-kemC6l.css`, `assets/main-D65CF_ge.js`, `images/`, `404.html`, `robots.txt`, `sitemap.xml`, `humans.txt`
- Kenapa perlu:
  - Headline diganti ke "HERE'S RALABS" uppercase, rata tengah, ukuran/posisi sama seperti sebelumnya. Bagian `RA` memakai `.teks-aksen`: gradient accent opaque `#A00000 → #D70000` + text-shadow merah halus. Gradient dipasang per-span (bukan di parent) untuk menutup seam 1px yang sempat muncul sebagai garis gelap di kaki A
  - Hero memakai logo 3D dari GLB buatan Rob: warna/shadow mengikuti vertex color aset (linear), material unlit. Kamera orthographic dengan frustum tetap + pan per frame, jadi ukuran objek konstan dan rotasi vertikal/horizontal penuh tanpa terpotong
  - `Magnet.jsx`/`TiltMark.jsx` tidak dipakai lagi (posisi objek harus tetap; interaksi murni rotasi lewat OrbitControls)
  - `framer-motion` dipakai untuk fade-in; `three` + GLTFLoader/OrbitControls untuk logo 3D
- Hasil tes:
  - `npm run build`: sukses, 6499 modul, 4.41 detik. CSS `main-C-kemC6l.css` 26.14 kB, JS `main-D65CF_ge.js` 957.43 kB (gzip 272.69 kB). Ada warning chunk > 500 kB
  - md5 bundle root sama dengan `dist/assets/`: CSS `2528f3c06ea9bf199b9ba6949d7343b9`, JS `cde67b8672455f5a61c9ec1ad284095b`
  - `index.html` root menunjuk bundle yang ada (case-sensitive dicek), tidak ada sisa hash lama `Ck5gxF4P`/`B_PfGh5a`. Semua rujukan lokal di `index.html` dan `404.html` ada
  - Dev server 5015 (server Bang Rob): h1 `HERE'S RALABS`, `RA` gradient `rgb(160,0,0) → rgb(215,0,0)`, tidak ada error console
  - GLB dimuat 200 dari `/images/logo-ralabs-3d.glb`; canvas 3D tampil
  - Lebar 360, 768, 1280: `scrollWidth - clientWidth = 0` (tidak ada scroll horizontal)
  - CTA hero: `https://indeepcleaningid.site/` dan `https://robbyaliasa.tongkrongan.tech/`, bukan link mati
  - Kontras: kertas `#F8FAFC` di atas merah `#D70000` 5.16:1, merah di atas kertas 5.16:1, tinta di atas kertas 18.70:1
  - Seam gelap di kaki A: 0 piksel gelap yang menempel ke area merah (diukur dari screenshot, canvas 3D disembunyikan)
- Catatan jujur:
  - Bundle JS naik ke 957.43 kB (gzip 272.69 kB) karena `three` + `framer-motion`; masih warning > 500 kB. Optimasi code-split/asset 3D belum dikerjakan
  - GLB 1.52 MB; 3D sudah "locked" oleh Bang Rob, perubahan layout berikutnya tidak boleh menggeser objek
  - `plan-prd/` tetap di `.gitignore`, jadi plan/spec tidak ikut PR ini
