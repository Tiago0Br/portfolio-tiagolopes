import { Technology } from '@prisma/client'
import { UsedTechnologies } from './used-technologies'

interface CurriculumProps {
  technologies: Technology[]
}

export function Curriculum({ technologies }: CurriculumProps) {
  return (
    <div>
      <UsedTechnologies technologies={technologies} />
    </div>
  )
}
