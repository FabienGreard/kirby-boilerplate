import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import * as langs from 'langs';

const customTestRender = (ui: ReactElement, options?: Omit<RenderOptions & { locale: string }, 'queries'>) => {
  const { locale } = options;

  const AllTheProviders = ({ children }: { children: ReactElement }) => {
    return (
      <IntlProvider locale={locale} messages={langs[locale].default} defaultLocale="en">
        {children}
      </IntlProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customTestRender as render };
