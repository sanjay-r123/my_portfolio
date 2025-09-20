"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate AI/ML engineer currently pursuing my Bachelor's in Computer Science at VIT Bhopal
                University. With a strong foundation in machine learning, deep learning, and natural language
                processing, I specialize in building intelligent systems that solve complex real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as a Freelance Data Scientist at JKG Garments, where I've engineered automated
                forecasting systems that have improved operational efficiency by 40%. My expertise spans from developing
                custom LLMs to implementing computer vision solutions and time-series forecasting models.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm particularly interested in the intersection of AI and practical applications, having published
                research papers and created multiple open-source datasets that benefit the ML community.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-foreground">Bachelor of Technology</div>
                      <div className="text-sm text-muted-foreground">Computer Science & Engineering</div>
                      <div className="text-sm text-primary">VIT Bhopal University • CGPA: 8.73/10</div>
                      <div className="text-sm text-muted-foreground">2022 - 2026</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Location</h3>
                  <div className="text-muted-foreground">
                    <div>Tiruppur, Tamil Nadu</div>
                    <div className="text-sm">Available for remote work</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
