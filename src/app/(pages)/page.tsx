import { Curriculum } from '@/components/curriculum/curriculum'
import { Main } from '@/components/landing/main'
import { Projects } from '@/components/projects/projects'
import { Container } from '@/components/shared/container'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Início | Tiago Lopes',
  description: 'Portfólio do desenvolvedor fullstack Tiago Lopes',
}

export default async function HomePage() {
  const technologies = await prisma.technology.findMany()
  const technologiesWithEmphasis = technologies.filter((technology) => technology.emphasis)
  const projects = await prisma.project.findMany()

  return (
    <div>
      <Main technologies={technologiesWithEmphasis} />
      <Container className="py-16 flex flex-col gap-7">
        <Projects title="Projetos" projects={projects} />
        <Curriculum technologies={technologies} />
      </Container>
    </div>
  )
}
