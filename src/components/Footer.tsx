import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="text-xs text-zinc-500">
            © {year} · Dibuat dengan React &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-2">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-zinc-400 transition-colors hover:border-accent/40 hover:text-white"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#beranda"
            aria-label="Kembali ke atas"
            className="ml-1 grid h-9 w-9 place-items-center rounded-lg bg-white text-ink-950 transition-colors hover:bg-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
