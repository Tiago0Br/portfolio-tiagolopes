import { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sobre mim | Tiago Lopes',
  description: 'Portfólio do desenvolvedor fullstack Tiago Lopes',
}

const font = Montserrat({ subsets: ['latin'] })

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
      <body className={`${font.className} antialiased text-white bg-zinc-900 dark`}>
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  )
}
