import { Project } from '@prisma/client'
import { Curriculum } from '@/components/curriculum/curriculum'
import { Main } from '@/components/landing/main'
import { Projects } from '@/components/projects/projects'
import { Container } from '@/components/shared/container'
import { prisma } from '@/lib/prisma'

export default async function HomePage() {
  const technologies = await prisma.technology.findMany()
  const technologiesWithEmphasis = technologies.filter((technology) => technology.emphasis)

  const projects = await prisma.project.findMany()
  const projectsWithEmphasis: Project[] = []
  const webProjects: Project[] = []
  const backendProjects: Project[] = []
  const fullstackProjects: Project[] = []
  const gameProjects: Project[] = []

  projects.forEach((project) => {
    if (project.emphasis) {
      projectsWithEmphasis.push(project)
    }
    if (project.type === 'FRONTEND' && !project.emphasis) {
      webProjects.push(project)
    }
    if (project.type === 'BACKEND' && !project.emphasis) {
      backendProjects.push(project)
    }
    if (project.type === 'FULLSTACK' && !project.emphasis) {
      fullstackProjects.push(project)
    }
    if (project.type === 'GAME' && !project.emphasis) {
      gameProjects.push(project)
    }
  })

  return (
    <div>
      <Main technologies={technologiesWithEmphasis} />
      <Container className="py-16 flex flex-col gap-7">
        <Projects title="Destaque" projects={projectsWithEmphasis} />
        <Projects title="Fullstack" projects={fullstackProjects} />
        <Curriculum technologies={technologies} />
      </Container>
    </div>
  )
}
