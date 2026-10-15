# RaLabs

Portal utama dari `https://ralabs.my.id/`. Ini adalah bengkel kode dan karya gue, satu rumah untuk semua apps, website, dan tools yang gue bangun dan berani live. Saat ini yang hidup baru portal akarnya. Slot subdomain `*.ralabs.my.id` disiapkan di sini untuk menyambut karya berikutnya satu per satu.

Repo ini di-push ke GitHub lalu ditarik otomatis oleh hPanel Hostinger. Setiap merge ke `main` langsung live, jadi semua perubahan wajib lewat pull request dulu.

## Link

- Live: https://ralabs.my.id/
- Porto gue: https://robbyaliasaakbar.github.io
- Bisnis gue: https://indeepcleaningid.site

## Stack

- React 18 dengan Vite 6, build statis untuk shared hosting
- Tailwind CSS 3.4 lewat PostCSS, bundled sendiri tanpa CDN
- React Router 7 untuk navigasi
- Font Comfortaa (body dan display) plus JetBrains Mono (label data)
- Backend: belum ada di v1. Kalau nanti butuh, pakai PHP 8.3 native plus MySQL lewat phpMyAdmin. Tanpa Composer, tanpa Docker, tanpa VPS.
- Analytics: Google Analytics 4 dengan ID `G-QCTML33T41`

Shared hosting Hostinger hanya menerima file statis, PHP, dan MySQL. Itu sebabnya hasil build React yang disalin ke root repo ini yang akhirnya tayang, bukan server Node.

## Struktur

```
public_html/
├── README.md            ← file ini
├── engineering.md       ← log perubahan tiap PR
├── contributing.md      ← aturan pull request
├── LICENSE              ← MIT
├── entries/index.html   ← sumber HTML, ini yang diedit
├── src/                 ← sumber React, ini yang diedit
│   ├── pages/           ← rakitan halaman
│   ├── components/      ← potongan UI
│   └── styles/          ← token warna plus util neumorphism
├── public/              ← file statis yang ikut tercopy saat build
│   └── images/          ← hasil copy dari ../assets/ (lihat aturan aset)
├── index.html           ← hasil build, jangan diedit langsung
└── assets/              ← hasil build, jangan diedit langsung
```

Aset logo dan banner asli ada di folder `../assets/` di luar repo. Folder itu hanya referensi. Tiap file yang mau dipakai wajib dicopy dulu ke `public/images/`, lalu barulah dipanggil dari code. Code tidak boleh menunjuk ke `../assets/` karena folder itu tidak ikut ter-deploy.

## Cara jalan lokal

```bash
cd public_html

# sekali saja: copy aset referensi ke meja kerja
cp ../assets/favicon-logo.webp ../assets/logo-text.webp \
   "../assets/logo+logotext.webp" ../assets/og-banner.webp public/images/

npm install
npm run dev
```

Dev server jalan di port 5015. Karena sumber HTML ada di `entries/`, buka:

`http://localhost:5015/entries/index.html`

File `index.html` di root adalah hasil build, jadi kalau dibuka di `/` selama pengembangan kamu akan melihat versi lama tanpa HMR.

## Cara build dan deploy

```bash
npm run build                 # hasil masuk dist/
cp dist/entries/*.html .      # timpa index.html di root
cp -r dist/assets .           # timpa aset di root
cp -r dist/images .           # timpa gambar di root
```

Setelah itu wajib lewat pull request, bukan push langsung ke `main`:

```bash
git checkout -b feat/nama-batch
git add . && git commit -m "feat: ..."
git push -u origin feat/nama-batch
```

Buka PR ke `main`, tunggu review, merge manual di GitHub. hPanel Hostinger akan menarik `main` dan site `ralabs.my.id` ikut ter-update.

Detail aturannya ada di `contributing.md`. Log perubahannya ada di `engineering.md`.

## Lisensi

MIT, lihat `LICENSE`.
