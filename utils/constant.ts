import packageJSON from 'package.json';

export const SEO = {
  title: 'Kirby Boilerplate',
  description: 'This is an opinionated boilerplate with rocking tools for front-end development.',
};

export const VERSION = packageJSON.version;
export const RUNNING_ENV = process.env.NODE_ENV;
export const IS_RUNNING_DEV = process.env.NODE_ENV === 'development';
export const IS_RUNNING_PROD = process.env.NODE_ENV === 'production';
