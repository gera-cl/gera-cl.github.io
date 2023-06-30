import './globals.css'
import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/navbar'
import Providers from './providers'

const font = Montserrat({ style: 'normal', subsets: ['latin'] })

export const metadata = {
  title: 'GH Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'bg-slate-200 dark:bg-slate-900 ' + font.className} >
        <Providers>
          <Navbar />
          <main className="relative">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
