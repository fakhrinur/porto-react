import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon, GoogleDriveIcon } from './BrandIcons'
import { projects } from '../data/portfolio'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="proyek"
      eyebrow="Proyek"
      title="Beberapa hal yang sudah saya bangun."
      description="Contoh proyek yang menampilkan cara saya bekerja: dari struktur komponen, detail interaksi, sampai performa."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            data-reveal
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-900"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-zinc-500">
                {String(index + 1).padStart(2, '0')} / {project.year}
              </span>
              <div className="flex items-center gap-1">
                {project.googleDrive && (
                  <a
                    href={project.googleDrive}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Google Drive ${project.title}`}
                    className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <GoogleDriveIcon className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Repositori ${project.title}`}
                  className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Demo ${project.title}`}
                  className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line/80 bg-ink-950/60 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.googleDrive && (
                <a
                  href={project.googleDrive}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  <GoogleDriveIcon className="h-4 w-4" />
                  Google Drive
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Repo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-8">
        <a
          href="https://github.com/fakhrinur"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" />
          Lihat lebih banyak di GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </Section>
  )
}
