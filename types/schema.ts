import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  viewer?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer?: { __typename?: 'User', id: string, name: string } | null | undefined };


export const ViewerDocument = `
    query Viewer {
  viewer {
    id
    name
  }
}
    `;
export const useViewerQuery = <
      TData = ViewerQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: ViewerQueryVariables, 
      options?: UseQueryOptions<ViewerQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => 
    useQuery<ViewerQuery, TError, TData>(
      variables === undefined ? ['Viewer'] : ['Viewer', variables],
      fetcher<ViewerQuery, ViewerQueryVariables>(client, ViewerDocument, variables, headers),
      options
    );