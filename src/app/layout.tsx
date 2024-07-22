import { ThemeProvider } from '@material-tailwind/react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import PrelineScript from '@/components/PrelineScript'

const inter = Inter({ subsets: ['latin'] })

const APP_NAME = 'emza PWA'
const APP_DEFAULT_TITLE = 'emza PWA'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'emza'
const yekan = localFont({ src: '../../public/fonts/IRANYekanX-Regular.ttf' })

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={yekan.className}>
          <div className='mx-auto flex min-h-screen flex-col'>
            <main className='flex grow flex-col'>{children}</main>
          </div>
      </body>
      <PrelineScript />
    </html>
  )
}
