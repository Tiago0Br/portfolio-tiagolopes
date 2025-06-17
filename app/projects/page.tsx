import { Metadata } from 'next'
import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Projects | Tiago Lopes',
  description: 'Browse through my portfolio of web development projects',
}

export default function ProjectsPage() {
  return (
    <div className="py-12 page-transition">
      <h1 className="page-title">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
