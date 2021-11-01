import { dehydrate, QueryClient } from 'react-query';
import { useIntl } from 'react-intl';

import Button from 'design-system/Button';

import ReactSVG from 'components/Icons/React';
import { withLink } from 'components/Link';

import VIEWER_QUERY from 'operations/queries/viewer';
import { useViewerQuery } from 'types/schema';

import graphQLClient from 'utils/graphQLClient';

const ButtonWithLink = withLink(Button);

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('viewer', () => graphQLClient.request(VIEWER_QUERY));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function SSG() {
  const { formatMessage } = useIntl();

  const { data } = useViewerQuery(graphQLClient);

  return (
    <section className="flex flex-col justify-center items-center space-y-10">
      <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' }, { name: data?.viewer?.name })}</h1>
      <ReactSVG className="animate-spin-slow w-24 h-24 md:w-32 md:h-32" />
      <p className="text-sm md:text-base">
        {formatMessage({ id: 'editingMessage' })}
        <code className="bg-yellow-100 p-1 mx-1">pages/index.js</code>
      </p>

      <div className="flex space-x-1">
        <ButtonWithLink href="/" label="CSR" primary />
        <ButtonWithLink href="/ssr" label="SSR" primary />
      </div>
    </section>
  );
}
