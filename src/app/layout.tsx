import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sobre mim | Tiago Lopes',
  description: 'Portfólio de projetos de desenvolvimento feitos por mim, Tiago Lopes',
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
      <body className={`${font.className} antialiased text-white bg-zinc-900`}>
        {children}
      </body>
    </html>
  )
}
