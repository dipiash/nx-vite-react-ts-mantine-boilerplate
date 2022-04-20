import React, { useState } from 'react'
import { useDebouncedValue } from '@mantine/hooks'

import { Button } from '@nx-ts-vite-react-graphql-styled-monorepo-example/ui-kit'

import { useInputTokenForGraphql } from './hooks/useInputTokenForGraphql'

import { Header } from './componets/Header'
import { RepositoriesTable } from './componets/RepositoriesTable'
import { ApolloProviderWrapper } from './providers/ApolloProviderWrapper'
import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from './utils'

export const GithubApp = () => {
  const { isTokenExist, handleUpdateToken } = useInputTokenForGraphql()

  const [license, setLicense] = useState<string | null>()

  const [repositoryNameValue, setRepositoryName] = useState<string | null>()
  const [repositoryName] = useDebouncedValue(repositoryNameValue, 300)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryString = [
    getSortCondition('stars', 'desc'),
    getLanguageCondition('JavaScript'),
    getDateCondition(),
    getLicenseCondition(license),
    getRepositoryNameCondition(repositoryName),
  ].join(' ')

  return (
    <ApolloProviderWrapper>
      <Button onClick={handleUpdateToken}>Enter personal-access-token</Button>

      {isTokenExist && (
        <>
          <Header setLicense={setLicense} setRepositoryName={setRepositoryName} />
          <RepositoriesTable queryString={queryString} limit={10} />
        </>
      )}
    </ApolloProviderWrapper>
  )
}
