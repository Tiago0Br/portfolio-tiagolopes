import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, FileText, Github } from 'lucide-react'
import { getProjectById } from '@/lib/data/projects'
import { ProjectCarousel } from '@/components/projects/project-caroulsel'
import { TechIcons } from '@/components/projects/tech-icons'

interface ProjectDetailsPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: 'Project Not Found | Tiago Lopes',
    }
  }

  return {
    title: `${project.title} | Tiago Lopes`,
    description: project.description,
  }
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = getProjectById(params.id)

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
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

          <ProjectCarousel images={project.images} title={project.title} />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground">{project.longDescription}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="gamer-card p-6">
            <h3 className="text-lg font-semibold mb-4">Project Links</h3>

            <div className="space-y-3">
              {project.links.github && (
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub Repository
                  </Link>
                </Button>
              )}

              {project.links.live && (
                <Button className="w-full justify-start" asChild>
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                  </Link>
                </Button>
              )}

              {project.links.documentation && (
                <Button variant="secondary" className="w-full justify-start" asChild>
                  <Link
                    href={project.links.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-5 w-5" /> Documentation
                  </Link>
                </Button>
              )}
            </div>
          </div>

          <div className="gamer-card p-6">
            <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
            <TechIcons
              technologies={project.technologies}
              showLabels={true}
              className="flex-col items-start gap-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
