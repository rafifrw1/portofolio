# Portofolio

Starter portofolio pribadi dibangun dengan Vite + React, siap deploy ke GitHub Pages.

## 1. Install dependency

```bash
npm install
```

## 2. Jalankan lokal

```bash
npm run dev
```

Buka `http://localhost:5173`.

## 3. Isi konten kamu

- **Nama & role** → `src/components/Hero.jsx`
- **Tentang & skill** → `src/components/About.jsx`
- **Daftar project** → `src/data/projects.js`
- **Kontak (email, GitHub, LinkedIn)** → `src/components/Contact.jsx`
- **Judul tab browser** → `index.html`
- (Opsional) taruh file CV kamu di `public/cv-nama-kamu.pdf` supaya tombol "Unduh CV" di hero berfungsi.

## 4. Deploy ke GitHub Pages

1. Buat repo baru di GitHub, misalnya `portfolio`.
2. Di `vite.config.js`, ganti:
   ```js
   base: '/nama-repo-kamu/',
   ```
   dengan nama repo kamu, contoh `base: '/portfolio/'`.
   Jika kamu deploy sebagai *user page* (repo bernama `username.github.io`), pakai `base: '/'`.
3. Push project ini ke repo tersebut:
   ```bash
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA_REPO.git
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
   Ini akan build project dan push hasilnya ke branch `gh-pages`.
5. Di GitHub, buka **Settings → Pages**, pastikan source di-set ke branch `gh-pages`.
6. Situs kamu akan live di `https://USERNAME.github.io/NAMA_REPO/`.

Setiap kali update konten, cukup jalankan `npm run deploy` lagi.
