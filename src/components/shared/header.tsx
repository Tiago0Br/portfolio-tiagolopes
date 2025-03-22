import Image from 'next/image'
import Link from 'next/link'
import { Container } from './container'
import { Menu } from './menu'

export function Header() {
  return (
    <header className="flex items-center h-16">
      <Container className="flex-1 flex justify-between items-center">
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
        <div className="hidden sm:flex items-center">
          <Link
            href="https://www.linkedin.com/in/tiago-lopes-7ab0b71a4"
            target="_blank"
            className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
          >
            Perfil
          </Link>
        </div>
      </Container>
    </header>
  )
}
