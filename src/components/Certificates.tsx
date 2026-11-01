import { Award, ExternalLink } from 'lucide-react'
import { GoogleDriveIcon } from './BrandIcons'
import Section from './Section'

export type Certificate = {
  title: string
  issuer: string
  year: string
  description: string
  link: string
}

export const certificates: Certificate[] = [
  {
    title: 'Kumpulan Sertifikat & Penghargaan',
    issuer: 'Sertifikasi & Pelatihan',
    year: '2025',
    description: 'Dokumentasi dan arsip sertifikat keahlian, pelatihan, serta penghargaan di bidang pengembangan web dan teknologi.',
    link: 'https://drive.google.com/drive/folders/1Ow4cNW9_IS_gJypkppJUoWxzT9bPD_Rq?usp=sharing',
  },
]

export default function Certificates() {
  return (
    <Section
      id="sertifikat"
      eyebrow="Sertifikat"
      title="Sertifikat & Kredensial."
      description="Dokumentasi resmi pencapaian dan pelatihan yang pernah saya ikuti."
    >
      <div className="grid gap-4 md:grid-cols-1 max-w-2xl">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            data-reveal
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-ink-900"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-zinc-500">
                {cert.year} · {cert.issuer}
              </span>
              <div className="flex items-center gap-1">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Buka ${cert.title}`}
                  className="grid h-9 w-9 place-items-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <GoogleDriveIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
              {cert.title}
            </h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">
              {cert.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <GoogleDriveIcon className="h-4 w-4" />
                Buka Google Drive
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
