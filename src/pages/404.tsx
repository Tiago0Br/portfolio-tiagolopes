import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Tiago</title>
            </Head>
            <div>
                <h1>404</h1>
                <p>Ops, a página buscada não foi encontrada D:</p>
                <span>Clique no botão abaixo para ser redirecionado para a página inicial</span>
                <br />
                <Link href='/'>
                    Ir para a página inicial
                </Link>
            </div>
        </>
    )
}