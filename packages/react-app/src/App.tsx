import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { UiKit } from '@nx-ts-vite-react-graphql-styled-monorepo-example/ui-kit'
import styled from 'styled-components'
import { ApolloClient, InMemoryCache, createHttpLink, from, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GqlExampleRequest } from './GqlExampleRequest'
import { introspectionResult } from '@nx-ts-vite-react-graphql-styled-monorepo-example/data-access'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = 'ENV_BEARER_TOKEN' || localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const gqlClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
  }),
  link: from([authLink, httpLink]),
})

const Button = styled.button`
  border: none;
  padding: 15px;
  background: red;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client={gqlClient}>
      <GqlExampleRequest />
      <div className="App">
        <Button />
        <UiKit />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App
