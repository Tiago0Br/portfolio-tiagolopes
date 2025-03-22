import { Header } from '../shared/header'

export function Main() {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center bg-[url('/main.jpg')] bg-cover bg-center">
      <Header />
      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <h1 className="flex gap-3 items-center">
          <span className="text-xl sm:text-3xl text-blue-400">&lt;</span>
          <span className="text-3xl sm:text-5xl font-bold text-center">Tiago Lopes</span>
          <span className="text-xl sm:text-3xl text-blue-400">/&gt;</span>
        </h1>
        <h2 className="text-zinc-500">Desenvolvedor Fullstack</h2>
      </div>
    </div>
  )
}
