import Header from 'components/Header';
import { useIntl } from 'react-intl';

import { VERSION } from 'utils/constant';

import ReactSVG from 'components/Icons/React';

export default function Home() {
  const { formatMessage, formatDate } = useIntl();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center w-screen h-full space-y-10">
        <h1 className="text-6xl my-6">{formatMessage({ id: 'greetings' })}</h1>
        <ReactSVG className="animate-spin-slow" size={128} />
        <p className="text-sm">
          {formatMessage({ id: 'editingMessage' })}
          <code className="bg-yellow-100 px-1">pages/index.js</code>
        </p>
      </main>
      <footer className="flex items-center justify-center h-10">
        <span className="text-sm">{`v.${VERSION} - ${formatDate(Date.now())}`}</span>
      </footer>
    </div>
  );
}
