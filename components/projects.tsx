"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Award, Download } from "lucide-react"

const projects = [
  {
    title: "Multi-Modal PII Redaction System",
    period: "2025 – Present",
    description:
      "Architected hybrid AI solution using YOLO and LLaMA 3.2 1B, achieving 95% PII detection accuracy across PDFs, images, and CSVs. Trained on 700+ synthetic documents, streamlining manual redaction time by 80%.",
    achievements: [
      "95% PII detection accuracy across multiple formats",
      "80% reduction in manual redaction time",
      "30% boost in processing efficiency",
    ],
    technologies: ["YOLO", "LLaMA 3.2", "EasyOCR", "FastAPI", "Computer Vision"],
    links: [
      { type: "huggingface", url: "https://huggingface.co/Sanjay1905/The_PII_Detection_System", label: "Model" },
      {
        type: "dataset",
        url: "https://huggingface.co/datasets/Sanjay1905/pii_dataset_for_training_llm",
        label: "Dataset",
      },
    ],
    featured: true,
  },
  {
    title: "Time Series Power Estimation Model",
    period: "2025",
    description:
      "Developed innovative forecasting system for solar power plant, optimizing power loss attribution accuracy by 35%. Secured 2nd place in Zelestra hackathon competing against 200+ participants.",
    achievements: [
      "35% improvement in power loss attribution accuracy",
      "2nd place in Zelestra hackathon (200+ participants)",
      "Team leadership experience",
    ],
    technologies: ["Time Series Analysis", "Machine Learning", "Solar Energy", "Forecasting"],
    links: [],
    award: "2nd Place - Zelestra X AWS ML Ascend Challenge",
  },
  {
    title: "LawLLama",
    period: "2024",
    description:
      "Fine-tuned LLM processing 8K+ legal documents scraped from lawrato.com, achieving 85% query accuracy. Deployed on Hugging Face with 200+ downloads, reducing legal research time by 60%.",
    achievements: [
      "85% query accuracy on legal documents",
      "200+ downloads on Hugging Face",
      "60% reduction in legal research time",
    ],
    technologies: ["LLM Fine-tuning", "Web Scraping", "NLP", "Legal Tech"],
    links: [
      { type: "huggingface", url: "https://huggingface.co/Sanjay1905/lawlama2", label: "Model" },
      { type: "dataset", url: "https://huggingface.co/datasets/Sanjay1905/lawdata", label: "Dataset" },
    ],
  },
  {
    title: "HealthLLama",
    period: "2024",
    description:
      "Specialized language model for healthcare applications, trained on medical datasets to provide accurate health-related information and assistance.",
    achievements: ["Specialized healthcare AI model", "Medical dataset training", "Healthcare information accuracy"],
    technologies: ["LLM", "Healthcare AI", "Medical NLP"],
    links: [{ type: "huggingface", url: "https://huggingface.co/Sanjay1905/healthllama", label: "Model" }],
  },
  {
    title: "SkinFixLLama",
    period: "2024",
    description:
      "AI model focused on dermatology and skin condition analysis, providing intelligent insights for skin health applications.",
    achievements: ["Dermatology-focused AI model", "Skin condition analysis", "Medical AI specialization"],
    technologies: ["Computer Vision", "Medical AI", "Dermatology"],
    links: [{ type: "huggingface", url: "https://huggingface.co/Sanjay1905/skinfixllama", label: "Model" }],
  },
  {
    title: "Skin Disease Classification with DINOv2",
    period: "2024",
    description:
      "Implemented classification system achieving 78% accuracy across 23 disease categories using self-supervised learning. Processed 10K+ medical images from DermNet dataset.",
    achievements: [
      "78% accuracy across 23 disease categories",
      "10K+ medical images processed",
      "50% acceleration in diagnostic analysis time",
    ],
    technologies: ["DINOv2", "Self-supervised Learning", "Computer Vision", "Medical Imaging"],
    links: [
      { type: "kaggle", url: "https://www.kaggle.com/code/sanjay22bce10470/dermnet-dinov2", label: "Notebook" },
      { type: "dataset", url: "https://huggingface.co/datasets/Sanjay1905/obesityimagedataset", label: "Dataset" },
    ],
  },
]

export function Projects() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case "huggingface":
        return <ExternalLink className="h-4 w-4" />
      case "github":
        return <Github className="h-4 w-4" />
      case "kaggle":
        return <ExternalLink className="h-4 w-4" />
      case "dataset":
        return <Download className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Key Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        {project.featured && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                        )}
                      </div>
                      {project.award && (
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Award className="h-4 w-4" />
                          {project.award}
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full w-fit">
                        {project.period}
                      </div>
                    </div>

                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, i) => (
                          <Button key={i} variant="outline" size="sm" asChild>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              {getIcon(link.type)}
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                        {tech}
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
