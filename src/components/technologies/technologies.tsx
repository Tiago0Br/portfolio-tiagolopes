import Image from 'next/image'
import { Technology } from '@prisma/client'

export interface TecnologiasProps {
  technologies: Technology[]
  smallSize?: boolean
}

export function Technologies({ technologies, smallSize }: TecnologiasProps) {
  return technologies ? (
    <div className="flex justify-center gap-4 flex-wrap w-4/5">
      {technologies.map((technology) => (
        <div key={technology.id} className="flex flex-col items-center gap-1">
          <span
            className={`
							relative h-11 w-11 rounded-xl overflow-hidden
							${!smallSize && 'sm:h-16 sm:w-16'}
						`}
          >
            <Image
              src={technology.image}
              alt={technology.name}
              fill
              className="object-contain"
              draggable={false}
            />
          </span>
          <span className="text-[12px] text-zinc-400">{technology.name}</span>
        </div>
      ))}
    </div>
  ) : null
}
