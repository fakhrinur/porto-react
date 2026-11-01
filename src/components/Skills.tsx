import { skillGroups } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  return (
    <Section
      id="keahlian"
      eyebrow="Keahlian"
      title="Tools yang saya gunakan sehari-hari."
      description="Kombinasi teknologi yang saya pakai untuk membangun antarmuka dari tahap desain sampai produksi."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            data-reveal
            className="group relative overflow-hidden rounded-2xl border border-line bg-ink-900/50 p-6 transition-colors hover:border-accent/40"
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/5 blur-2xl transition-opacity group-hover:bg-accent/10"
            />
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/5 text-accent">
              <group.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-base font-semibold text-white">
              {group.title}
            </h3>
            <p className="mt-1.5 text-sm text-zinc-500">{group.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line/80 bg-ink-950/60 px-2.5 py-1.5 font-mono text-[11px] text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
