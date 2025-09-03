"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Instagram, MessageCircle, ArrowUp } from "lucide-react"

const contactRoutes = [
  {
    icon: Mail,
    label: "Email",
    value: "reach2yatharth@gmail.com",
    href: "mailto:your.email@example.com",
    description: "Drop me a line for collaborations",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@GYatharth",
    href: "https://github.com/GYatharth",
    description: "Check out my code repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/yatharthgupta",
    href: "https:www.linkedin.com/in/yatharth-gupta-7744b3325",
    description: "Let's connect professionally",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@whysoyatharth",
    href: "https://www.instagram.com/whysoyatharth/?utm_source=qr&r=nametag",
    description: "Follow my creative journey",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/qr/H4NPKISJNOWOH1",
    description: "Quick messages and discussions",
  },
]

export function Contact() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-stencil)] heist-red mb-12 text-center">
          ESCAPE ROUTES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactRoutes.map((route, index) => (
            <a
              key={route.label}
              href={route.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-border rounded-lg hover:border-heist-red transition-all duration-300 hover:shadow-md bg-background red-pulse group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <route.icon className="w-6 h-6 heist-red" />
                <h3 className="text-lg font-semibold">{route.label}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{route.description}</p>
              <span className="text-sm heist-red font-medium">{route.value}</span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="border-heist-red text-heist-red hover:bg-heist-red hover:text-white bg-transparent"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to the Top
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Yatharth's Portfolio. All rights reserved. Built with precision and passion.</p>
        </div>
      </div>
    </section>
  )
}
