import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import Section from './Section'

const inputClass =
  'w-full rounded-xl border border-line bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/15'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field: keyof typeof form) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(
      `Pesan dari ${form.name || 'website portofolio'}`,
    )
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="kontak"
      eyebrow="Kontak"
      title="Punya ide? Mari kita wujudkan."
      description="Saya selalu terbuka untuk diskusi proyek, kolaborasi, atau sekadar bertukar pikiran soal frontend."
    >
      <div
        data-reveal
        className="relative overflow-hidden rounded-3xl border border-line bg-ink-900/60 p-6 sm:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-2/10 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Hubungi saya
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-3 text-xl font-semibold text-white transition-colors hover:text-accent sm:text-2xl"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent" />
              <span className="break-all">{profile.email}</span>
            </a>

            <div className="mt-8 space-y-3 text-sm text-zinc-400">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-zinc-500" />
                {profile.location} · Remote friendly
              </p>
              <p className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line text-zinc-400 transition-colors hover:border-accent/40 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Nama
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Nama kamu"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="kamu@email.com"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-zinc-400">
                Pesan
              </span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update('message')}
                placeholder="Ceritakan sedikit tentang proyek atau ide kamu..."
                className={`${inputClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent"
            >
              Kirim Pesan
              <Send className="h-4 w-4" />
            </button>
            <p className="text-center text-[11px] text-zinc-600">
              Tombol ini akan membuka aplikasi email kamu.
            </p>
          </form>
        </div>
      </div>
    </Section>
  )
}
