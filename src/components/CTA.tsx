import { useTranslation } from 'react-i18next'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section id="cta" className="bg-brand-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-md border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-gray">{t('cta.highlight')}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">{t('cta.title')}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-brand-gray">{t('cta.description')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:contato@suaempresa.com" className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95">
              {t('cta.primaryCta')}
            </a>
            <a href="#features" className="rounded-md border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white">
              {t('cta.secondaryCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
