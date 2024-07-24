'use client'
import { useEffect } from 'react'
import Script from 'next/script'
import localFont from 'next/font/local'

import PrelineScript from '@/components/PrelineScript'

const yekan = localFont({ src: '../../public/fonts/IRANYekanX-Regular.ttf' })
import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log(
            'Service Worker registered with scope:',
            registration.scope
          )
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])
  return (
    <html lang='en'>
      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#4B8DDE' />
      <link rel='apple-touch-icon' sizes='512x512' href='/images/emza.png' />
      <link rel='apple-touch-icon' sizes='192x192' href='/images/emza.png' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-title' content='امضا' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />

      <body className={yekan.className}>
        <div className='mx-auto flex min-h-screen flex-col'>
          <main className='flex grow flex-col'>{children}</main>
        </div>
      </body>
      <PrelineScript />
      <Script src='/iosPWASplash.js'></Script>
    </html>
  )
}
