import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { AboutMe as AboutMeInterface } from '@/types'
import { TechItem } from '../commons/tech-item'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

interface AboutMeProps {
  aboutMe: AboutMeInterface
}

export function AboutMe({ aboutMe }: AboutMeProps) {
  const { title, description, profile, techs } = aboutMe

  return (
    <main
      className="flex flex-wrap-reverse justify-center items-center gap-10 
      md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between"
    >
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          {title.default}&nbsp;
          <strong className="font-bold">{title.bold}</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>{description}</h2>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          {techs.slice(0, 6).map(({ tech, color, bgcolor }) => (
            <TechItem key={tech} name={tech} color={color} bgcolor={bgcolor} />
          ))}
        </ul>
      </div>
      <div className="relative">
        <Image
          className="rounded-full"
          src={profile.image.url}
          alt={profile.image.alt}
          width={400}
          height={400}
          draggable={false}
        />
        <p className="p-4 w-fit text-base leading-tight bg-t-blue-500 rounded-xl text-black absolute -bottom-[12px]">
          {profile.role}
        </p>
      </div>
    </main>
  )
}
