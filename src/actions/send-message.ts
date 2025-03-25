'use server'

import { Message } from '@/types'

export async function sendMessage(chatId: string, message: Message): Promise<string | null> {
  const webhookUrl = process.env.CHAT_WEBHOOK!

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chatId,
      message: message.text,
    }),
  })

  const msg = await response.json()
  return msg.response
}
