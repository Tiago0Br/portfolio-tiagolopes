import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500'
})

export function Header() {
    return (
        <header 
            className={
                `${roboto.className} bg-t-blue-900 text-sm flex py-3 px-5 
                justify-between items-center sticky top-0 z-20`
            }
        >
            <Link href='/'>
                <Image src='/favicon.png' alt='Logo da página' width={55} height={55} />
            </Link>
            <nav className='hidden md:flex items-center gap-10 text-sm'>
                <Link href='/'>Sobre mim</Link>
                <Link href='/portfolio'>Portfólio</Link>
                <Link href='/contatos'>Entre em contato</Link>
            </nav>
        </header>
    )
}