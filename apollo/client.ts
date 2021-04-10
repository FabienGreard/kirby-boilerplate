/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

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

function createApolloClient(): ApolloClient<Record<never, unknown>> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: Record<never, unknown> = null) {
  // eslint-disable-next-line no-underscore-dangle
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export default function useClient(initialState?: Record<never, unknown>) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
