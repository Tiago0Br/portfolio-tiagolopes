import { prisma } from '@/lib/prisma'
import { getProjectReadme } from '@/actions/get-project-readme'
import { Header } from '@/components/shared/header'
import { Container } from '@/components/shared/container'
import { CarouselImages } from '@/components/projects/carousel-images'
import { Technologies } from '@/components/technologies/technologies'
import { ProjectReadme } from '@/components/projects/project-readme'

// export const revalidate = 3600

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params: { id } }: ProjectPageProps) {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      technologies: true,
    },
  })

  if (!project) return null

  const readme = await getProjectReadme(project.repository)

  return (
    <div>
      <Header />
      <Container className="pt-18 pb-7 flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold self-start">{project.name}</h1>
        <CarouselImages images={project.images.slice(0)} />
        <Technologies technologies={project.technologies} />
        <ProjectReadme markdown={readme} />
      </Container>
    </div>
  )
}
