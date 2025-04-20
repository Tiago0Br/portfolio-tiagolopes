'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import { Icon as IconType, IconCopy } from '@tabler/icons-react'

interface ContactItemProps {
  Icon: IconType
  iconColor: string
  link: string
  isEmail?: boolean
}

export function ContactItem({ Icon, iconColor, link, isEmail = false }: ContactItemProps) {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    toast.success('Contato copiado!')
  }

  return (
    <div className="flex items-center gap-4">
      <Icon className={`md:size-10 ${iconColor}`} />
      <Link
        href={isEmail ? `mailto:${link}` : link}
        target="_blank"
        className="flex-1 line-clamp-1 hover:text-blue-400 transition-colors"
      >
        {link}
      </Link>
      <button
        className="cursor-pointer hover:text-blue-400 transition-colors"
        onClick={() => copyToClipboard(link)}
      >
        <IconCopy />
      </button>
    </div>
  )
}
