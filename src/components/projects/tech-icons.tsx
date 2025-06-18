'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Technology } from '@prisma/client'

interface TechIconsProps {
  technologies: Technology[]
  className?: string
  showLabels?: boolean
}

export function TechIcons({ technologies, className, showLabels = true }: TechIconsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {technologies.map((tech) => (
        <TooltipProvider key={tech.name} delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="tech-badge">
                <img src={tech.image} alt={tech.name} className="w-4 h-4" />
                {showLabels && <span className="ml-1">{tech.name}</span>}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}
