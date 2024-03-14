import { MenuCloseIcon } from '@/components/icons/MenuCloseIcon'
import Image from 'next/image'
import Link from 'next/link'

export function Menu() {
    return (
        <div>
            <div>
                <div>
                    <Link href='/'>
                        <Image src='favicon.svg' alt='Ícone' width={55} height={55} />
                    </Link>
                    <button>
                        <MenuCloseIcon />
                    </button>
                </div>
                <nav>
                    <Link href='/'>
                        Sobre mim
                    </Link>
                    <Link href='/portfolio'>
                        Portfólio
                    </Link>
                    <Link href='/contatos'>
                        Entre em contato
                    </Link>
                </nav>
            </div>
        </div>
    )
}