import { useMemo } from 'react';
import { createIntl, IntlShape, createIntlCache, IntlConfig } from 'react-intl';

import * as locales from 'langs';

interface CustomNodeJsGlobal extends NodeJS.Global {
  intl: IntlShape;
}

declare const global: CustomNodeJsGlobal;

const globalIntlCache = createIntlCache();

export const useCreateIntl = ({ locale, defaultLocale }: IntlConfig) =>
  useMemo(() => {
    global.intl = createIntl({ locale, defaultLocale, messages: locales[locale].default }, globalIntlCache);

    return global.intl;
  }, [locale, defaultLocale]);

export const getIntl = () => {
  const intl =
    global.intl ?? createIntl({ locale: 'en', defaultLocale: 'en', messages: locales['en'].default }, globalIntlCache);

  global.intl = intl;

  return intl;
};

export default getIntl;
