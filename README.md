# Portofolio — Fakhri Nur Majid

Website portofolio pribadi yang dibangun dengan **React 19 + TypeScript + Vite + Tailwind CSS v4**.
Desain gelap minimalis: hero dengan monogram, statistik, area fokus, keahlian, proyek, pengalaman, dan form kontak.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Perintah lain:

```bash
npm run build    # build produksi ke folder dist/
npm run preview  # pratinjau hasil build
npm run lint     # oxlint
```

## Struktur

```
src/
├─ components/     # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
├─ data/
│  └─ portfolio.ts # SEMUA konten: nama, bio, skill, proyek, pengalaman, kontak
├─ hooks/          # useReveal (animasi scroll), useActiveSection (menu aktif)
├─ App.tsx
└─ index.css       # tema Tailwind, warna, animasi reveal
```

## Yang perlu diganti

Semua konten ada di `src/data/portfolio.ts`:

- `profile.email` → email asli kamu (saat ini placeholder `halo@fakhrinurmajid.dev`)
- `profile.socials` → URL GitHub dan LinkedIn asli
- `profile.about` → cerita singkat tentang kamu
- `stats`, `focusAreas`, `skillGroups`, `projects`, `experiences` → sesuaikan dengan pengalaman nyata

Foto profil: di `src/components/Hero.tsx` ada blok monogram `FN`.
Ganti dengan foto kamu:

```tsx
<img
  src="/foto.jpg"
  alt="Fakhri Nur Majid"
  className="h-full w-full object-cover"
/>
```

Taruh foto di folder `public/`.

## Deploy

Paling mudah lewat [Vercel](https://vercel.com) atau [Netlify](https://netlify.com):

1. Push repo ini ke GitHub.
2. Import repo di Vercel/Netlify.
3. Framework preset: **Vite** · Build command: `npm run build` · Output: `dist`.

Bisa juga GitHub Pages dengan menambahkan `base: '/nama-repo/'` di `vite.config.ts`.

## Lisensi

Bebas dipakai dan dimodifikasi untuk keperluan pribadi.
