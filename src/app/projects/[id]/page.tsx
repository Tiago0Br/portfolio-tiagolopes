import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { ProjectCarousel } from '@/components/projects/project-caroulsel'
import { TechIcons } from '@/components/projects/tech-icons'
import { prisma } from '@/lib/prisma'

interface ProjectDetailsPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { id } = await params
  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      technologies: true,
    },
  })

  if (!project) {
    return {
      title: 'Projeto não encontrado | Tiago Lopes',
    }
  }

  return {
    title: `${project.name} | Tiago Lopes`,
    description: project.description,
  }
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params
  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      technologies: true,
    },
  })

  if (!project) {
    notFound()
  }

  return (
    <div className="py-12 page-transition">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link
            href="/projects"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para os projetos
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">{project.name}</h1>

          <ProjectCarousel images={project.images} title={project.name} />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Detalhes do projeto</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="gamer-card p-6">
            <h3 className="text-lg font-semibold mb-4">Links úteis</h3>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> Repositório no GitHub
                </Link>
              </Button>

              {project.appLink && (
                <Button className="w-full justify-start" asChild>
                  <Link href={project.appLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Link do projeto
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="gamer-card p-6">
            <h3 className="text-lg font-semibold mb-4">Tecnologias utilizadas</h3>
            <TechIcons
              technologies={project.technologies}
              showLabels={true}
              className="flex-row items-center gap-3 flex-wrap"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
