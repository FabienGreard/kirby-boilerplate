import { useState } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RawIntlProvider } from 'react-intl';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import Layout from 'components/Layout';

import useServiceWorker from 'hooks/useServiceWorker';

import { useCreateIntl } from 'utils/Intl';

import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  const { locale, defaultLocale } = router;

  const intl = useCreateIntl({ locale, defaultLocale });

  useServiceWorker();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RawIntlProvider value={intl}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RawIntlProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
