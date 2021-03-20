import Head from 'next/head';

import { SEO } from 'utils/constant';

interface HeaderProps {
  title?: string;
  description?: string;
}

export default function Header({ title = SEO.title, description = SEO.description }: HeaderProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
