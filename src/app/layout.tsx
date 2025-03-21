import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/commons/Header'
import './globals.css'

const jetbtainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Sobre mim | Tiago',
  description: 'Um pouco da minha história',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body className={`${jetbtainsMono.className} antialiased bg-t-blue-900 text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
