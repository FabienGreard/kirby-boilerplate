import { useIntl } from 'react-intl';

import Button from 'design-system/Button';

import ReactSVG from 'components/Icons/React';
import { withLink } from 'components/Link';

import { ViewerQuery } from 'apollo/operations/viewer';
import { ViewerQuery as ViewerQueryType } from 'types/ViewerQuery';

import useClientQuery from 'hooks/useClientQuery';

const ButtonWithLink = withLink(Button);

export default function CSR() {
  const { formatMessage } = useIntl();
  const { data } = useClientQuery<ViewerQueryType>(ViewerQuery);

  return (
    <section className="flex flex-col justify-center items-center h-full space-y-10">
      <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' }, { name: data?.viewer?.name })}</h1>
      <ReactSVG className="animate-spin-slow w-24 h-24 md:w-32 md:h-32" />
      <p className="text-sm md:text-base">
        {formatMessage({ id: 'editingMessage' })}
        <code className="bg-yellow-100 p-1 mx-1">pages/index.js</code>
      </p>

      <div className="flex space-x-1">
        <ButtonWithLink href="/ssg" label="SSG" primary />
        <ButtonWithLink href="/ssr" label="SSR" primary />
      </div>
    </section>
  );
}
