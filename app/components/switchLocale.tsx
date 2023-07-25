'use client'

import React, { Fragment } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next-intl/client'
import { Menu, Transition } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { locales } from '../localization'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SwitchLocale() {
    const router = useRouter();
    const locale = useLocale();

    return (
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex max-items-center rounded-full mx-2 px-3 py-1 hover:bg-slate-200 dark:hover:bg-slate-900 hover:font-medium">
                    <span><GlobeAltIcon className="w-6 h-6 fill-sky-400/20 text-sky-500" /></span>
                    <span className='ml-1 text-sm pt-[2px]'>{locale.toUpperCase()}</span>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-slate-100 dark:bg-slate-800 text-black dark:text-white">
                    {locales.map((item) => (
                        <Menu.Item key={item.id}>
                            {({ active }) => (
                                <a
                                    onClick={() => {
                                        router.push(`/${window.location.hash}`, { locale: item.id });
                                    }}
                                    className={classNames(
                                        item.id === locale ? 'text-sky-500 font-semibold' : '',
                                        active ? 'bg-gray-200 dark:bg-gray-600' : '',
                                        'cursor-pointer flex px-4 py-2 text-sm'
                                    )}
                                >
                                    {item.name.at(0)?.toUpperCase().concat(item.name.toLowerCase().substring(1, item.name.length))}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
