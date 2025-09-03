"use client"

import { useEffect, useRef, useState } from "react"

const technicalSkills = [
  "React.js",
  "TypeScript",
  "Python",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
  "Github",
  "AWS",
  "HTML",
  "C++",
  "Java"
]

const nonTechnicalSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Strategic Planning",
  "Creative Thinking",
  "Attention to Detail",
  "Adaptability",
]

export function Skills() {
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
      id="skills"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-stencil)] heist-red mb-12 text-center">
          ARSENAL & EXPERTISE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border border-border rounded-lg p-8 hover:border-heist-red transition-colors duration-300">
            <h3 className="text-2xl font-semibold mb-6 heist-red font-[family-name:var(--font-stencil)]">
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-muted rounded-md px-3 py-2 text-sm text-center hover:bg-heist-red hover:text-white transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg p-8 hover:border-heist-red transition-colors duration-300">
            <h3 className="text-2xl font-semibold mb-6 heist-red font-[family-name:var(--font-stencil)]">
              NON-TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nonTechnicalSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-muted rounded-md px-3 py-2 text-sm text-center hover:bg-heist-red hover:text-white transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
