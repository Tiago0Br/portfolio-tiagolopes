'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Menu() {
  const path = usePathname()

  return (
    <nav className="flex gap-6">
      <MenuItem href="/" selected={path === '/'}>
        Home
      </MenuItem>
      <MenuItem href="/projects/1" selected={path.startsWith('/projects')}>
        Projetos
      </MenuItem>
      <MenuItem href="/contact" newTab>
        Contato
      </MenuItem>
    </nav>
  )
}

interface MenuItemProps {
  children: React.ReactNode
  href: string
  selected?: boolean
  newTab?: boolean
}

function MenuItem({ children, href, selected = false, newTab = false }: MenuItemProps) {
  return (
    <Link href={href} target={newTab ? '_blank' : '_self'}>
      <span
        data-selected={selected}
        className="
          flex items-center gap-2 text-sm border-blue-600 text-zinc-300
          hover:text-white data-[selected=true]:border-b-4 data-[selected=true]:text-white
        "
      >
        {children}
      </span>
    </Link>
  )
}
