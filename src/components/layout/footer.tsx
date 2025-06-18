import Link from 'next/link'
import { Github, Linkedin, Mail, Send } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="absolute bottom-0 w-full border-t border-border/30 bg-background/80 backdrop-blur-sm py-6 mt-auto z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              Feito com ❤️ por Tiago Tavares Lopes &copy; {currentYear}
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/Tiago0Br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/tiago-tavares-lopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="mailto:tiagoltavares2002@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>

            <Link
              href="https://t.me/tiagolopesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
