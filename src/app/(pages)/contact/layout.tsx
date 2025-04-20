import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatos | Tiago Lopes',
  description: 'Entre em contato comigo!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
