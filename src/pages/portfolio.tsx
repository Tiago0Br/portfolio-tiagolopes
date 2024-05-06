import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { Home } from '@/types/Home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioProps {
  data: Home
}

export default function Portfolio({ data }: PortfolioProps) {
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
              <li
                key={tech + index}
                style={{ backgroundColor: bgcolor, color: color }}
                className="w-fit p-2 rounded-md"
              >
                {tech}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl">Projetos</h2>

          <ul className="flex flex-wrap gap-10 md:gap-20 justify-center xl:justify-start">
            {data.projects.map(({ name, slug, image }, index) => (
              <Link href={slug} key={name + index} target="_blank">
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

async function load() {
  const res = await fetch(process.env.DATA_URL!)

  const data = (await res.json()) as Home

  return data
}

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  const data = await load()

  return {
    props: { data },
  }
}
