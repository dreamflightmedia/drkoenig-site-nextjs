import './style.css'
import { GlobalProvider } from '../global-context'
import { NextIntlClientProvider } from 'next-intl'
import messages from '../locales/en.json'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || 'en'

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </NextIntlClientProvider>
  )
}
