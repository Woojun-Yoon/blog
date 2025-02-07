'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const TrackingProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  useEffect(() => {
    const track = async () => {
      try {
        await fetch('/api/track', { method: 'POST' })
      } catch (err) {
        console.error('Tracking error:', err)
      }
    }
    track()
  }, [pathname])

  return <>{children}</>
}

export default TrackingProvider
