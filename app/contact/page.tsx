import { Metadata } from 'next'
import { SocialLinks } from '@/components/contact/social-links'

export const metadata: Metadata = {
  title: 'Contact | Tiago Lopes',
  description: 'Get in touch with Tiago Lopes',
}

export default function ContactPage() {
  return (
    <div className="py-12 page-transition">
      <h1 className="page-title">Contact Me</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-center text-muted-foreground mb-10">
          Interested in working together or have any questions? Feel free to reach out through
          any of the following platforms:
        </p>

        <SocialLinks />
      </div>
    </div>
  )
}
