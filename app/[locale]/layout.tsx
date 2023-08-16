import '../globals.css'
import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import Navbar from '@/app/components/navbar'
import Providers from '../providers'
import * as localization from '../util/localization'

const font = Montserrat({ style: 'normal', subsets: ['latin'] })

export const metadata = {
  title: 'German Hernandez',
  description: 'German Hernandez - Portfolio',
}

export function generateStaticParams() {
  return localization.getStaticParams();
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode,
  params: { locale: string }
}) {
  const messages = await localization.getMessages(params.locale)

  return (
    <html className='h-full' lang={params.locale} suppressHydrationWarning>
      <body className={'h-full bg-slate-200 dark:bg-slate-900 ' + font.className} suppressHydrationWarning>
        <Providers locale={params.locale} messages={messages}>
          <div className="min-h-full">
            <Navbar />
            <main className="relative">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
