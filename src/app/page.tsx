import { HeroSection } from '@/components/home/hero-section'
import { TechCarousel } from '@/components/home/tech-carousel'
import { FeaturedProjects } from '@/components/home/featured-projects'

export default function Home() {
  return (
    <div className="page-transition">
      <HeroSection />
      <TechCarousel />
      <FeaturedProjects />
    </div>
  )
}
