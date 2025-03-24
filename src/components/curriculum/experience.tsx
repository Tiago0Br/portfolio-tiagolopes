export function Experience() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center gap-6 p-6 justify-around bg-black border border-zinc-800 rounded-md">
      <Item main="+2" label="Anos de experiência" />
      <Item main="+10" label="Tecnologias trabalhadas" />
    </div>
  )
}

interface ItemProps {
  main: string
  label: string
}

function Item({ main, label }: ItemProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-red-500 text-3xl font-bold leading-6">{main}</span>
      <span className="text-zinc-400 text-sm text-center">{label}</span>
    </div>
  )
}
