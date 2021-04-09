/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloClient, InMemoryCache } from '@apollo/client';

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema');
    const schema = require('apollo/schema');

    return new SchemaLink({ schema: schema.default });
  }

  const { HttpLink } = require('@apollo/client/link/http');

  return new HttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin',
  });
}

export default new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: createIsomorphLink(),
  cache: new InMemoryCache(),
});
