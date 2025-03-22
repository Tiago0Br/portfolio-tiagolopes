import { Header } from '@/components/shared/header'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params: { id } }: ProjectPageProps) {
  return (
    <div>
      <Header />
      <h1>Projeto {id}</h1>
    </div>
  )
}
