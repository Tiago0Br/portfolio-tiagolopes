'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Technology } from '@prisma/client'

interface TechCarouselProps {
  techStack: Technology[]
}

export const TechCarousel = ({ techStack }: TechCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate carousel
  useEffect(() => {
    const startAutoRotate = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % techStack.length)
      }, 3000)
    }

    startAutoRotate()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleTechClick = (index: number) => {
    setCurrentIndex(index)
    // Reset auto-rotate timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % techStack.length)
      }, 3000)
    }, 5000) // Wait 5 seconds before resuming auto-rotate
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Tecnologias</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Linguagens de programação e ferramentas que eu tenho conhecimento
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main tech display */}
          <div className="flex justify-center mb-8">
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex gamer-card p-8 flex-col items-center justify-center min-h-[200px] w-80"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                  <img
                    src={techStack[currentIndex].image}
                    alt={techStack[currentIndex].name}
                    className="w-12 h-12"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse"></div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{techStack[currentIndex].name}</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </motion.div>
          </div>

          <div className="m-auto flex flex-wrap max-w-3xl gap-2 items-center">
            {techStack.map((tech, index) => (
              <button
                key={tech.name}
                onClick={() => handleTechClick(index)}
                className={`relative group transition-all duration-300 ${
                  currentIndex === index ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    currentIndex === index
                      ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30'
                      : 'border-muted hover:border-primary/50 bg-muted/10'
                  }`}
                >
                  <img src={tech.image} alt={tech.name} className="w-6 h-6" />
                </div>

                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-border rounded px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {tech.name}
                </div>
              </button>
            ))}
          </div>

          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
