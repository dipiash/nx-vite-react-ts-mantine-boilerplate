import React, { FC, PropsWithChildren } from 'react'
import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { introspectionResult } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GITHUB_API_ENDPOINT,
})

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN || localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const gqlClient = new ApolloClient({
  uri: import.meta.env.VITE_GITHUB_API_ENDPOINT,
  cache: new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
  }),
  link: from([authLink, httpLink]),
})

export const ApolloProviderWrapper: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return <ApolloProvider client={gqlClient}>{children}</ApolloProvider>
}
