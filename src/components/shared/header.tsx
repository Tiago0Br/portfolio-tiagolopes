import Image from 'next/image'
import Link from 'next/link'
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'
import { Container } from './container'
import { Menu } from './menu'

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center h-16 bg-black/50">
      <Container className="flex-1 flex justify-center sm:justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/" className="hidden sm:block">
            <Image
              src="/favicon.svg"
              alt="Logo do portfólio"
              width={40}
              height={40}
              draggable={false}
            />
          </Link>
          <Menu />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/tiago-lopes-7ab0b71a4"
            target="_blank"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <IconBrandLinkedin size={40} />
          </Link>
          <Link
            href="https://github.com/Tiago0Br"
            target="_blank"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <IconBrandGithub size={40} />
          </Link>
        </div>
      </Container>
    </header>
  )
}
