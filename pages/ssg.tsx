import { InferGetStaticPropsType } from 'next';
import { useIntl } from 'react-intl';

import Button from 'design-system/Button';
import ReactSVG from 'components/Icons/React';
import { withLink } from 'components/Link';

import { initializeApollo } from 'apollo/client';
import { ViewerQuery } from 'apollo/operations/viewer';
import { ViewerQuery as ViewerQueryType } from 'types/ViewerQuery';

const ButtonWithLink = withLink(Button);

export async function getStaticProps() {
  const client = initializeApollo();

  const {
    data: { viewer },
  } = await client.query<ViewerQueryType>({
    query: ViewerQuery,
  });

  return {
    props: {
      name: viewer.name,
      initialApolloState: client.cache.extract(),
    },
  };
}

export default function SSG({ name }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { formatMessage } = useIntl();

  return (
    <section className="flex flex-col justify-center items-center space-y-10">
      <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' }, { name })}</h1>
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
