import { experiences } from '../data/portfolio'
import Section from './Section'

export default function Experience() {
  return (
    <Section
      id="pengalaman"
      eyebrow="Pengalaman"
      title="Perjalanan sejauh ini."
      description="Pengalaman yang membentuk cara saya membangun produk dan bekerja dalam tim."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {experiences.map((item) => (
          <li key={`${item.company}-${item.period}`} data-reveal className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-accent sm:-left-[39px]"
            />
            <div className="grid gap-2 sm:grid-cols-[190px_1fr] sm:gap-6">
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 sm:pt-1">
                {item.period}
              </p>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.role}{' '}
                  <span className="font-normal text-zinc-500">
                    · {item.company}
                  </span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
