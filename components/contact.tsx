"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export function Contact() {
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

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleStartConversation = () => {
    const subject = encodeURIComponent("Project Inquiry - Let's Collaborate!")
    const body = encodeURIComponent(`Hi Sanjay,

I'm interested in discussing a potential project collaboration. I found your portfolio impressive, particularly your work with AI/ML models.

I'd love to chat about:
- [Your project/collaboration idea]
- [Timeline and requirements]
- [Budget considerations]

Looking forward to hearing from you!

Best regards,
[Your Name]`)

    window.open(`mailto:sanjay.r14132@gmail.com?subject=${subject}&body=${body}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Dark mode background */}
        <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500">
          <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        {/* Light mode background */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`space-y-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, or innovative AI/ML projects. Let's
              connect and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8 bg-card border-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <a
                          href="mailto:sanjay.r14132@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          sanjay.r14132@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <a
                          href="tel:+919025493387"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 9025493387
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-muted-foreground">Tiruppur, Tamil Nadu</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Connect With Me</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-16 flex-col gap-2 bg-transparent hover:bg-primary/5 transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com/sanjay-r123" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="text-sm">GitHub</span>
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-16 flex-col gap-2 bg-transparent hover:bg-primary/5 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/sanjay-r-2a0b13186"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-16 flex-col gap-2 bg-transparent hover:bg-primary/5 transition-all duration-300"
                      asChild
                    >
                      <a href="https://kaggle.com/sanjay22bce10470" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-sm">Kaggle</span>
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-16 flex-col gap-2 bg-transparent hover:bg-primary/5 transition-all duration-300"
                      asChild
                    >
                      <a href="https://huggingface.co/Sanjay1905" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        <span className="text-sm">Hugging Face</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-card border-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">What I'm Looking For</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Collaboration Opportunities</h4>
                      <p className="text-muted-foreground text-sm">
                        Open to collaborating on AI/ML research projects, especially in NLP, computer vision, and
                        healthcare applications.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Freelance Projects</h4>
                      <p className="text-muted-foreground text-sm">
                        Available for data science consulting, ML model development, and AI system implementation.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Research Partnerships</h4>
                      <p className="text-muted-foreground text-sm">
                        Interested in academic collaborations and contributing to open-source AI/ML projects.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Ready to Start a Project?</h3>
                  <p className="text-muted-foreground">
                    Let's discuss how AI and machine learning can solve your business challenges.
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={handleStartConversation}
                  >
                    Start a Conversation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
