import { Technology } from '@prisma/client'
import { UsedTechnologies } from './used-technologies'
import { Experience } from './experience'
import { MiniCurriculum } from './mini-curriculum'

interface CurriculumProps {
  technologies: Technology[]
}

export function Curriculum({ technologies }: CurriculumProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
      <MiniCurriculum />
      <Experience />
      <UsedTechnologies technologies={technologies} />
    </div>
  )
}
