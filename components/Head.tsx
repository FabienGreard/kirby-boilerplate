import NextHead from 'next/head';

import { SEO, HOST } from 'utils/constant';

interface Props {
  title?: string;
  description?: string;
}

export default function Head({ title = SEO.title, description = SEO.description }: Props) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${HOST}/images/icons-512.png`} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#fff" />
      <link rel="apple-touch-icon" href="/images/192.png" />
    </NextHead>
  );
}
