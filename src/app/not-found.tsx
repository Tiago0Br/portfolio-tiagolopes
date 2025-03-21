import Head from 'next/head'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
})

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Tiago</title>
      </Head>
      <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold">404</h1>
        <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
          <span>Ops, a página buscada não foi encontrada D:</span>
          <span>Clique no botão abaixo para ser redirecionado para a página inicial</span>
        </p>
        <Link
          href="/"
          className={`${roboto.className} p-4 bg-t-blue-500 rounded-xl text-black mt-5 md:mt-12 w-fit md:text-xl`}
        >
          Ir para a página inicial
        </Link>
      </div>
    </>
  )
}
