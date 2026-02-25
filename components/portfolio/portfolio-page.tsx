"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { LiquidBackground } from "./liquid-background"
import { Navbar } from "./navbar"
import { SocialSidebar } from "./social-sidebar"
import { HeroSection } from "./hero-section"
import { AboutSection } from "./about-section"
import { ExperienceSection } from "./experience-section"
import { EducationSection } from "./education-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"

export function PortfolioPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="relative min-h-screen overflow-x-hidden">
        <LiquidBackground />
        <Navbar />
        <SocialSidebar />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
