import { AboutMe } from '@/components/home/AboutMe';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | Tiago</title>
        <meta name='description' content='Sou um desenvolvedor web back-end apaixonado por programação, games e filmes de super heróis' />
      </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-28'>
        <AboutMe />
      </div>
    </>
  );
}
