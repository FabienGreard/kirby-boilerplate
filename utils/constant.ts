import packageJSON from 'package.json';

export const SEO = {
  title: 'Kirby Boilerplate',
  description: 'This is an opinionated boilerplate with rocking tools for front-end development.',
};

export const GITHUB_URL = packageJSON.homepage;
export const VERSION = packageJSON.version;
export const RUNNING_ENV = process.env.NODE_ENV;
export const IS_RUNNING_DEV = RUNNING_ENV === 'development';
// https://vercel.com/docs/environment-variables#system-environment-variables
export const HOST = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_HOST;
