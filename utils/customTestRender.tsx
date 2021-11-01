import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { RawIntlProvider } from 'react-intl';

import { useCreateIntl } from './Intl';

const customTestRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions & { locale?: string; mocks: MockedResponse[] }, 'queries'>,
) => {
  const { locale = 'en', mocks = [] } = options || {};

  const AllTheProviders = ({ children }: { children: ReactElement }) => {
    const intl = useCreateIntl({ locale, defaultLocale: 'en' });

    return (
      <MockedProvider mocks={mocks}>
        <RawIntlProvider value={intl}>{children}</RawIntlProvider>
      </MockedProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customTestRender as render };
