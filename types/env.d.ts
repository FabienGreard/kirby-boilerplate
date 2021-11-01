declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_HOST: string;
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;
    NEXT_PUBLIC_VERCEL_URL: string;
  }
  type Global = NodeJS.Global;
}
