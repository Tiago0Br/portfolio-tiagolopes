'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { TechIcons } from './tech-icons'
import { motion } from 'framer-motion'
import { Prisma } from '@prisma/client'

interface ProjectCardProps {
  project: Prisma.ProjectGetPayload<{ include: { technologies: true } }>
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.id}`} className="block h-full">
        <Card className="gamer-card overflow-hidden h-full flex flex-col">
          <div className="relative h-48 w-full bg-muted">
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <CardContent className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary">{project.name}</h3>

            <p className="text-muted-foreground mb-4 flex-grow line-clamp-4">
              {project.description}
            </p>

            <TechIcons technologies={project.technologies} />
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
