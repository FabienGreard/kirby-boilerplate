import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { IntlProvider } from 'react-intl';
import * as langs from 'langs';

const customTestRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions & { locale?: string; mocks: MockedResponse[] }, 'queries'>,
) => {
  const { locale = 'en', mocks = [] } = options || {};

  const AllTheProviders = ({ children }: { children: ReactElement }) => {
    return (
      <MockedProvider mocks={mocks}>
        <IntlProvider locale={locale} messages={langs[locale].default} defaultLocale="en">
          {children}
        </IntlProvider>
      </MockedProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customTestRender as render };
