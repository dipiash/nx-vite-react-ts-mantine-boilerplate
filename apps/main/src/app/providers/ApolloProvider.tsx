import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'
import { ApolloProvider as ApolloProviderBase } from '@apollo/client/react'
import React, { type PropsWithChildren } from 'react'

import { introspectionResult } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GITHUB_API_ENDPOINT })

const authLink = new SetContextLink((previousContext) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN || localStorage.getItem('token')

  return {
    headers: {
      ...previousContext.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const gqlClient = new ApolloClient({
  cache: new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
  }),
  link: ApolloLink.from([authLink, httpLink]),
})

export const ApolloProvider = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <ApolloProviderBase client={gqlClient}>{children}</ApolloProviderBase>
)
