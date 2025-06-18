import { Metadata } from 'next'
import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Projetos | Tiago Lopes',
  description: 'Veja alguns dos projetos desenvolvidos por mim',
}

export default function ProjectsPage() {
  return (
    <div className="py-12 page-transition">
      <h1 className="page-title">Meus projetos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
