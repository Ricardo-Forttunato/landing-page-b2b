import { useTranslation } from 'react-i18next'

export default function UseCases() {
  const { t } = useTranslation()
  const items = t('useCases.items', { returnObjects: true }) as Array<{
    eyebrow: string
    title: string
    description: string
    highlight: string
    definition: string
  }>

  return (
    <section id="use-cases" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">{t('useCases.title')}</h2>
        </div>
        <div className="mt-12 space-y-8">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`grid gap-6 overflow-hidden rounded-md border border-slate-200 bg-slate-50 p-5 lg:grid-cols-2 lg:p-8 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={`flex items-center ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gray">{item.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-bold text-brand-blue">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-brand-gray">{item.description}</p>
                  <div className="mt-6 inline-flex rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white">
                    {item.highlight}
                  </div>
                </div>
              </div>
              <div className={`flex items-center ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="relative min-h-[300px] w-full overflow-hidden rounded-md bg-brand-blue p-4 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_28%)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="overflow-hidden rounded-md bg-white">
                        <img
                          src={index === 0 ? 'src/assets/img-4.png' : index === 1 ? 'src/assets/img-1.png' : 'src/assets/img-2.png'}
                          alt={item.title}
                          className="h-[220px] w-full object-cover"
                        />
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                          <p className="text-sm text-white/80">{t('hero.subtitleCardOne')}</p>
                          <p className="mt-1 text-lg font-semibold">{item.highlight}</p>
                        </div>
                        <div className="rounded-2xl bg-white/12 p-4 backdrop-blur">
                          <p className="text-sm text-white/80">{t('features.product')}</p>
                          <p className="mt-1 text-lg font-semibold">{item.definition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
