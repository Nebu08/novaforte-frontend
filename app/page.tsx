"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TechnologySection } from "@/components/sections/technology-section"
import { QualitySection } from "@/components/sections/quality-section"
import { ProcessSection } from "@/components/sections/process-section"
import { QuotesSection } from "@/components/sections/quotes-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <QualitySection />
      <ProcessSection />
      <QuotesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
