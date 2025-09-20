"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Dark mode background */}
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Light mode background */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">Sanjay R</h1>
            <h2 className="text-xl lg:text-2xl text-primary font-medium">AI/ML Engineer & Data Scientist</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build intelligent systems using machine learning, deep learning, and large language models. Passionate
              about creating AI solutions that solve real-world problems and drive innovation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection("#projects")} size="lg" className="bg-primary hover:bg-primary/90">
              View Projects
            </Button>
            <Button onClick={() => scrollToSection("#contact")} variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sanjay-r123" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/sanjay-r-2a0b13186" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://kaggle.com/sanjay22bce10470" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:sanjay.r14132@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} delay-300`}>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-mono text-primary">{"{ AI }"}</div>
                <div className="text-sm text-muted-foreground font-mono">
                  Building the future with intelligent systems
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
