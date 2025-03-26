import { Technology } from '@prisma/client'

interface UsedTechnologiesProps {
  technologies: Technology[]
}

export function UsedTechnologies({ technologies }: UsedTechnologiesProps) {
  return (
    <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-md">
      <div className="flex justify-center flex-wrap gap-x-3">
        {technologies.map((technology) => (
          <div key={technology.id}>
            <span className="text-red-500 font-bold">#</span>
            <span className="text-sm">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
