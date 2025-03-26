import { useState } from 'react'
import { Message } from '@/types'
import { generateId } from '@/utils/generate-id'
import { sendMessage } from '@/actions/send-message'
import { useLocalStorage } from './use-localstorage'

export function useChat() {
  const [chatId] = useLocalStorage<string>('chatId', generateId())
  const [messages, setMessages] = useLocalStorage<Message[]>('messages', [])
  const [thinking, setThinking] = useState(false)

  async function addMessage(text: string) {
    try {
      setThinking(true)
      const newMessage: Message = {
        id: generateId(),
        text,
        author: 'Visitante',
        side: 'right',
      }

      setMessages((msgs) => [...msgs, newMessage])

      const response = await sendMessage(chatId, newMessage)

      if (!response) return

      const responseMessage: Message = {
        id: generateId(),
        text: response,
        author: 'Assistente',
        side: 'left',
      }

      setMessages((msgs) => [...msgs, responseMessage])
    } finally {
      setThinking(false)
    }
  }

  function clearMessages() {
    setMessages([])
  }

  return {
    chatId,
    messages,
    thinking,
    addMessage,
    clearMessages,
  }
}
