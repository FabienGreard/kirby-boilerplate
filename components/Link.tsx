import { ComponentType } from 'react';
import Link from 'next/link';

export const withLink = <T extends Object>(Component: ComponentType<T>) => ({
  href,
  locale,
  ...props
}: T & { href: string; locale?: string }) => (
  <Link href={href} locale={locale} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="outline-none">
      <Component {...((props as unknown) as T)} />
    </a>
  </Link>
);

export default Link;
