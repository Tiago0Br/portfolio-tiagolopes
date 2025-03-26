import { Project } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="w-64 h-48 md:w-[25rem] md:h-64 relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-2 hover:border-blue-400 transition-all">
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          draggable={false}
          className="object-cover"
        />
      </div>
    </Link>
  )
}
