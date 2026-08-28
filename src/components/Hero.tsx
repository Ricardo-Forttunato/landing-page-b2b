import { useTranslation } from 'react-i18next'
import { ProductsIcon } from './FeatureIcons'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="bg-brand-blue pt-24 text-white lg:pt-16 mt-8">
      <div className="mx-auto my-0 grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/75">{t('hero.eyebrow')}</p>
          <h1 className="mt-5 whitespace-pre-line text-5xl font-bold leading-[1.03] tracking-tight sm:text-6xl xl:text-7xl">{t('hero.title')}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/88">{t('hero.description')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cta" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:bg-white/90">
              {t('hero.contactCta')}
            </a>
            <a href="#features" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {t('hero.featureCta')}
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <div className="relative grid gap-4"> 
            <div className="overflow-hidden bg-transparent text-slate-900 w-full h-full">
              <div className="flex items-center justify-center my-2">
                <ProductsIcon className="h-40 w-40 text-gray-100 hover:text-white"/>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 border border-white/15 bg-white/8 p-5 shadow-2xl shadow-black/20 rounded-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_70%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.1),transparent_48%)]" />
              <div className="overflow-hidden rounded-md bg-white text-slate-900 p-1">
                <img
                  src="src/assets/easydashboard-chart-drag-and-drop.png"
                  alt="Hand holding an ID plate"
                  className="h-44 w-full object-cover rounded-md"
                />
                <div className="p-5">
                  <p className="text-md font-medium text-brand-gray">{t('hero.subtitleCardOne')}</p>
                  <p className="mt-2 text-2xl font-bold text-brand-blue">{t('hero.valueCardOne')}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-md bg-white text-slate-900 p-1">
                <img
                  src="src/assets/easydashboard-main-screen.png"
                  alt="Hand holding an ID plate"
                  className="h-44 w-full object-cover rounded-md"
                />
                <div className="p-5">
                  <p className="text-md font-medium text-brand-gray">{t('hero.subtitleCardTwo')}</p>
                  <p className="mt-2 text-2xl font-semibold text-brand-blue">{t('hero.valueCardTwo')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
