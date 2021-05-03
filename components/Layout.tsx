import { useIntl } from 'react-intl';

import Head from 'components/Head';
import GithubSVG from 'components/Icons/Github';
import { withLink } from 'components/Link';

import Button from 'design-system/Button';

import { VERSION, GITHUB_URL } from 'utils/constant';

import * as langs from 'langs';

const ButtonWithLink = withLink(Button);

const Header = () => {
  const { formatMessage } = useIntl();

  return (
    <header>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer">
        <Button
          label={formatMessage({ id: 'githubLinkMessage' })}
          icon={<GithubSVG size={24} />}
          size="small"
          className="space-x-2"
          primary
        />
      </a>
    </header>
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

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen items-center justify-between p-1 md:p-2">
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
