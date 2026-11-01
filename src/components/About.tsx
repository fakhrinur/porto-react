import { focusAreas, profile } from '../data/portfolio'
import Section from './Section'

export default function About() {
  return (
    <Section
      id="tentang"
      eyebrow="Tentang"
      title="Developer yang peduli pada detail kecil."
      description="Bagi saya, antarmuka yang baik bukan hanya soal tampilan tapi tentang seberapa mudah orang menggunakannya."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-reveal className="space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-zinc-400">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-ink-900/60 px-3 py-1.5 font-mono text-[11px] text-zinc-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div data-reveal className="space-y-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-line bg-ink-900/50 p-5 transition-colors hover:border-accent/40 hover:bg-ink-900"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-accent transition-colors group-hover:bg-accent/10">
                  <area.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
