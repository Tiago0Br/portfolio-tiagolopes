'use client'

import { Technology } from '@prisma/client'

interface TechCarouselProps {
  techStack: Technology[]
}

export const TechList = ({ techStack }: TechCarouselProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Tecnologias</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Linguagens e ferramentas que eu já utilizei
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="m-auto flex flex-wrap max-w-3xl gap-2 items-center justify-center">
            {techStack.map((tech) => (
              <button
                key={tech.name}
                className="relative group transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 transition-all duration-300 flex items-center justify-center border-muted hover:border-primary/50 bg-muted/10">
                  <img src={tech.image} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8" />
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
