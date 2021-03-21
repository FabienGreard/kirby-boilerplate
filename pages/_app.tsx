import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';

import * as locales from 'langs';

import 'tailwindcss/tailwind.css';
import useServiceWorker from 'hooks/useServiceWorker';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale].default;

  useServiceWorker();

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
