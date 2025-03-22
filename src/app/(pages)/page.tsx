import { Curriculum } from '@/components/curriculum/curriculum'
import { Main } from '@/components/landing/main'
import { Container } from '@/components/shared/container'
import { prisma } from '@/lib/prisma'

export default async function HomePage() {
  const technologies = await prisma.technology.findMany()

  return (
    <div>
      <Main />
      <Container className="py-10">
        <Curriculum technologies={technologies} />
      </Container>
    </div>
  )
}
