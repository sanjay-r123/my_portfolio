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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
              <a href="https://github.com/Sanjay1905" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/sanjay-r" target="_blank" rel="noopener noreferrer">
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
