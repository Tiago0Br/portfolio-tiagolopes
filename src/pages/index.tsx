import { AboutMe } from '@/components/home/AboutMe'
import { Projects } from '@/components/home/Projects'
import { projects } from '@/data/projects'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | Tiago</title>
        <meta 
          name='description' 
          content='Sou um analista de testes/QA e futuro desenvolvedor web apaixonado por programação,
          games, tecnologia e filmes de super heróis' 
        />
      </Head>
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-18'>
        <AboutMe />
        <Projects projects={projects}/>
      </div>
    </>
  );
}
