"use client"

import { useEffect, useRef, useState } from "react"
import { Coffee, Code, Music, Gamepad2 } from "lucide-react"

const funFacts = [
  {
    icon: Coffee,
    fact: "I've consumed over 1,000 cups of tea while coding this year",
    emoji: "☕",
  },
  {
    icon: Code,
    fact: "My longest coding session was 24 hours straight during a hackathon",
    emoji: "💻",
  },
  {
    icon: Music,
    fact: "I code better while listening to quiet movie soundtracks",
    emoji: "🎵",
  },
  {
    icon: Gamepad2,
    fact: "I learned programming by trying to create frontend elements as a beginner",
    emoji: "🎮",
  },
]

export function FunFacts() {
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
      id="fun-facts"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-stencil)] heist-red mb-12 text-center">
          BEHIND THE MASK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {funFacts.map((fact, index) => (
            <div
              key={fact.fact}
              className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-heist-red transition-all duration-300 hover:shadow-md red-pulse"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <fact.icon className="w-6 h-6 heist-red" />
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed">
                  {fact.fact} <span className="text-xl ml-2">{fact.emoji}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
