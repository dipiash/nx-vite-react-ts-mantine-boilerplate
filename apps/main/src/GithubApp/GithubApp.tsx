import React, { ChangeEvent, useCallback, useState } from 'react'

import { useDebouncedValue } from '@mantine/hooks'
import { Button } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { useInputTokenForGraphql } from './hooks/useInputTokenForGraphql'

import { Header } from './componets/Header'
import { RepositoriesTable } from './componets/RepositoriesTable'
import { ApolloProviderWrapper } from './providers/ApolloProviderWrapper'
import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from './utils'

export const GithubApp = () => {
  const { isTokenExist, handleUpdateToken } = useInputTokenForGraphql()

  const [license, setLicense] = useState<string>('')

  const [repositoryNameValue, setRepositoryName] = useState<string>('')
  const [repositoryName] = useDebouncedValue(repositoryNameValue, 300)

  const queryString = [
    getSortCondition('stars', 'desc'),
    getLanguageCondition('JavaScript'),
    getDateCondition(),
    getLicenseCondition(license),
    getRepositoryNameCondition(repositoryName),
  ].join(' ')

  const handleSetRepositoryName = useCallback((event_: ChangeEvent<HTMLInputElement>) => {
    setRepositoryName(event_.target.value)
  }, [])

  const handleSetLicense = useCallback((license: string) => {
    setLicense(license)
  }, [])

  return (
    <ApolloProviderWrapper>
      <Button onClick={handleUpdateToken}>Enter personal-access-token</Button>

      {isTokenExist && (
        <>
          <Header handleSetLicense={handleSetLicense} handleSetRepositoryName={handleSetRepositoryName} />
          <RepositoriesTable queryString={queryString} limit={10} />
        </>
      )}
    </ApolloProviderWrapper>
  )
}

GithubApp.whyDidYouRender = true
