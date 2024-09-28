import { TechItem } from '@/components/commons/TechItem'
import { Home } from '@/types/Home'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default async function Portfolio() {
  async function load() {
    const res = await fetch(process.env.NEXT_PUBLIC_DATA_URL!)

    const data = (await res.json()) as Home

    return data
  }

  const data = await load()

  return (
    <>
      <Head>
        <title>Portfólio | Tiago</title>
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-18">
        <h1 className="text-5xl md:text-7xl font-bold">Portfólio</h1>
        <article className="space-y-10 flex flex-col items-center xl:items-start text-center xl:text-left">
          <h2 className="text-2xl md:text-3xl">Skills</h2>
          <ul className="flex flex-wrap justify-center xl:w-fit gap-3 text-xl">
            {data.aboutMe.techs.map(({ tech, color, bgcolor }, index) => (
              <TechItem
                key={tech + index}
                name={tech}
                color={color}
                bgcolor={bgcolor}
              />
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl">Projetos</h2>

          <ul className="flex flex-wrap gap-10 md:gap-20 justify-center xl:justify-start">
            {data.projects.map(({ id, name, image }, index) => (
              <Link href={`/projects/${id}`} key={name + index}>
                <li className="text-md relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={450}
                    height={300}
                    className="object-cover rounded-2xl h-[18.75rem] mb-4"
                    unoptimized
                  />
                  <span>{name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </article>
      </div>
    </>
  )
}
