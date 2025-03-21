import { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectProps) {
  return (
    <article className="space-y-10 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-2xl md:text-3xl">Projetos recentes</h2>

      <ul className="flex flex-wrap gap-10 md:gap-20 justify-center xl:justify-start">
        {projects.slice(0, 4).map(({ id, name, image }, index) => (
          <Link href={`/projects/${id}`} key={id}>
            <li className="text-md relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={450}
                height={300}
                className="object-cover rounded-2xl h-[18.75rem] mb-4 hover:h-[315px] hover:w-[473px] transition-all duration-300"
                draggable={false}
                unoptimized
              />
              <span>{name}</span>
              <div
                className="hidden md:flex bg-t-blue-500 rounded-xl w-14 h-14 text-center justify-center 
                items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]"
              >
                <span>{index + 1}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  )
}
