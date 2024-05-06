import { Project } from '@/types/Home'
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
        {projects.map(({ name, slug, image }, index) => (
          <Link href={slug} key={name + index} target="_blank">
            <li className="text-md relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={450}
                height={300}
                className="object-cover rounded-2xl h-[18.75rem] mb-4"
                unoptimized
              />
              <span>{name}</span>
              <div
                className="bg-t-blue-500 rounded-xl w-14 h-14 text-center flex justify-center 
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
