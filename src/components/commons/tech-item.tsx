interface TechItemProps {
  name: string
  color: string
  bgcolor: string
}

export function TechItem({ name, color, bgcolor }: TechItemProps) {
  return (
    <li style={{ backgroundColor: bgcolor, color: color }} className="w-fit p-2 rounded-md">
      {name}
    </li>
  )
}
