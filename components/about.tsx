"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
      id="about"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-stencil)] heist-red mb-8 text-center">
          ABOUT THE MASTERMIND
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 hover:border-heist-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 heist-red">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a passionate full-stack developer with a keen eye for detail and a love for creating seamless
                user experiences. My journey in tech has been driven by curiosity and the thrill of solving complex
                problems.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-heist-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 heist-red">Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bachelors degree in Computer Science and Engineering - Core. Continuously
                learning and staying updated with the latest industry trends.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 hover:border-heist-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 heist-red">Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                1 year of experience in developing scalable web applications, working with modern frontend frameworks and
                technologies. Specialized in Bootstrap, Tailwind CSS and React.js .
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-heist-red transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-3 heist-red">Interests</h3>
              <p className="text-muted-foreground leading-relaxed">
                When not coding, I enjoy exploring new technologies, reading books, watching thriller
                series adn movies, and planning the next big project adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
