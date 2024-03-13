import Head from 'next/head';
import Link from 'next/link';

export default function Contatos() {
    return (
        <>
            <Head>
                <title>Sobre mim | Tiago</title>
            </Head>
            <div className='mt-12 md:mt-24 space-y-16 px-6 md:px-32'>
                <h1 className='text-5xl md:text-7xl font-bold text-center'>
                    Contatos
                </h1>
                <ul className='table mx-auto space-y-6 md:space-y-8'>
                    <li className='md:text-xl'>
                        <span className='font-bold'>
                            E-mail
                        </span>
                        <div className='flex gap-1 md:gap-3 items-center'>
                            <Link 
                                href='mailto:tiagoltavares2002@gmail.com'
                                className='text-sm md:text-lg text-slate-300 underline truncate'
                            >
                                tiagoltavares2002@gmail.com
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span className='font-bold'>
                            LinkedIn
                        </span>
                        <div className='flex gap-1 md:gap-3 items-center'>
                            <Link
                                href='https://www.linkedin.com/in/tiago-lopes-7ab0b71a4' target='_blank'
                                className='text-sm md:text-lg text-slate-300 underline truncate'
                            >
                                https://www.linkedin.com/in/tiago-lopes-7ab0b71a4
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span className='font-bold'>
                            Github
                        </span>
                        <div className='flex gap-1 md:gap-3 items-center'>
                            <Link
                                href='https://github.com/Tiago0Br' target='_blank'
                                className='text-sm md:text-lg text-slate-300 underline truncate'
                            >
                                https://github.com/Tiago0Br
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}