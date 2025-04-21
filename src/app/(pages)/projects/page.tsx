import { Metadata } from 'next'
import { Container } from '@/components/shared/container'
import { Header } from '@/components/shared/header'
import { prisma } from '@/lib/prisma'
import { ProjectItem } from '@/components/projects/project-item'

export const metadata: Metadata = {
  title: 'Projetos | Tiago Lopes',
  description: 'Veja os meus projetos desenvolvidos!',
}

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany()

  return (
    <>
      <Header />
      <Container className="flex flex-col items-center mt-20 gap-8">
        <h1 className="text-4xl font-bold">Projetos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </>
  )
}
