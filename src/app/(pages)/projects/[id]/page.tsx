import { Metadata } from 'next'
import Link from 'next/link'
import { IconBrandGithub, IconPennant2, IconCode, IconArrowLeft } from '@tabler/icons-react'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import NotFound from '@/app/not-found'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams(): Promise<ProjectPageProps['params'][]> {
  const projects = await prisma.project.findMany()

  return projects.map((project) => ({ id: String(project.id) }))
}

export async function generateMetadata({
  params: { id },
}: ProjectPageProps): Promise<Metadata> {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
  })

  return {
    title: `${project?.name ?? 'Projeto de programação'} | Tiago Lopes`,
    description: project?.description ?? '',
    openGraph: {
      locale: 'pt_BR',
      title: `${project?.name ?? 'Projeto de programação'} | Tiago Lopes`,
      description: project?.description ?? '',
    },
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

  if (!project) return <NotFound />

  return (
    <div className="px-8 py-8 bg-zinc-900 text-white min-h-screen">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          asChild
          className="mr-4 text-white hover:text-[#8B5CF6] hover:bg-gray-800"
        >
          <Link href="/projects">
            <IconArrowLeft className="mr-2" />
            Voltar para projetos
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{project.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="pt-0 mb-8 bg-zinc-900 border-none">
            <CardContent>
              <Card className="bg-zinc-800 border-none">
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <img
                    src={project.images[0]}
                    alt={`Screenshot do projeto ${project.name}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Descrição</h2>
            <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4 gap-2">
              <h2 className="text-xl font-bold">Nível do Projeto</h2>
              <div className="flex ml-2 text-[#8B5CF6]">
                <IconPennant2 className="size-5" />
              </div>
            </div>
            <span className="bg-[#8B5CF6] hover:bg-[#7A4FD3] transition-colors text-sm py-1 px-3 cursor-pointer rounded-md">
              {project.level}
            </span>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <div className="flex items-center mb-4 gap-2">
              <h2 className="text-xl font-bold">Tipo da Aplicação</h2>
              <div className="ml-2 text-[#8B5CF6]">
                <IconCode className="size-5" />
              </div>
            </div>
            <span className="bg-[#8B5CF6] hover:bg-[#7A4FD3] transition-colors text-sm py-1 px-3 cursor-pointer rounded-md">
              {project.type}
            </span>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Tecnologias</h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <div key={tech.id} className="flex flex-col items-center justify-center">
                  <span className="text-sm mt-1 capitalize text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                className="justify-start bg-zinc-800 border-gray-600 text-white hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6]"
                asChild
              >
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <IconBrandGithub className="size-5" />
                  <span className="ml-2">Github</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
