import Image from 'next/image'

export function MiniCurriculum() {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center bg-black border border-zinc-800 rounded-md px-6 gap-4">
      <div className="relative w-64 h-60 rounded-full overflow-hidden">
        <Image
          src="https://github.com/Tiago0Br.png"
          alt="Foto de perfil"
          fill
          draggable={false}
        />
      </div>
      <div className="flex flex-col gap-5 self-center py-6 max-w-[400px]">
        <div className="flex flex-col items-start">
          <span className="bg-gradient-to-r from-blue-600 via-20% to-white text-transparent bg-clip-text text-2xl font-bold">
            Tiago Lopes
          </span>
          <span>Desenvolvedor Fullstack</span>
        </div>
        <p className="text-sm text-left">
          Formado em Ciência da Computação pela Faculdade de Americana (FAM). Atualmente
          trabalhando como Desenvolvedor Backend PHP na empresa Troupe Tecnologia LTDA. Sou
          apaixonado por programação, IA, games, tecnologias em geral e filmes de super heróis.
          Atualmente, estou estudando ReactJS, NextJS, Node.js e TailwindCSS.
        </p>
      </div>
    </div>
  )
}
