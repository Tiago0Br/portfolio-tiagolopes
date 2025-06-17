import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 page-transition">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <div className="text-xl font-bold mb-6">Page Not Found</div>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/">
          <Home className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </Button>
    </div>
  )
}
