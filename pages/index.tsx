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
        <h1 className="text-4xl my-6 md:text-6xl">{formatMessage({ id: 'greetings' })}</h1>
        <ReactSVG className="animate-spin-slow w-24 h-24 md:w-32 md:h-32" />
        <p className="text-sm md:text-base">
          {formatMessage({ id: 'editingMessage' })}
          <code className="bg-yellow-100 p-1 mx-1">pages/index.js</code>
        </p>
      </main>
      <footer className="flex items-center justify-center h-10">
        <span className="text-xs md:text-sm">{`v.${VERSION} - ${formatDate(Date.now())}`}</span>
      </footer>
    </div>
  );
}
