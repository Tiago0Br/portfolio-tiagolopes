import { HeroSection } from '@/components/home/hero-section'
import { TechList } from '@/components/home/tech-list'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { prisma } from '@/lib/prisma'

export default async function Home() {
  const projects = await prisma.project.findMany({
    include: {
      technologies: true,
    },
    take: 4,
    orderBy: [{ priorityOrder: 'asc' }, { id: 'asc' }],
  })

  const technologies = await prisma.technology.findMany({
    orderBy: [{ priorityOrder: 'asc' }, { id: 'asc' }],
  })

  return (
    <div className="page-transition">
      <HeroSection />
      <TechList techStack={technologies} />
      <FeaturedProjects featuredProjects={projects} />
    </div>
  )
}
