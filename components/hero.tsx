"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGlitch = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.currentTarget.classList.add("glitch-animation")
    setTimeout(() => {
      e.currentTarget.classList.remove("glitch-animation")
    }, 300)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle texture */}
<div className="absolute inset-0 opacity-5 pointer-events-none">
  <div className="w-full h-full bg-[url('/dali-mask-pattern.jpg')] bg-repeat opacity-10"></div>
</div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={`space-y-8 ${isVisible ? "mask-reveal" : "opacity-0"}`}>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-stencil)] leading-tight cursor-pointer"
            onClick={handleGlitch}
          >
            <span className="heist-red">THE PERFECT</span>
            <br />
            <span className="text-foreground">HEIST</span>
            <br />
            <span className="text-muted-foreground text-2xl sm:text-3xl lg:text-4xl">YATHARTH GUPTA</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Welcome to my digital vault. I&apos;m a skilled developer who crafts exceptional web experiences with
            precision, creativity, and the thrill of innovation. Ready to execute the perfect project?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4" >
            
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-heist-red rounded-lg text-heist-red bg-transparent hover:bg-heist-red hover:text-white transition duration-300 ease-in-out">
              <Download className="mr-2 h-5 w-5" />
               View Resume
            </a>
          
            
            
          </div>
        </div>

        <div
          className={`flex justify-center ${isVisible ? "mask-reveal" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full border-4 border-heist-red overflow-hidden red-pulse">
              <Image
                src="/professional-developer-portrait.png"
                alt="Professional Portrait"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-heist-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">💼</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
