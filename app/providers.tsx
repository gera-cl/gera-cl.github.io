'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from "react";

export default function Providers(props: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            {props.children}
        </ThemeProvider>
    );
}