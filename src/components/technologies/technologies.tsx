import { Technology } from '@prisma/client'
import Image from 'next/image'

interface TechnologyProps {
  technologies: Technology[]
}

export function Technologies({ technologies }: TechnologyProps) {
  return (
    <div className="flex justify-center gap-4 flex-wrap w-4/5">
      {technologies.map((technology) => (
        <div key={technology.id} className="flex flex-col items-center gap-1">
          <span className="relative size-11 sm:size-16 rounded-xl overflow-hidden">
            <Image
              src={technology.image}
              alt={`Logo da tecnologia ${technology.name}`}
              fill
              draggable={false}
              className="object-contain"
            />
          </span>
          <span className="text-xs text-zinc-400">{technology.name}</span>
        </div>
      ))}
    </div>
  )
}
