'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { TechIcons } from '@/components/projects/tech-icons'
import { motion } from 'framer-motion'
import { Prisma } from '@prisma/client'

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

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="gamer-card md:min-h-[400px] overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:min-h-[400px] h-full">
            <div className="md:min-h-[400px] relative h-full">
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-l" />
            </div>

            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

              <p className="text-muted-foreground mb-6 flex-grow line-clamp-4">
                {project.description}
              </p>

              <TechIcons technologies={project.technologies} className="mb-6" />

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>

                {project.repository && (
                  <Button size="sm" asChild>
                    <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Link do projeto
                    </Link>
                  </Button>
                )}

                <Button variant="secondary" size="sm" asChild>
                  <Link href={`/projects/${project.id}`}>Detalhes do projeto</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
