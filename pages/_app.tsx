import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/client';

import Layout from 'components/Layout';

import useServiceWorker from 'hooks/useServiceWorker';
import useClient from 'apollo/client';

import * as locales from 'langs';

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale].default;

  const apolloClient = useClient(pageProps.initialApolloState);

  useServiceWorker();

  return (
    <ApolloProvider client={apolloClient}>
      <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ApolloProvider>
  );
}
