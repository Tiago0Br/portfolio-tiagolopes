import { Technology } from '@prisma/client'
import { Header } from '../shared/header'
import { Technologies } from '../technologies/technologies'

interface MainProps {
  technologies: Technology[]
}

export function Main({ technologies }: MainProps) {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center bg-[url('/main.jpg')] bg-cover bg-center">
      <Header />
      <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-center gap-2">
          <h1 className="flex gap-3 items-center">
            <span className="text-xl sm:text-3xl text-blue-400">&lt;</span>
            <span className="text-3xl sm:text-5xl font-bold text-center">Tiago Lopes</span>
            <span className="text-xl sm:text-3xl text-blue-400">/&gt;</span>
          </h1>
          <h2 className="text-zinc-500 text-center">Desenvolvedor Fullstack</h2>
        </div>
        <Technologies technologies={technologies} />
      </div>
    </div>
  )
}
