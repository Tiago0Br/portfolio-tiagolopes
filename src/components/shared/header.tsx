import Image from 'next/image'
import Link from 'next/link'
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
      </Container>
    </header>
  )
}
