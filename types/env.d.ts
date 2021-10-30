declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    DATABASE_URL: string;
    GRAPHQL_ENDPOINT: string;
  }
  type Global = NodeJS.Global;
}
