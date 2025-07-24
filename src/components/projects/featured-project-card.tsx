import { Prisma } from '@prisma/client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { TechIcons } from './tech-icons'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

type Project = Prisma.ProjectGetPayload<{ include: { technologies: true } }>

export function FeaturedProjectCard({ project }: { project: Project }) {
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
              <div className="absolute inset-0" />
            </div>

            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

              <div className="flex-grow">
                <p className="text-muted-foreground mb-6 line-clamp-6 mb:line-clamp-4">
                  {project.description}
                </p>
              </div>

              <TechIcons technologies={project.technologies} className="mb-6" />

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild className="hidden md:flex">
                  <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>

                {project.appLink && (
                  <Button size="sm" asChild className="hidden md:flex">
                    <Link href={project.appLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Link do projeto
                    </Link>
                  </Button>
                )}

                <Button variant="secondary" size="sm">
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
