import { redirect } from 'next/navigation'
import * as localization from './util/localization'

// Redirect the user to the default locale when the app root is requested
export default function RootPage() {
  redirect(`/${localization.defaultLocale}`);
}