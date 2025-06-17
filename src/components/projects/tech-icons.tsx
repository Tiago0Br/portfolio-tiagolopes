'use client'

import { Technology } from '@/lib/data/projects'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface TechIconsProps {
  technologies: Technology[]
  className?: string
  showLabels?: boolean
}

export const TechIcons = ({ technologies, className, showLabels = false }: TechIconsProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {technologies.map((tech) => (
        <TooltipProvider key={tech.name} delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="tech-badge">
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}`}
                  alt={tech.name}
                  className="w-4 h-4"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
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
