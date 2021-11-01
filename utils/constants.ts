import packageJSON from 'package.json';
import getIntl from 'utils/Intl';

export const SEO = () => {
  const intl = getIntl();

  return {
    title: intl.formatMessage({ id: 'title' }),
    description: intl.formatMessage({ id: 'description' }),
  };
};

export const GITHUB_URL = packageJSON.homepage;
export const VERSION = packageJSON.version;
export const RUNNING_ENV = process.env.NODE_ENV;
export const IS_RUNNING_DEV = RUNNING_ENV === 'development';
// https://vercel.com/docs/environment-variables#system-environment-variables
export const HOST = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_HOST;
export const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
