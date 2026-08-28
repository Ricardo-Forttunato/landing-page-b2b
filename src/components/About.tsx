import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  const points = t('about.points', { returnObjects: true }) as string[]

  return (
    <section id="about" className="bg-brand-blue py-20 text-white sm:py-24">
      <div className="mx-auto flex flex-col max-w-7xl gap-10 px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">{t('about.highlight')}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('about.title')}</h2>
          <p className="mt-6 text-lg leading-8 text-white/88">{t('about.description')}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point} className="rounded-md border border-white/15 bg-white/10 p-5 backdrop-blur">
              {/* <p className="text-sm uppercase tracking-[0.24em] text-white/70">Value</p> */}
              <p className="mt-2 text-xl font-semibold">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
