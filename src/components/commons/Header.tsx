import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    return (
        <header>
            <Link href='/'>
                <Image src='/favicon.png' alt='Logo da página' width={100} height={100} />
            </Link>
            <nav>
                <Link href='/'>Sobre mim</Link>
                <Link href='/portfolio'>Portfólio</Link>
                <Link href='/contatos'>Contatos</Link>
            </nav>
        </header>
    )
}