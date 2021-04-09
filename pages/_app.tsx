import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/client';

import useServiceWorker from 'hooks/useServiceWorker';
import client from 'apollo/client';

import * as locales from 'langs';

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale].default;

  useServiceWorker(true);

  return (
    <ApolloProvider client={client}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
        <Component {...pageProps} />
      </IntlProvider>
    </ApolloProvider>
  );
}
