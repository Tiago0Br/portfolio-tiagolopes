'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative rounded-lg neon-border">
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          priority
          className="object-cover"
        />

        {/* Navigation Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm z-10 rounded-full hover:bg-background/50"
          onClick={(e) => {
            e.stopPropagation()
            prevSlide()
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm z-10 rounded-full hover:bg-background/50"
          onClick={(e) => {
            e.stopPropagation()
            nextSlide()
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-background/30 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Fullscreen Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-background/30 backdrop-blur-sm rounded-full hover:bg-background/50"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-background/90 backdrop-blur-md border-muted">
            <div className="relative aspect-video">
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-24 flex-shrink-0 rounded overflow-hidden transition-all ${
                currentIndex === index ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
