'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import { Header } from '@/components/shared/header'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconCopy,
  IconMail,
} from '@tabler/icons-react'

export default function ContactPage() {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    toast.success('Contato copiado!')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Vamos conversar?</h1>
        <p className="text-gray-400 text-center">
          Estou disponível para novos desafios ou colaborações. <br /> Me mande uma mensagem!
        </p>

        <div className="flex flex-col p-4 bg-black border border-zinc-800 rounded-2xl gap-8">
          <div className="flex items-center gap-4">
            <IconBrandLinkedin className="md:size-10 text-blue-500" />
            <Link
              href="https://www.linkedin.com/in/tiago-lopes-7ab0b71a4"
              target="_blank"
              className="flex-1 line-clamp-1"
            >
              https://www.linkedin.com/in/tiago-lopes-7ab0b71a4
            </Link>
            <button
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() =>
                copyToClipboard('https://www.linkedin.com/in/tiago-lopes-7ab0b71a4')
              }
            >
              <IconCopy />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <IconMail className="md:size-10 text-red-400" />
            <Link
              href="mailto:tiagoltavares2002@gmail"
              target="_blank"
              className="flex-1 line-clamp-1"
            >
              tiagoltavares2002@gmail.com
            </Link>
            <button
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => copyToClipboard('tiagoltavares2002@gmail')}
            >
              <IconCopy />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <IconBrandGithub className="md:size-10" />
            <Link
              href="https://github.com/Tiago0Br"
              target="_blank"
              className="flex-1 line-clamp-1"
            >
              https://github.com/Tiago0Br
            </Link>
            <button
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => copyToClipboard('https://github.com/Tiago0Br')}
            >
              <IconCopy />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <IconBrandTelegram className="md:size-10 text-cyan-400" />
            <Link
              href="https://t.me/tiagolopesdev"
              target="_blank"
              className="flex-1 line-clamp-1"
            >
              https://t.me/tiagolopesdev
            </Link>
            <button
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => copyToClipboard('https://t.me/tiagolopesdev')}
            >
              <IconCopy />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
