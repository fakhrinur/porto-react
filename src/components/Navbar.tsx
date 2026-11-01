import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'keahlian', label: 'Keahlian' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'sertifikat', label: 'Sertifikat' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'kontak', label: 'Kontak' },
]

const sectionIds = ['beranda', ...links.map((link) => link.id)]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line/80 bg-ink-950/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#beranda"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-extrabold text-ink-950">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold text-white">
            Fakhri<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                active === link.id
                  ? 'bg-white/5 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#kontak"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent md:inline-flex"
          >
            Mari Bicara
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line/80 bg-ink-950/95 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 text-base transition-colors ${
                  active === link.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-ink-950"
            >
              Mari Bicara
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
