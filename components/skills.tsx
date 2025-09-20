"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "SQL", "R Programming"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "GANs", "Transformers", "LLMs", "Computer Vision"],
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Web Scraping", "Data Visualization", "Statistical Modeling"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Services", "IBM Cloud", "Git/GitHub", "Docker (basics)"],
  },
  {
    title: "Specialized Skills",
    skills: ["Time-Series Forecasting", "Natural Language Processing", "Deep Learning", "MLOps"],
  },
]

const certifications = [
  "Networking Fundamentals (Google) - Coursera",
  "Web Development (Johns Hopkins) - Coursera",
  "NPTEL Cloud Computing",
  "Marketing Analytics (NPTEL)",
  "IBM Cloud & GenAI Certifications",
  "AI Certification (IITM AI Club)",
]

const achievements = [
  "Winner of 2nd place in Zelestra X AWS ML Ascend Challenge hackathon",
  "Cleared ideation phase of Privacy – Trust by Design hackathon by NASSCOM",
  "Author of 3 research papers: 1 published, 2 accepted into Cambridge book chapter",
  "Core Member, Eureka Club - leading innovative research initiatives",
  "PIILlama: 500+ downloads on Hugging Face; other LLM models: 200+ downloads each",
  "Created and maintained 30+ datasets on Kaggle and Hugging Face with 160+ projects/notebooks",
]

export function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Skills & Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
                <div className="space-y-6">
                  {skillCategories.map((category, index) => (
                    <Card key={index} className="p-6 bg-card border-border">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">{category.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, i) => (
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

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                <Card className="p-6 bg-card border-border">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm">{cert}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Key Achievements</h3>
                <Card className="p-6 bg-card border-border">
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Languages</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">English</span>
                      <span className="text-sm text-primary">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tamil</span>
                      <span className="text-sm text-primary">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hindi</span>
                      <span className="text-sm text-primary">Speaking</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kannada</span>
                      <span className="text-sm text-primary">Basic</span>
                    </div>
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
