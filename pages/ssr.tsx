import Head from 'components/Head';
import { useIntl } from 'react-intl';

import Button from 'design-system/Button';

import ReactSVG from 'components/Icons/React';
import { withLink } from 'components/Link';

import client from 'apollo/client';
import { ViewerQuery } from 'apollo/operations/viewer';
import { ViewerQuery as ViewerQueryType } from 'types/ViewerQuery';

import { VERSION } from 'utils/constant';

import * as langs from 'langs';

const ButtonWithLink = withLink(Button);

const Main = ({ name }: { name: string }) => {
  const { formatMessage } = useIntl();

  return (
    <main className="flex flex-col justify-center items-center h-full space-y-10">
      <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' }, { name })}</h1>
      <ReactSVG className="animate-spin-slow w-24 h-24 md:w-32 md:h-32" />
      <p className="text-sm md:text-base">
        {formatMessage({ id: 'editingMessage' })}
        <code className="bg-yellow-100 p-1 mx-1">pages/index.js</code>
      </p>

      <div className="space-x-1">
        <ButtonWithLink href="/" label="CSR" primary />
        <ButtonWithLink href="/ssg" label="SSG" primary />
      </div>
    </main>
  );
};

const Footer = () => {
  const { formatDate } = useIntl();

  const Langs = () => (
    <div className="flex justify-center space-x-1">
      {Object.keys(langs).map(lang => (
        <ButtonWithLink key={lang} locale={lang} href="/" label={lang} />
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

export default function Home({ name }: { name: string }) {
  return (
    <div className="flex flex-col h-screen items-center p-1 md:p-2">
      <Head />
      <Main name={name} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const {
    data: { viewer },
  } = await client.query<ViewerQueryType>({
    query: ViewerQuery,
  });

  return {
    props: {
      name: viewer.name,
    },
  };
}
