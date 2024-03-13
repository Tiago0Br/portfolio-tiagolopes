import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export function AboutMe() {
    return (
        <main
            className='flex flex-wrap-reverse justify-center items-center gap-10 
            md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between'
        >
            <div
                className='text-white flex flex-col items-center xl:items-start gap-4
                w-full xl:w-120'
            >
                <h1 className='text-3xl sm:text-7xl xl:leading-[5rem]'>
                    Prazer, sou&nbsp;
                    <span className='font-bold'>
                        Tiago Lopes
                    </span>
                </h1>
                <div className='mb-12'>
                    <h2 className={`${roboto.className} mb-12`}>
                        Sou um Analista de Testes/QA e futuro desenvolvedor web. Sou apaixonado
                        por programação, tecnologia, games e filmes de super herói.
                    </h2>
                    <Link 
                        href='/contatos'
                        className='p-3 bg-t-gray-500 w-fit text-xl rounded-lg transition-all
                        hover:bg-opacity-80'
                    >
                        Converse comigo
                    </Link>
                </div>
                <ul 
                    className='flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit
                    gap-3 text-xl'
                >
                    <li 
                        style={{ backgroundColor: '#2F74C0', color: '#ffffff' }}
                        className='w-fit p-2 rounded-md'
                    >
                        Typescript
                    </li>
                    <li 
                        style={{ backgroundColor: '#6BDDFA', color: '#000000' }}
                        className='w-fit p-2 rounded-md'
                    >
                        PHP
                    </li>
                    <li 
                        style={{ backgroundColor: '#EFD81D', color: '#000000' }}
                        className='w-fit p-2 rounded-md'
                    >
                        Javascript
                    </li>
                    <li 
                        style={{ backgroundColor: '#000000', color: '#ffffff' }}
                        className='w-fit p-2 rounded-md'
                    >
                        Node.js
                    </li>
                </ul>
            </div>
            <div className='relative'>
                <Image
                    className='rounded-full'
                    src='https://github.com/Tiago0Br.png'
                    alt='Foto de perfil'
                    width={400}
                    height={400}
                    unoptimized
                />
                <p 
                    className='p-4 w-fit text-base leading-tight bg-t-blue-500 rounded-xl
                    text-black absolute -bottom-[12px]'
                >
                    {/* <span className='text-4xl'>2+</span>
                    <br /> */}
                    Analista de Testes/QA
                </p>
            </div>
        </main>
    )
}