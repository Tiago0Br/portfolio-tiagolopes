import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 page-transition">
      <h1 className="text-5xl font-bold mb-4">Ops</h1>
      <div className="text-xl font-bold mb-6">Página não encontrada</div>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        A página que você procura não foi encontrada D:
      </p>
      <Button asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" /> Voltar para o início
        </Link>
      </Button>
    </div>
  )
}
