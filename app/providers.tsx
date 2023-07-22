'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';

export default function Providers(props: { children: ReactNode, locale: string, dictionaries: any }) {
    return (
        <ThemeProvider attribute="class">
            <NextIntlClientProvider locale={props.locale} messages={props.dictionaries}>
                {props.children}
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}