import Head from 'components/Head';
import Link from 'next/link';

import { useIntl } from 'react-intl';

import { VERSION } from 'utils/constant';
import ReactSVG from 'components/Icons/React';

import * as langs from 'langs';

const Main = () => {
  const { formatMessage } = useIntl();

  return (
    <main className="flex flex-col justify-center items-center h-full space-y-10">
      <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' })}</h1>
      <ReactSVG className="animate-spin-slow w-24 h-24 md:w-32 md:h-32" />
      <p className="text-sm md:text-base">
        {formatMessage({ id: 'editingMessage' })}
        <code className="bg-yellow-100 p-1 mx-1">pages/index.js</code>
      </p>
    </main>
  );
};

const Footer = () => {
  const { formatDate } = useIntl();

  const Langs = () => (
    <div className="flex justify-center">
      {Object.keys(langs).map(lang => (
        <Link key={lang} locale={lang} href="/" passHref>
          <button
            type="button"
            className="bg-gray-100 box-border w-12 h-12 mx-0.5 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none select-none"
          >
            {lang}
          </button>
        </Link>
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
