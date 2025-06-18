import { Project } from '@prisma/client'
import { ProjectItem } from './project-item'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

interface ProjectsProps {
  title: string
  projects: Project[]
}

export function Projects({ title, projects }: ProjectsProps) {
  return (
    <div className="flex flex-col items-center gap-4 sm:items-start w-7/10 md:w-11/12 xl:w-full">
      <h3 className="text-2xl font-bold text-white/70">{title}</h3>
      <Carousel opts={{ align: 'center', loop: true }} className="w-full">
        <CarouselContent className="flex">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/3">
              <ProjectItem project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
