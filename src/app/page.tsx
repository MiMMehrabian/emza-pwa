'use client'
import SplashScreen from '@/components/splashScreen'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if (loader) {
        setTimeout(() => {
          loader.style.display = 'none'
        }, 2000)
      }
    }
  }, [])
  return (
    <div className='container flex flex-col items-center'>
      <SplashScreen />
      asd
    </div>
  )
}
