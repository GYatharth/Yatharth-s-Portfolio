"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Trophy, Star, Target } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Cleared SRMJEEE",
    description: "Got a rank of 1481",
    date: "June 2024",
  },
  {
    icon: Award,
    title: "Full Stack Developer Certification",
    description: "Completed advanced certification from Udemy",
    date: "Dec 2024",
  },
  {
    icon: Star,
    title: "First Ranker in EGD",
    description: "Made significant designs using AutoCAD-2025",
    date: "May 2025",
  },
  {
    icon: Target,
    title: "Top Ranker in 1st year",
    description: "Maintained 98.8% or 9.88 CGPA in 1st year",
    date: "2024-25",
  },
  {
    icon: Target,
    title: "Cleared JEE",
    description: "Maintained 97.8 %ile in General Quota",
    date: "April 2024",
  },
  {
    icon: Target,
    title: "Completed Google AI/ML Internship",
    description: "In collaboration with AICTE and EduSkill, completed AI/ML virtual internship",
    date: "Nov 2024",
  }
]

export function Achievements() {
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
      id="achievements"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-stencil)] heist-red mb-12 text-center">
          SUCCESSFUL HEISTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-heist-red transition-colors duration-300 bg-background red-pulse"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-heist-red rounded-lg flex items-center justify-center">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">{achievement.description}</p>
                <span className="text-xs heist-red font-medium">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
