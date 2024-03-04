import Head from 'next/head';
import Link from 'next/link';

export default function Contatos() {
    return (
        <>
            <Head>
                <title>Sobre mim | Tiago</title>
            </Head>
            <div>
                <h1>Contatos</h1>
                <ul>
                    <li>
                        <span>E-mail</span>
                        <div>
                            <Link href='mailto:tiagoltavares2002@gmail.com'>
                                tiagoltavares2002@gmail.com
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>LinkedIn</span>
                        <div>
                            <Link href='mailto:tiagoltavares2002@gmail.com' target='_blank'>
                                tiagoltavares2002@gmail.com
                            </Link>
                        </div>
                    </li>
                    <li>
                        <span>Github</span>
                        <div>
                            <Link href='https://github.com/Tiago0Br' target='_blank'>
                                https://github.com/Tiago0Br
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}