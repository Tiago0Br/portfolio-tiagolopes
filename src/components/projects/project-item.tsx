import { Project, Technology } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  project: Project
  variant?: 'summary' | 'full'
  technologies?: Technology[]
}

export function ProjectItem({
  project,
  variant = 'summary',
  technologies = [],
}: ProjectItemProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      {variant === 'summary' ? (
        <div className="w-64 h-48 md:w-[25rem] md:h-64 relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-2 hover:border-blue-400 transition-all">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            draggable={false}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.images[0]})` }}
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech.id}
                  className="px-3 py-1 bg-[#8B5CF6] text-white rounded-full text-sm"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </Link>
  )
}
