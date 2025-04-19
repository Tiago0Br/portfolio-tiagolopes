import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <Image
        src="/not-found.png"
        alt="Ilustração com o texto 404"
        width={500}
        height={400}
        draggable={false}
      />

      <Link href="/" className="text-blue-400 hover:text-blue-600 transition-colors">
        Voltar para a tela inicial
      </Link>
    </main>
  )
}
