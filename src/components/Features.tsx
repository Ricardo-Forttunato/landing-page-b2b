import { useTranslation } from 'react-i18next'

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as Array<{
    title: string
    description: string
    metric: string
    accent: string
  }>

  return (
    <section id="features" className="bg-brand-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gray">{t('features.product')}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">{t('features.title')}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const imageByIndex = ['src/assets/img-1.png', 'src/assets/img-4.png', 'src/assets/img-2.png', 'src/assets/img-3.png'][index]
            return (
              <article key={item.title} className="overflow-hidden rounded-sm border border-white bg-white shadow-sm">
                <div className={`flex h-44 items-end justify-between bg-gradient-to-br ${item.accent} p-4`}>
                  <img
                    src={imageByIndex}
                    alt={item.title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-gray">{item.metric}</p>
                  <h3 className="text-lg font-semibold text-brand-blue">{item.title}</h3>
                  <p className="text-sm leading-6 text-brand-gray">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
        <div className="mt-12 flex flex-col justify-center items-center w-full h-full">
          <p className="hidden md:block text-sm font-semibold mb-12 uppercase tracking-[0.24em] text-areco-gray">{t('features.institucionalVideo')}</p>
          <iframe src="https://www.youtube.com/embed/PKHqH4SNhtA?si=tSww00XiZsAM3Q88" title="Company presentation" id="video-player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="hidden md:block h-[315px] md:w-[90%] md:h-[500px] lg:w-[80%] rounded-3xl scroll-mt-24">
          </iframe>
        </div>
      </div>
    </section>
  )
}
