'use client'
import localFont from 'next/font/local'
import Script from 'next/script'
import { useEffect } from 'react'

import PrelineScript from '@/components/PrelineScript'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const yekan = localFont({ src: '../../public/fonts/IRANYekanX-Medium.ttf' })

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
          <main className='flex flex-col'>{children}</main>
        </div>
        <Toaster />
      </body>
      <PrelineScript />
      <Script src='/iosPWASplash.js'></Script>
    </html>
  )
}
