'use client'

import {useTranslations} from 'next-intl';
import Resume from "../home/resume";
import About from "../home/about";
import Portfolio from "../home/portfolio";
import Contact from "../home/contact";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <h1 className='pt-48'>{t('example')}</h1>
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}
