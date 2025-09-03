import FloatingNav from '@/components/FloatingNav'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <FloatingNav />
      <HeroSection />
      <div className="h-32" />
      <AboutSection />
      <div className="h-32" />
      <WorkSection />
      <div className="h-32" />
      <ServicesSection />
      <div className="h-32" />
      <ContactSection />
    </main>
  )
}
