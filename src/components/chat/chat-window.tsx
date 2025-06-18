'use client'
import Image from 'next/image'
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { IconMessages, IconReload, IconSend } from '@tabler/icons-react'
import { useChat } from '@/hooks/use-chat'
import { MessageBubble } from './message-bubble'

export function ChatWindow() {
  const { messages, thinking, addMessage, clearMessages } = useChat()
  const [text, setText] = useState('')
  const endChatRef = useRef<HTMLDivElement>(null)

  function sendMessage() {
    if (text.trim() === '') return

    addMessage(text)
    setText('')
  }

  useEffect(() => {
    endChatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
      <div className="flex justify-between items-center bg-white p-4">
        <h2 className="text-xl font-bold">Olá Visitante!</h2>
        <IconReload size={24} className="text-black cursor-pointer" onClick={clearMessages} />
      </div>
      {messages.length === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]">
          <IconMessages size={230} stroke={0.2} className="text-black/30" />
          <span>Vamos conversar?</span>
        </div>
      ) : (
        <div className="flex flex-col p-2 gap-2 min-h-[400px] sm:min-h-[500px] max-h-[400px] sm:max-h-[500px] overflow-y-scroll">
          {messages.map((message, i) => {
            const isSameAuthor = i > 0 && messages[i - 1].author === message.author
            return (
              <MessageBubble key={message.id} message={message} omitAuthor={isSameAuthor} />
            )
          })}
          {thinking && (
            <Image
              src="/thinking.gif"
              alt="Ícone de balão que indica pensamento"
              width={50}
              height={50}
            />
          )}
          <div ref={endChatRef}></div>
        </div>
      )}
      <div className="h-px bg-zinc-400 mt-4" />
      <div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white ">
        <input
          type="text"
          value={text}
          className="flex-1 bg-transparent h-8 outline-none pl-3"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value)
          }}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') sendMessage()
          }}
        />

        <button
          className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500 cursor-pointer hover:bg-red-600 transition-colors"
          onClick={sendMessage}
        >
          <IconSend className="text-white" size={18} />
        </button>
      </div>
    </div>
  )
}
