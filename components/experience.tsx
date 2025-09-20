"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Freelance Data Scientist",
    company: "JKG Garments, Tiruppur",
    period: "2025",
    type: "Garment Manufacturing Company",
    achievements: [
      "Engineered automated cotton and yarn rate forecasting system using web scraping from CAI website and ML algorithms",
      "Transformed manual procurement processes, enabling data-driven cost planning and boosting operational efficiency by 40%",
      "Analyzed 4 years of historical pricing data with 1000+ daily price points, enhancing prediction accuracy by 25%",
    ],
    skills: ["Machine Learning", "Web Scraping", "Time Series Forecasting", "Data Analysis"],
  },
]

export function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <div className="text-lg text-primary font-medium">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.type}</div>
                    </div>
                    <div className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
