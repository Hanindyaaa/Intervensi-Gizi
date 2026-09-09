# Hosting Makan Ceria sebagai Static Website

Website ini **100% frontend** (React + Vite). Semua materi, kuis, tabel AKG, dan
data profil anak berada di `src/data/content.ts` dan React Context (state sesi),
sehingga tidak ada satu pun request ke backend/API. Folder `backend/` di repo
hanya sisa template dan **tidak diperlukan** untuk menjalankan website.

## Build lokal

```bash
cd frontend
npm install
npm run build        # hasil: frontend/dist/
npm run preview      # cek hasil build di http://localhost:4173
```

`dist/` berisi `index.html`, `404.html` (fallback SPA untuk GitHub Pages),
`_redirects` (fallback SPA untuk Netlify/Cloudflare Pages), `.nojekyll`, dan `assets/`.

## Base path (penting untuk GitHub Pages)

| Tempat hosting                                   | Nilai `VITE_BASE_PATH`     |
| ------------------------------------------------ | -------------------------- |
| Netlify, Vercel, Cloudflare Pages, custom domain | `/` (default, tidak perlu diisi) |
| GitHub Pages `https://<user>.github.io/<repo>/`  | `/<repo>/` contoh `/balita-belajar-gizi/` |
| GitHub Pages `https://<user>.github.io/` (repo bernama `<user>.github.io`) | `/` |

Contoh build untuk GitHub Pages project site:

```bash
VITE_BASE_PATH=/balita-belajar-gizi/ npm run build
```

Router sudah memakai `basename={import.meta.env.BASE_URL}`, jadi semua route
(`/kuis`, `/materi/:id`, dst.) otomatis mengikuti base path.

## Deploy otomatis ke GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` sudah disiapkan:

1. Push repo ke GitHub (branch `main` atau `master`).
2. Buka **Settings -> Pages -> Build and deployment -> Source**, pilih **GitHub Actions**.
3. Setiap push akan otomatis build dan deploy ke `https://<user>.github.io/<repo>/`.

Workflow otomatis mengisi `VITE_BASE_PATH=/<nama-repo>/`. Jika memakai custom
domain, ubah nilainya menjadi `/` di file workflow.

## Deploy manual (upload folder)

Jalankan `npm run build`, lalu upload isi folder `dist/` ke Netlify Drop,
Cloudflare Pages, Vercel, Firebase Hosting, atau server static apa pun.
Pastikan hosting mengarahkan semua path yang tidak ditemukan ke `index.html`
(sudah ditangani `_redirects` / `404.html` untuk platform umum).

## Variabel lingkungan opsional

| Variabel                   | Fungsi                                              |
| -------------------------- | --------------------------------------------------- |
| `VITE_BASE_PATH`           | Base path publik (lihat tabel di atas)              |
| `DISABLE_VISUAL_EDITS`     | `true` untuk melewati plugin dev Emergent (opsional) |
| `DISABLE_EMERGENT_OVERLAY` | `true` untuk melewati overlay dev Emergent (opsional) |

Kedua plugin Emergent hanya dipakai saat development; jika paketnya tidak
terpasang, build tetap berjalan normal.
