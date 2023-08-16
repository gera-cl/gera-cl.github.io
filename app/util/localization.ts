import { redirect } from 'next/navigation';

// A list of all locales that are supported
export const locales = [
    { id: 'en', name: 'english' },
    { id: 'es', name: 'español' },
    { id: 'pt', name: 'português' },
]

export const defaultLocale = 'en'

export async function getMessages(locale: string) {
    if (!locales.map(l => l.id).includes(locale)) {
        redirect(`/${defaultLocale}`)
    }

    let messages
    try {
        messages = (await import(`../messages/${locale}.json`)).default
        return messages
    } catch (error) {
        redirect(`/${defaultLocale}`)
    }
}

export function getStaticParams() {
    return locales.map((l) => ({ "locale": l.id }))
}
