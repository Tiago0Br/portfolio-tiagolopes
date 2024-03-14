import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { useCallback, useState } from 'react'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { Menu } from './Menu'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500'
})

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <header 
            className={
                `${roboto.className} bg-t-blue-900 text-sm flex py-3 px-5 
                justify-between items-center sticky top-0 z-20`
            }
        >
            <Link href='/'>
                <Image src='/favicon.svg' alt='Logo da página' width={55} height={55} />
            </Link>
            <button className='p-1 md:hidden' onClick={openMenu}>
                <MenuIcon className='fill-white w-10 h-10' />
            </button>
            <nav className='hidden md:flex items-center gap-10 text-sm'>
                <Link href='/'>Sobre mim</Link>
                <Link href='/portfolio'>Portfólio</Link>
                <Link href='/contatos'>Entre em contato</Link>
            </nav>
            <Menu isVisible={isMenuOpen} onClose={closeMenu} />
        </header>
    )
}