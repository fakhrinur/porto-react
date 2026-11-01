import { ArrowDownRight, MapPin } from 'lucide-react'
import { profile, stats } from '../data/portfolio'

const [firstName = '', secondName = '', ...rest] = profile.name.split(' ')

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 sm:pt-40">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
          <div data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {firstName} {secondName}
              <br />
              <span className="text-gradient">{rest.join(' ')}</span>
            </h1>

            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-zinc-400">
              <span className="text-accent">{profile.role}</span>
              <span className="text-line">/</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {profile.headline} Saya menggabungkan detail desain dengan kode
              yang bersih agar produk terasa ringan dan menyenangkan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyek"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent"
              >
                Lihat Proyek
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-white/5"
              >
                Hubungi Saya
              </a>
              <div className="ml-1 flex items-center gap-1">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <social.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-zinc-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/20 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink-900/80 p-2 backdrop-blur">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-ink-800 to-ink-950">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-grid opacity-40"
                />

                <img
                  src="/foto-fakhri.png"
                  alt="Fakhri Nur Majid"
                  className="aspect-[4/5] w-full object-cover"
                />

                <div className="relative flex items-center justify-between border-t border-line/80 px-5 py-4">
                  <span className="font-mono text-[11px] text-zinc-500">
                    {'<'}open to work{' /'}
                    {'>'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-2/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-16 hidden rounded-xl border border-line bg-ink-800/90 px-3 py-2 text-xs font-medium text-zinc-200 shadow-xl shadow-black/40 backdrop-blur sm:block">
              React &amp; TypeScript
            </div>
            <div className="absolute -right-4 bottom-24 hidden rounded-xl border border-line bg-ink-800/90 px-3 py-2 text-xs font-medium text-zinc-200 shadow-xl shadow-black/40 backdrop-blur sm:block">
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
