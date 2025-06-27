import { HeroSection } from '@/components/home/hero-section'
import { TechCarousel } from '@/components/home/tech-carousel'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { prisma } from '@/lib/prisma'

export default async function Home() {
  const projects = await prisma.project.findMany({
    include: {
      technologies: true,
    },
    take: 4,
  })

  const technologies = await prisma.technology.findMany()

  return (
    <div className="page-transition">
      <HeroSection />
      <TechCarousel techStack={technologies} />
      <FeaturedProjects featuredProjects={projects} />
    </div>
  )
}
