'use client';

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import *  as Scroll from 'react-scroll'
import ThemeButton from './themeButton'
import SwitchLocale from './switchLocale';

const navigation = [
  { id: 'home' },
  { id: 'about' },
  { id: 'resume' },
  { id: 'portfolio' },
  { id: 'contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("Navbar");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-100 dark:bg-slate-950">
      <nav className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-3" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden ml-8 lg:flex lg:gap-x-3">
          {navigation.map((item) => (
            <Scroll.Link
              key={item.id}
              activeClass='bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-white font-bold'
              className='cursor-pointer text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-900 dark:hover:text-white rounded-md px-4 py-2 text-sm font-medium'
              to={item.id}
              smooth
              spy
              hashSpy
              offset={-50}
              duration={600}
              spyThrottle={100}
            >
              {t(item.id)}
            </Scroll.Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
          <SwitchLocale />
          <ThemeButton />
        </div>
      </nav>
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog className="fixed inset-0 z-50 overflow-hidden lg:hidden" onClose={() => setMobileMenuOpen(false)}>
          <Transition.Child
            enter="transition-opacity ease-linear duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 w-5/6 overflow-y-auto bg-slate-100 dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 drop-shadow-lg">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.id}
                        href={'#' + item.id}
                        onClick={() => {
                          setMobileMenuOpen(false)
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white"
                        replace
                      >
                        {t(item.id)}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <span className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 dark:text-white'>
                      {t('Theme.switch')}
                      <div className='float-right'>
                        <ThemeButton />
                      </div>
                    </span>
                    <span className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 dark:text-white'>
                      {t('Language.switch')}
                      <div className='float-right'>
                        <SwitchLocale />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
}