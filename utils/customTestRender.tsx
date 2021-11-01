import { ReactElement, useState } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClientProvider, QueryClient, setLogger } from 'react-query';
import { RawIntlProvider } from 'react-intl';

import { useCreateIntl } from './Intl';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

const customTestRender = (ui: ReactElement, options?: Omit<RenderOptions & { locale?: string }, 'queries'>) => {
  const { locale = 'en' } = options || {};

  const AllTheProviders = ({ children }: { children: ReactElement }) => {
    const [queryClient] = useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
            },
          },
        }),
    );

    const intl = useCreateIntl({ locale, defaultLocale: 'en' });

    return (
      <QueryClientProvider client={queryClient}>
        <RawIntlProvider value={intl}>{children}</RawIntlProvider>
      </QueryClientProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customTestRender as render };
