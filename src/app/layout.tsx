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
      <link rel='manifest' href='/manifest.json' />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png'
        media='(device-width: 568px) and (device-height: 320px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait'
        media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/8.3__iPad_Mini_landscape.png'
        media='(device-width: 1024px) and (device-height: 768px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/8.3__iPad_Mini_portrait.png'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png'
        media='(device-width: 1024px) and (device-height: 768px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/10.2__iPad_landscape.png'
        media='(device-width: 1024px) and (device-height: 768px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/10.2__iPad_portrait.png'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/10.5__iPad_Air_landscape.png'
        media='(device-width: 1112px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/10.5__iPad_Air_portrait.png'
        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/11__iPad_Pro__10.5__iPad_Pro_landscape.png'
        media='(device-width: 1194px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/11__iPad_Pro__10.5__iPad_Pro_portrait.png'
        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/11__iPad_Pro_M4_landscape.png'
        media='(device-width: 1194px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/11__iPad_Pro_M4_portrait.png'
        media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/12.9__iPad_Pro_landscape.png'
        media='(device-width: 1366px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/12.9__iPad_Pro_portrait.png'
        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/11__iPad_Pro_M4_landscape.png'
        media='(device-width: 1366px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/13__iPad_Pro_M4_portrait.png'
        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png'
        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png'
        media='(device-width: 667px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png'
        media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png'
        media='(device-width: 736px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_11__iPhone_XR_landscape.png'
        media='(device-width: 828px) and (device-height: 1792px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_11__iPhone_XR_portrait.png'
        media='(device-width: 1792px) and (device-height: 828px) and (-webkit-device-pixel-ratio: 2)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png'
        media='(device-width: 1242px) and (device-height: 2688px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png'
        media='(device-width: 2688px) and (device-height: 1242px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape'
        media='(device-width: 2688px) and (device-height: 1242px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png'
        media='(device-width: 812px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png'
        media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png'
        media='(device-width: 844px) and (device-height: 390px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png'
        media='(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png'
        media='(device-width: 932px) and (device-height: 430px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape'
        media='(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait'
        media='(device-width: 932px) and (device-height: 430px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape'
        media='(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)'
      />
      <link
        rel='apple-touch-startup-image'
        href='splashscreens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png'
        media='(device-width: 932px) and (device-height: 430px) and (-webkit-device-pixel-ratio: 3)'
      />
      <body className={yekan.className}>
        <div className='mx-auto flex min-h-screen flex-col'>
          <main className='flex grow flex-col'>{children}</main>
        </div>
      </body>
      <PrelineScript />
    </html>
  )
}
