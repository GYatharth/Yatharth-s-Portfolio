"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "HackTech 2025",
    description:
      "Full-stack Hackathon registration website with login/signup Authentication and Razorpay payment integration",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Vite", "Firebase", "Razorpay"],
    githubUrl: "https://github.com/GYatharth/HackTech-2025",
    liveUrl: "https://code-forge-register.vercel.app/",
  },
  {
    id: 2,
    title: "SRM EEE V-lab",
    description:
      "Collaborative project with real-time EEE lab simulation Experiments, quiz, and advanced feedback features.",
    image: "/project-management-dashboard.png",
    technologies: ["Node.js", "TypeScript", "MongoDB", "React", "ReactFlow"],
    githubUrl: "https://github.com/Pratyushsrivastavasgn/vrlabeee",
    liveUrl: "https://srmvlabs.vercel.app/",
  },
  {
    id: 3,
    title: "Caraousel with Toggle",
    description: "A modern caraousel for member's introduction along with toggle and auto-play feature",
    image: "/cryptocurrency-dashboard.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/GYatharth/Carousel-with-Toggle",
    liveUrl: "https://gyatharth.github.io/Carousel-with-Toggle/",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-stencil)] heist-red mb-12 text-center">
          HEIST GALLERY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="border border-border rounded-lg overflow-hidden hover:border-heist-red transition-all duration-300 hover:shadow-lg red-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-heist-red/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 heist-red">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-muted text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-heist-red hover:bg-heist-red/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
