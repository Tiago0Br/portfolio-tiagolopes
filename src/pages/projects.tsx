'use client'

import { Home } from '@/types/Home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import NotFound from './404'
import Image from 'next/image'
import { TechItem } from '@/components/commons/TechItem'
import Link from 'next/link'

interface ProjectProps {
  home: Home
}

export default function ProjectPage({ home }: ProjectProps) {
  const searchParams = useSearchParams()

  const projectId = searchParams.get('id')
  const project = home.projects.find((project) => project.id === projectId)

  if (!project) {
    return <NotFound />
  }

  return (
    <>
      <Head>
        <title>Projetos | Tiago</title>
      </Head>

      <div className="flex flex-col items-center gap-7 mb-5">
        <h1 className="text-md text-center sm:text-2xl md:text-3xl">
          {project.name}
        </h1>
        <Image
          src={project.image.url}
          alt={project.image.alt}
          height={300}
          width={450}
          className="object-cover h-[200px] w-[320px] md:h-[400px] md:w-[600px] rounded-2xl mb-4"
          unoptimized
        />
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-2xl md:text-3xl">Tecnologias utilizadas</h2>
          <ul className="flex flex-wrap justify-center gap-5">
            {project.techs.map(({ tech, color, bgcolor }, index) => (
              <TechItem
                key={tech + index}
                name={tech}
                color={color}
                bgcolor={bgcolor}
              />
            ))}
          </ul>
        </div>
        <p className="text-justify mx-10 md:mx-20">{project.description}</p>
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-2xl md:text-3xl">Links</h2>
          <ul className="flex flex-col gap-3">
            {project.links.map(({ title, url }, index) => (
              <li className="md:text-xl" key={title + index}>
                <span className="font-bold">{title}</span>
                <div className="flex gap-1 md:gap-3 items-center">
                  <Link
                    href={url}
                    className="text-sm md:text-lg text-slate-300 underline truncate break-words max-w-[90vw]"
                    target="_blank"
                  >
                    {url}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

async function loadHome() {
  const res = await fetch(process.env.DATA_URL!)

  const home = (await res.json()) as Home

  return home
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const home = await loadHome()

  return {
    props: { home },
  }
}
