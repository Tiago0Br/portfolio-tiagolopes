import { ButtonChat } from '@/components/chat/button-chat'

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <ButtonChat />
    </div>
  )
}
