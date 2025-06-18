import { Metadata } from 'next'
import { SocialLinks } from '@/components/contact/social-links'

export const metadata: Metadata = {
  title: 'Contatos | Tiago Lopes',
  description: 'Entre em contato comigo!',
}

export default function ContactPage() {
  return (
    <div className="py-12 page-transition">
      <h1 className="page-title">Contatos</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-muted-foreground mb-10">Vamos fazer networking?</p>

        <SocialLinks />
      </div>
    </div>
  )
}
