import { AboutMe } from '@/components/home/AboutMe'
import { Projects } from '@/components/home/Projects'
import { Home } from '@/types/Home'
import Head from 'next/head'

export default async function HomePage() {
  async function loadHome() {
    const res = await fetch(process.env.NEXT_PUBLIC_DATA_URL!)

    const home = (await res.json()) as Home

    return home
  }

  const home = await loadHome()
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