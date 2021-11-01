import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_ENDPOINT } from './constants';

interface CustomNodeJsGlobal extends NodeJS.Global {
  graphQLClient: GraphQLClient;
}

declare const global: CustomNodeJsGlobal;

export const graphQLClient =
  global.graphQLClient ??
  new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

if (process.env.NODE_ENV === 'development') global.graphQLClient = graphQLClient;

export default graphQLClient;
