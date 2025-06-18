'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Github } from 'lucide-react'

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Desenvolvedor Fullstack'

  useEffect(() => {
    if (typedText === fullText) return

    const timeout = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1))
    }, 100)

    return () => clearTimeout(timeout)
  }, [typedText, fullText])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  }

  return (
    <section className="min-h-[calc(100vh-9rem)] flex flex-col justify-center items-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUpVariants}
            custom={0}
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
              Tiago Lopes
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-6 font-medium text-muted-foreground flex"
            variants={fadeInUpVariants}
            custom={1}
          >
            <span className="mr-2">&lt;</span>
            <span className="text-primary">{typedText}</span>
            <span className="animate-blink">|</span>
            <span className="ml-2">/&gt;</span>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-lg mb-8"
            variants={fadeInUpVariants}
            custom={2}
          >
            Formado em Ciência da Computação pela Faculdade de Americana. Atualmente
            trabalhando como Desenvolvedor Backend PHP na empresa Troupe Tecnologia LTDA.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={fadeInUpVariants}
            custom={3}
          >
            <Button asChild>
              <Link href="/projects">
                Ver projetos <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="https://github.com/Tiago0Br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative neon-border rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden bg-black/30">
            <Image
              src="https://github.com/Tiago0Br.png"
              alt="Tiago Lopes"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
