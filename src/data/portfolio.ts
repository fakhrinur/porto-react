import {
  Boxes,
  Braces,
  Gauge,
  Mail,
  Palette,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'

export type IconComponent = ComponentType<{ className?: string }>

export type Social = {
  label: string
  href: string
  icon: IconComponent
}

export type Stat = {
  value: string
  label: string
}

export type Focus = {
  title: string
  description: string
  icon: LucideIcon
}

export type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

export type Project = {
  title: string
  year: string
  description: string
  tags: string[]
  demo: string
  repo: string
  googleDrive?: string
}

export type ExperienceItem = {
  period: string
  role: string
  company: string
  description: string
  highlights: string[]
}

/**
 * Ubah data di file ini untuk memperbarui isi portofolio.
 * Semua teks di halaman diambil dari sini.
 */
export const profile = {
  name: 'Fakhri Nur Majid',
  initials: 'FN',
  role: 'WEB DEVELOPER',
  headline: 'Membangun antarmuka web yang cepat, rapi, dan nyaman dipakai.',
  location: 'Indonesia',
  email: 'fakhrinm2804@gmail.com',
  availability: 'Terbuka untuk peluang baru',
  about: [
    'Saya Fakhri Nur Majid, web developer yang fokus pada pembuatan antarmuka web yang bersih, responsif, dan mudah digunakan. Saya menikmati proses mengubah desain menjadi kode yang rapi — dari layout, animasi halus, sampai detail kecil yang membuat pengalaman terasa nyaman.',
    'Saya memiliki pengalaman bekerja dengan React, TypeScript, dan Tailwind CSS. Saya percaya performa dan aksesibilitas bukan tambahan, melainkan bagian dari kualitas sebuah produk.',
    'Selain itu, saya juga memiliki pengalaman integrasi dengan API, dan database dengan backend'
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/fakhrinur', icon: GitHubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fakhri-nur-majid-93b075283/', icon: LinkedInIcon },
    { label: 'Email', href: 'mailto:fakhrinm2804@gmail.com', icon: Mail },
  ] satisfies Social[],
}

export const stats: Stat[] = [
  { value: '15+', label: 'Proyek selesai' },
  { value: '2+', label: 'Tahun pengalaman' },
  { value: '98', label: 'Skor Lighthouse' },
]

export const focusAreas: Focus[] = [
  {
    title: 'Frontend Development',
    description:
      'Membangun SPA dengan React + TypeScript, komponen reusable, dan alur state yang mudah dirawat.',
    icon: Braces,
  },
  {
    title: 'UI Implementation',
    description:
      'Menerjemahkan desain Figma menjadi antarmuka yang presisi dan tetap enak dilihat di semua ukuran layar.',
    icon: Palette,
  },
  {
    title: 'Performance & A11y',
    description:
      'Menjaga halaman tetap ringan, cepat dimuat, dan bisa digunakan oleh semua orang.',
    icon: Gauge,
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Fondasi utama dalam membangun antarmuka.',
    icon: Braces,
    items: ['React', 'TypeScript', 'JavaScript (ES2023)', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Database & Backend',
    description: 'Mengelola data dan logika di balik layar.',
    icon: Palette,
    items: [ 'Node JS', 'Express', 'PostgreSQL','SQL Server', 'REST API'],
  },
  {
    title: 'Tools & Lainnya',
    description: 'Pendukung alur kerja dan kualitas kode.',
    icon: Boxes,
    items: ['Vite', 'Git & GitHub', 'REST API', 'Node.js', 'Vitest'],
  },
]

export const projects: Project[] = [
  {
    title: 'Visualisasi Dashboard Dengan Fitur Pengelolaan Data',
    year: '2025',
    description:
      'Dashboard dengan visualisasi data interaktif menggunakan Recharts, menampilkan statistik dan tren untuk membantu pengambilan keputusan.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Microsoft SQL', 'EXPRESS'],
    demo: 'https://github.com/fakhrinur/Project-magang',
    repo: 'https://github.com/fakhrinur/Project-magang',
    googleDrive: 'https://drive.google.com/drive/folders/1qmCTRzhEWSgVHDjIxL8wV8lCZEWIaGBw?usp=drive_link',
  },
  {
    title: 'Dashboard Rumah Sakit',
    year: '2025',
    description:
      'Website dashboard untuk rumah sakit dengan 3 role yang berbeda setiap dashboardnya dan dengan fitur manajemen pasien, jadwal dokter, dan laporan kesehatan. Menggunakan React, Vite.',
      
    tags: ['React', 'Vite', 'Postgre'],
    demo: 'https://example.com',
    repo: 'https://github.com/fakhrinur/project-rs',
    googleDrive: 'https://drive.google.com/drive/folders/16ioVEaaq6PukV9oap0G7KP3vYL0GpgIu?usp=drive_link',
  },
]

export const experiences: ExperienceItem[] = [
  {
    period: '2025 — Sekarang',
    role: 'Frontend Developer',
    company: 'Freelance · Remote',
    description:
      'Membuat Dummy Project untuk portofolio pribadi, mengutamakan performa, aksesibilitas, dan pengalaman pengguna yang baik.',
    highlights: ['React + TypeScript', 'Desain responsif', 'Optimasi performa'],
  },
  {
    period: '2024 — 2025',
    role: 'Web Developer Intern',
    company: 'Direktorat Jenderal Minyak dan Gas Bumi',
    description:
      'Membangun dan merawat komponen UI untuk produk internal, berkolaborasi dengan desainer dan backend.',
    highlights: ['React', 'Node', 'REST API'],
  },
  {
    period: '2023 — 2024',
    role: 'Web Developer',
    company: 'Proyek Kampus & Komunitas',
    description:
      'Membuat website acara dan organisasi, sekaligus berbagi materi dasar web development di komunitas.',
    highlights: ['HTML & CSS', 'JavaScript', 'Kolaborasi tim'],
  },
]
