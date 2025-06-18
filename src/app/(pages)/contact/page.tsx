'use client'

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
} from '@tabler/icons-react'
import { Header } from '@/components/shared/header'
import { ContactItem } from '@/components/contact/contact-item'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Vamos conversar?</h1>
        <p className="text-gray-400 text-center">
          Estou disponível para novos desafios ou colaborações. <br /> Me mande uma mensagem!
        </p>

        <div className="flex flex-col p-4 bg-black border border-zinc-800 rounded-2xl gap-8">
          <ContactItem
            Icon={IconBrandLinkedin}
            iconColor="text-blue-500"
            link="https://www.linkedin.com/in/tiago-lopes-7ab0b71a4"
          />
          <ContactItem
            Icon={IconMail}
            iconColor="text-red-400"
            link="tiagoltavares2002@gmail.com"
            isEmail
          />
          <ContactItem
            Icon={IconBrandGithub}
            iconColor="text-white"
            link="https://github.com/Tiago0Br"
          />
          <ContactItem
            Icon={IconBrandTelegram}
            iconColor="text-cyan-400"
            link="https://t.me/tiagolopesdev"
          />
        </div>
      </main>
    </>
  )
}
