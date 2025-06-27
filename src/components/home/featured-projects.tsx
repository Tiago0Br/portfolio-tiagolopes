'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { Prisma } from '@prisma/client'
import { FeaturedProjectCard } from '../projects/featured-project-card'

type Project = Prisma.ProjectGetPayload<{ include: { technologies: true } }>

interface FeaturedProjectCardProps {
  featuredProjects: Project[]
}

export function FeaturedProjects({ featuredProjects }: FeaturedProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Projetos principais</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos meus projetos desenvolvidos
          </p>
        </div>

        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <FeaturedProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10"
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-primary w-6' : 'bg-muted hover:bg-primary/50'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/projects">Todos os projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
