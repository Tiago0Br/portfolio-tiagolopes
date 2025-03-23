import { Project } from '@prisma/client'
import { ProjectItem } from './project-item'

interface ProjectsProps {
  title: string
  projects: Project[]
}

export function Projects({ title, projects }: ProjectsProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white/70">{title}</h3>
      <div className="flex gap-4 flex-wrap">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
