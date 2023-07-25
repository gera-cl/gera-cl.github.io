'use client'

import React, { Fragment } from 'react'
import { useTheme } from "next-themes";
import { Menu, Transition } from '@headlessui/react';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const ThemeButton = () => {
    const t = useTranslations("Navbar.Theme");
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const themes = [
        { 'name': t('light'), 'action': () => setTheme('light'), 'icon': <SunIcon></SunIcon> },
        { 'name': t('dark'), 'action': () => setTheme('dark'), 'icon': <MoonIcon></MoonIcon> },
        { 'name': t('system'), 'action': () => setTheme('system'), 'icon': <ComputerDesktopIcon></ComputerDesktopIcon> }
    ];

    return (
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex max-items-center rounded-full mx-2 px-1 py-1 hover:bg-slate-200 dark:hover:bg-slate-900">
                    <span className="sr-only">Open user menu</span>
                    <span className="dark:hidden"><SunIcon className="w-6 h-6 fill-sky-400/20 text-sky-500"></SunIcon></span>
                    <span className="hidden dark:inline"><MoonIcon className="w-6 h-6 fill-sky-400/20 text-sky-500"></MoonIcon></span>
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
                    {themes.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                    onClick={item.action}
                                    className={classNames(
                                        theme == item.name.toLocaleLowerCase() ? 'text-sky-500 font-semibold' : '',
                                        active ? 'bg-gray-200 dark:bg-gray-600' : '',
                                        'cursor-pointer flex px-4 py-2 text-sm'
                                    )}
                                >
                                    <div className='h-5 w-5 mr-2'>{item.icon}</div>
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ThemeButton