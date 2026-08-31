import { useTranslation } from 'react-i18next'

type NavbarProps = {
  language: string
  onLanguageChange: (language: string) => void
}

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const { t } = useTranslation()

  return (
    <header className="relative inset-x-0 top-0 z-50 bg-brand-blue">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Página inicial"
        >
          <img
            src="/image/easydashboardTitle.png"
            alt="easydashboard logotipo"
            loading="lazy"
            width="260"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          <a
            href="#features"
            className="rounded px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            {t("nav.products")}
          </a>
          <a
            href="#use-cases"
            className="rounded px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            {t("nav.solutions")}
          </a>
          <a
            href="#about"
            className="rounded px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            {t("nav.customers")}
          </a>
          <a
            href="#footer"
            className="rounded px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            {t("nav.institutional")}
          </a>
        </nav>
        <div className="flex justify-end items-center gap-2">
          <span className="text-white/70 text-sm">
            {t("language.portuguese")}
          </span>
          <button
            id="language-switch"
            type="button"
            role="switch"
            aria-checked={language === "pt"}
            aria-label={t("language.label")}
            onClick={() => onLanguageChange(language === "pt" ? "en" : "pt")}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 ${language === "en" ? "bg-white/30" : "bg-white/10"}`}
          >
            <span className="sr-only">{t("language.label")}</span>
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                language === "en" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-white/70 text-sm">{t("language.english")}</span>
        </div>
      </div>
    </header>
  );
}
