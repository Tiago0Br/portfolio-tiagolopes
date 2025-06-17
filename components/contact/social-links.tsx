'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const contactLinks = [
  {
    name: 'GitHub',
    icon: <Github className="h-8 w-8" />,
    href: 'https://github.com/Tiago0Br',
    username: 'Tiago0Br',
    description: 'Check out my code repositories and open-source contributions',
    color: 'from-[#2b3137] to-[#1b1f23]',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-8 w-8" />,
    href: 'https://linkedin.com/in/',
    username: 'Tiago Lopes',
    description: 'Connect with me professionally',
    color: 'from-[#0077b5] to-[#0a66c2]',
  },
  {
    name: 'Email',
    icon: <Mail className="h-8 w-8" />,
    href: 'mailto:email@example.com',
    username: 'email@example.com',
    description: 'Send me an email',
    color: 'from-primary to-primary/70',
  },
  {
    name: 'Telegram',
    icon: <Send className="h-8 w-8" />,
    href: 'https://t.me/',
    username: '@tiago_lopes',
    description: 'Message me directly',
    color: 'from-[#0088cc] to-[#28a8ea]',
  },
]

export const SocialLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactLinks.map((link, index) => (
        <motion.div
          key={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="gamer-card h-full transition-all hover:transform hover:scale-105">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-10 rounded-lg`}
              ></div>

              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </CardTitle>
                <CardDescription className="font-mono">{link.username}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
