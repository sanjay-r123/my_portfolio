"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import VantaBackground from "@/components/vanta-background"
import { ThemeProvider, useTheme } from "@/components/theme-toggle"

function HomeContent() {
  const { isDark } = useTheme()

  return (
    <>
      {/* Vanta background - positioned behind everything */}
      <VantaBackground isDark={isDark} />
      
      {/* Main content - transparent background to let Vanta show through */}
      <main className="min-h-screen relative">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  )
}