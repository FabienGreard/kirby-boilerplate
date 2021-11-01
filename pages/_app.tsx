import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RawIntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/client';

import Layout from 'components/Layout';

import useServiceWorker from 'hooks/useServiceWorker';
import useClient from 'apollo/client';
import { useIntl } from 'utils/Intl';

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const intl = useIntl({ locale, defaultLocale });

  const apolloClient = useClient(pageProps.initialApolloState);

  useServiceWorker();

  return (
    <ApolloProvider client={apolloClient}>
      <RawIntlProvider value={intl}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RawIntlProvider>
    </ApolloProvider>
  );
}
