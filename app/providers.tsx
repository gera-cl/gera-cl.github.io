'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';

export default function Providers(props: { children: ReactNode, locale: string, messages: any }) {
    return (
        <ThemeProvider attribute="class">
            <NextIntlClientProvider locale={props.locale} messages={props.messages}>
                {props.children}
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}