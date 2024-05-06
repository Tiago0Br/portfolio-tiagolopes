import { AboutMe } from '@/components/home/AboutMe'
import { Projects } from '@/components/home/Projects'
import { Home } from '@/types/Home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import 'dotenv/config'

interface HomeProps {
  home: Home
}

export default function Home({ home }: HomeProps) {
  const { projects } = home

  return (
    <>
      <Head>
        <title>Sobre mim | Tiago</title>
        <meta
          name="description"
          content="Sou um analista de testes/QA e futuro desenvolvedor web apaixonado por programação,
          games, tecnologia e filmes de super heróis"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-18">
        <AboutMe aboutMe={home.aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  )
}

async function loadHome() {
  const res = await fetch(process.env.DATA_URL!)

  const home = (await res.json()) as Home

  return home
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome()

  return {
    props: { home },
  }
}
