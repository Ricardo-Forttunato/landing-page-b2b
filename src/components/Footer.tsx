import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const links = t('footer.links', { returnObjects: true }) as string[]
  const routes = ['#features', '#use-cases', '#about', '#video-player']

  return (
    <footer id="footer" className="bg-brand-blue py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">SUA MARCA</span>
            <span className="text-lg font-semibold text-white/70">B2B</span>
          </div>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
            {t('footer.description')}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">{t('footer.linksTitle')}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
            {links.map((link) => (
              <a key={link} href={routes[links.indexOf(link)]} className="transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">{t('footer.socialTitle')}</p>
          <div className="mt-3 flex gap-4 text-sm text-white/85">
            <a href="https://www.linkedin.com/company/[youCcompanyName]/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href="https://www.youtube.com/@[youCcompanyName]" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">YouTube</a>
            <a href="https://www.instagram.com/[youCcompanyName]" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
