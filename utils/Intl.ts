import { useMemo } from 'react';
import { createIntl, IntlShape, createIntlCache, IntlConfig } from 'react-intl';

import * as locales from 'langs';

interface CustomNodeJsGlobal extends NodeJS.Global {
  intl: IntlShape;
}

declare const global: CustomNodeJsGlobal;

const globalIntlCache = createIntlCache();

let intl =
  global.intl ?? createIntl({ locale: 'en', defaultLocale: 'en', messages: locales['en'].default }, globalIntlCache);

global.intl = intl;

export const useIntl = ({ locale, defaultLocale }: IntlConfig) => {
  return useMemo(() => {
    intl = createIntl({ locale, defaultLocale, messages: locales[locale].default }, globalIntlCache);
    global.intl = intl;

    return intl;
  }, [locale, defaultLocale]);
};

export default function getIntl() {
  return intl;
}
