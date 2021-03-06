import { ComponentType, memo } from 'react';
import Link from 'next/link';

export const withLink = <T extends Record<never, unknown>>(Component: ComponentType<T>) => {
  const withLink = ({ href, locale, ...props }: T & { href: string; locale?: string }) => (
    <Link href={href} locale={locale} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="outline-none">
        <Component {...(props as unknown as T)} />
      </a>
    </Link>
  );

  withLink.displayName = `WithLink(${Component.displayName ?? Component.name})`;
  return memo(withLink);
};

export default Link;
