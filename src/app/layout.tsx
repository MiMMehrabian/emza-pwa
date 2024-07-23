'use client'
import PrelineScript from '@/components/PrelineScript'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { useEffect } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = 'emza PWA'
const APP_DEFAULT_TITLE = 'emza PWA'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'emza'
const yekan = localFont({ src: '../../public/fonts/IRANYekanX-Regular.ttf' })

// export const metadata: Metadata = {
//   applicationName: APP_NAME,
//   title: {
//     default: APP_DEFAULT_TITLE,
//     template: APP_TITLE_TEMPLATE
//   },
//   description: APP_DESCRIPTION,
//   manifest: '/manifest.json',
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: 'default',
//     title: APP_DEFAULT_TITLE
//     // startUpImage: [],
//   },
//   formatDetection: {
//     telephone: false
//   },
//   openGraph: {
//     type: 'website',
//     siteName: APP_NAME,
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE
//     },
//     description: APP_DESCRIPTION
//   },
//   twitter: {
//     card: 'summary',
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE
//     },
//     description: APP_DESCRIPTION
//   }
// }

// export const viewport: Viewport = {
//   themeColor: '#FFFFFF'
// }

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
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link
          href='splashscreens/iphone5_splash.png'
          media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphone6_splash.png'
          media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphoneplus_splash.png'
          media='(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphonex_splash.png'
          media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphonexr_splash.png'
          media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/iphonexsmax_splash.png'
          media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipad_splash.png'
          media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipadpro1_splash.png'
          media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipadpro3_splash.png'
          media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          href='splashscreens/ipadpro2_splash.png'
          media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
          rel='apple-touch-startup-image'
        />
        <link
          rel='manifest'
          href='https://progressier.app/DnZX2f3lmh60jW7tv9h2/progressier.json'
        />
        <script
          defer
          src='https://progressier.app/DnZX2f3lmh60jW7tv9h2/script.js'
        ></script>
      </head>
      <body className={yekan.className}>
        <div className='mx-auto flex min-h-screen flex-col'>
          <main className='flex grow flex-col'>{children}</main>
        </div>
      </body>
      <PrelineScript />
    </html>
  )
}
