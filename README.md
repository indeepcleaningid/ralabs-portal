# RaLabs

Portal di `https://ralabs.my.id/`. Satu halaman berisi aplikasi, situs, dan alat yang saya bangun, plus alamat lain untuk portofolio yang sama. Semua karya berikutnya hidup di subdomain `*.ralabs.my.id`.

Repo ini disambung ke hPanel Hostinger. Yang tayang adalah isi `public_html/`, bukan server Node.

## Menjalankan

```bash
cd public_html
npm install
npm run dev
```

Dev server ada di `http://localhost:5015/`.

## Build

```bash
npm run build
cp dist/entries/*.html .
cp -r dist/assets .
cp -r dist/images .
```

Hasil build (`index.html`, `assets/`, `images/`) disalin ke root repo ini. File-file itu hasil mesin, jangan diedit langsung. Sumbernya ada di `entries/` dan `src/`.

## Perubahan

Semua perubahan masuk lewat pull request ke `main`. Merge ke `main` langsung live, karena Hostinger menarik `main` otomatis. Aturan lengkapnya ada di `contributing.md`.

## Isi singkat

- Tema terang dan gelap, ikut `prefers-color-scheme`, pilihan disimpan di `localStorage`. Navbar tetap berwarna kertas di kedua tema.
- Gerbang di layar pertama: kubus geometry Three.js dan satu tombol `Masuk`.
- Sembilan proyek di bagian Collection: tumpukan kartu di layar lebar, daftar di layar sempit.
- Tanpa backend. Kontak lewat `mailto:` dan WhatsApp.
- Analytics: Google Analytics 4 dengan ID `G-QCTML33T41`.

Kalau nanti perlu backend, di shared hosting ini hanya PHP 8.3 native dan MySQL. Tanpa Composer, tanpa Docker.

## Aset

Berkas logo, `og-banner.webp`, dan `mascot-enjoy.svg` ada di `public/images/`. Folder `../assets/` di luar repo hanya referensi; code tidak menunjuk ke sana.

## Lisensi

MIT. Lihat `LICENSE`.
