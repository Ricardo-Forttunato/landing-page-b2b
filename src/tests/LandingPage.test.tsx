import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

describe('B2B landing page template', () => {
  it('renders the full landing page', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Transform your digital ecosystem management/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Everything you need to scale your business/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Solutions engineered for business growth/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Technology built to propel your business/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ready to elevate your digital presence?/i })).toBeInTheDocument()
  })

  it('switches the language from the navbar', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('switch', { name: /Language/i }))

    expect(screen.getByRole('heading', { name: /Transforme a gestão do seu ecossistema digital/i })).toBeInTheDocument()
  })

  it('renders the navbar controls', () => {
    render(<Navbar language="en" onLanguageChange={() => undefined} />)

    expect(screen.getByRole('navigation', { name: /Main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders the hero call to action', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Talk to specialists/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /See features/i })).toBeInTheDocument()
  })

  it('renders the feature cards', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: /Product Hub/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Advanced Security/i })).toBeInTheDocument()
  })
  
  it('renders the institutional video', () => {
    const url = 'https://www.youtube.com/embed/PKHqH4SNhtA?si=tSww00XiZsAM3Q88'; // Must be changed for the institutional video URL in the future
    render(<Features />)

    const iframe = screen.getByTitle(/Company presentation/i)

    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', url)
  })

  it('renders the use case blocks', () => {
    render(<UseCases />)

    expect(screen.getByRole('heading', { name: /Centralized management for complex operations/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Automated onboarding for new users/i })).toBeInTheDocument()
  })

  it('renders about, cta and footer sections', () => {
    render(
      <>
        <About />
        <CTA />
        <Footer />
      </>
    )

    expect(screen.getByRole('heading', { name: /Technology built to propel your business/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ready to elevate your digital presence?/i })).toBeInTheDocument()
    expect(screen.getByText(/Institutional links/i)).toBeInTheDocument()
  })
})
