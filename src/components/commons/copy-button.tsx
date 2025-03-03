'use client'

import { toast } from 'sonner'
import { Files } from 'lucide-react'

interface CopyButtonProps {
  textToCopy: string
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
  }

  return (
    <>
      <button
        className="inline-flex justify-center items-center"
        onClick={() => {
          handleCopy()
          toast.success('Contato copiado!')
        }}
      >
        <span title="Copiar contato">
          <Files size={20} />
        </span>
      </button>
    </>
  )
}
