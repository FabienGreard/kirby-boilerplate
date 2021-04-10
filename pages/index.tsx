import { useIntl } from 'react-intl';

import Button from 'design-system/Button';

import Head from 'components/Head';
import ReactSVG from 'components/Icons/React';
import { withLink } from 'components/Link';

import { ViewerQuery } from 'apollo/operations/viewer';
import { ViewerQuery as ViewerQueryType } from 'types/ViewerQuery';

import useClientQuery from 'hooks/useClientQuery';

import { VERSION } from 'utils/constant';

import * as langs from 'langs';

const ButtonWithLink = withLink(Button);

const Main = () => {
  const { formatMessage } = useIntl();
  const { data } = useClientQuery<ViewerQueryType>(ViewerQuery);

  return (
    <main className="flex flex-col justify-center items-center h-full space-y-10">
      <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' }, { name: data?.viewer?.name })}</h1>
      <ReactSVG className="animate-spin-slow w-24 h-24 md:w-32 md:h-32" />
      <p className="text-sm md:text-base">
        {formatMessage({ id: 'editingMessage' })}
        <code className="bg-yellow-100 p-1 mx-1">pages/index.js</code>
      </p>

      <div className="space-x-1">
        <ButtonWithLink href="/ssg" label="SSG" primary />
        <ButtonWithLink href="/ssr" label="SSR" primary />
      </div>
    </main>
  );
};

const Footer = () => {
  const { formatDate } = useIntl();

  const Langs = () => (
    <div className="flex justify-center space-x-1">
      {Object.keys(langs).map(lang => (
        <ButtonWithLink key={lang} locale={lang} href="/" label={lang} size="small" />
      ))}
    </div>
  );

  return (
    <footer className="text-xs md:text-sm space-y-1">
      <Langs />
      <p>{`v.${VERSION} - ${formatDate(Date.now())}`}</p>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center p-1 md:p-2">
      <Head />
      <Main />
      <Footer />
    </div>
  );
}
