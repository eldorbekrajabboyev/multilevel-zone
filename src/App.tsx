import { useDarkMode } from './hooks/useDarkMode'
import { ParticleBackground } from './components/ui/ParticleBackground'
import { CursorGlow } from './components/ui/CursorGlow'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { BackToTop } from './components/layout/BackToTop'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { WhyChoose } from './components/sections/WhyChoose'
import { About } from './components/sections/About'
import { Courses } from './components/sections/Courses'
import { CEFRPreparation } from './components/sections/CEFRPreparation'
import { Teachers } from './components/sections/Teachers'

import { Testimonials } from './components/sections/Testimonials'
import { Gallery } from './components/sections/Gallery'
import { Branches } from './components/sections/Branches'
import { OnlineLearning } from './components/sections/OnlineLearning'
import { FAQ } from './components/sections/FAQ'
import { CertificateShowcase } from './components/sections/CertificateShowcase'
import { CTABanner } from './components/sections/CTABanner'
import { Contact } from './components/sections/Contact'

export default function App() {
  const { theme, dark, toggle } = useDarkMode()

  return (
    <>
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar theme={theme} dark={dark} toggleDark={toggle} />

      <main>
        <Hero />
        <WhyChoose />
        <About />
        <Courses />
        <CEFRPreparation />
        <CertificateShowcase />
        <Teachers />

        <Testimonials />
        <Gallery />
        <Branches />
        <OnlineLearning />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
