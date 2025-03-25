import Image from 'next/image'
import { Message } from '@/types'
import { MarkdownContent } from '../shared/markdown-content'

export interface MessageBubbleProps {
  message: Message
  omitAuthor?: boolean
}

export function MessageBubble({ message, omitAuthor }: MessageBubbleProps) {
  return message.side === 'left' ? (
    <LeftBubble message={message} omitAuthor={omitAuthor} />
  ) : (
    <RightBubble message={message} omitAuthor={omitAuthor} />
  )
}

function LeftBubble({ message, omitAuthor }: MessageBubbleProps) {
  return (
    <div className="flex gap-4">
      {!omitAuthor && <Image src="/chat.svg" alt="Assistente" width={40} height={40} />}
      <div className={`flex flex-col ${omitAuthor && 'pl-16'}`}>
        {!omitAuthor && <span className="text-xs text-zinc-600">{message.author}</span>}
        <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
          <MarkdownContent markdown={message.text} />
        </div>
      </div>
    </div>
  )
}

function RightBubble({ message, omitAuthor }: MessageBubbleProps) {
  return (
    <div className={`flex flex-col items-end ${omitAuthor && 'pr-2'}`}>
      {!omitAuthor && <span className="text-xs text-zinc-600">{message.author}</span>}
      <div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
        <MarkdownContent markdown={message.text} />
      </div>
    </div>
  )
}
