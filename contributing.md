# Kontribusi

Repo ini auto-deploy ke shared hosting Hostinger. Merge ke `main` langsung tayang di `https://ralabs.my.id/`. Karena itu aturannya ketat.

## Wajib lewat pull request

- Dilarang push langsung ke `main`.
- Satu pull request untuk satu batch kerja. Jangan menumpuk banyak perubahan dalam satu PR.
- Setiap PR wajib mengisi `engineering.md` dengan satu entri. Tanpa entri itu, PR belum boleh di-merge.
- Tunggu review Bang Rob, lalu merge manual lewat GitHub. Pilihan squash atau merge biasa terserah Bang Rob.
- Setelah merge, cek hPanel Hostinger ikut menarik `main` dan site ikut ter-update.

## Hasil build wajib ikut ter-commit di root repo

hPanel auto-deploy menarik isi **folder root repo** (`index.html`, `assets/`, `images/`, dan file statis lain) ke server. Hostinger **tidak menjalankan build** — jadi kalau source berubah, hasil build-nya harus dipindah ke root dan ikut di-commit, kalau tidak PR merge tetap menayangkan versi lama.

Urutan wajib untuk tiap PR yang mengubah source:

1. `npm run build` sampai sukses (output ada di `dist/`).
2. Copy hasil build ke root:
   - `cp dist/entries/index.html index.html`
   - `cp dist/assets/*.js dist/assets/*.css assets/` (hapus dulu bundle lama di `assets/`)
   - `cp -r dist/images/* images/`
   - `cp dist/404.html dist/robots.txt dist/sitemap.xml dist/humans.txt .`
3. Pastikan `index.html` di root menunjuk bundle yang **benar-benar ada** di `assets/` (nama file case-sensitive, cek huruf besar/kecilnya).
4. Commit semua perubahan termasuk hasil build. Jangan `.gitignore` hasil build di root.
5. Setelah merge, verifikasi di production: bundle yang diload sesuai hash build lokal. `dist/` tetap boleh di-gitignore (itu hasil antara, bukan yang ditarik hPanel).

## Isi deskripsi PR

Tulis apa yang berubah dan bukti tesnya:

- Bagian mana yang selesai, file apa saja yang berubah
- Dev server jalan di port 5015, tidak ada error di console
- Build sukses, `npm run build` tidak error
- Cek lebar 360, 768, 1280, tidak ada scroll horizontal
- Cek kontras teks lolos
- Setiap tombol dan link ditekan beneran, tidak ada yang mati

## Aturan coding

- Tulis code yang sederhana dan mudah dipahami pemula. Repo ini memakai pola reverse engineering, jadi jangan over-abstract.
- Ikuti struktur yang ada dulu. Kalau mau menambah pola baru, jelasankan alasannya di PR.
- Komentar kode hanya untuk hal yang tidak terbaca dari codenya sendiri. Komentar yang cuma mengulang baris di bawahnya dihapus.
- Wajib responsive di mobile, tablet, dan desktop.
- Wajib isi title, meta description, Open Graph, dan JSON-LD untuk tiap halaman yang tampil.
- Tidak ada tombol dan link yang tidak punya tujuan. Kalau belum jadi, tulis Coming Soon, jangan dikasih link mati.

## Batasan stack

Repo ini jalan di shared hosting Hostinger. Yang boleh: file statis hasil build React, PHP 8.3 native, MySQL lewat phpMyAdmin.

Yang tidak boleh masuk ke portal akar:

- Node.js sebagai server jalan terus
- PostgreSQL, Docker, Supabase, n8n, Tailscale Funnel
- Composer atau framework PHP berat

Kalau ada ide yang butuh itu, taruh di subdomain sendiri yang hostingnya memang mendukung, jangan dicampur ke sini.

## Aset

`../assets/` adalah folder referensi yang tidak ikut ter-deploy. File yang dipakai wajib dicopy dulu ke `public/images/`. Code tidak boleh menunjuk langsung ke `../assets/`.
