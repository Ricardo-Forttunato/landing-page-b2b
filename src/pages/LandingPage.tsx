import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../i18n'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    document.documentElement.lang = language
    i18n.changeLanguage(language)
  }, [i18n, language])

  return (
    <main className="min-h-screen bg-brand-background text-slate-900">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <div id="content">
        <Hero />
        <Features />
        <UseCases />
        <About />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
