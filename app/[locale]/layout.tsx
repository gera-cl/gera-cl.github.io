import '../globals.css'
import { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/navbar'
import Providers from '../providers'
import { notFound } from 'next/navigation';

const font = Montserrat({ style: 'normal', subsets: ['latin'] })

export const metadata = {
  title: 'GH Portfolio',
  description: 'Portfolio',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'pt' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode,
  params: { locale: string }
}) {
  let dictionaries;
  try {
    dictionaries = (await import(`../dictionaries/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html className='h-full' lang={params.locale} suppressHydrationWarning>
      <body className={'h-full bg-slate-200 dark:bg-slate-900 ' + font.className} suppressHydrationWarning>
        <Providers locale={params.locale} dictionaries={dictionaries}>
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
