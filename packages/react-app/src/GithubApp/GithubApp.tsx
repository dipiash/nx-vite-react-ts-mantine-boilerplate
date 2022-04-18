import React, { useState } from 'react'
import { useDebouncedValue } from '@mantine/hooks'

import { ApolloProviderWrapper } from './providers/ApolloProviderWrapper'
import { Header } from './Header'
import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from './utils'

export const GithubApp = () => {
  const [license, setLicense] = useState<string | null>()

  const [repositoryNameValue, setRepositoryName] = useState<string | null>()
  const [repositoryName] = useDebouncedValue(repositoryNameValue, 300)

  const queryString = [
    getSortCondition('stars', 'desc'),
    getLanguageCondition('JavaScript'),
    getDateCondition(),
    getLicenseCondition(license),
    getRepositoryNameCondition(repositoryName),
  ].join(' ')

  console.info('queryString', queryString)

  return (
    <ApolloProviderWrapper>
      <Header setLicense={setLicense} setRepositoryName={setRepositoryName} />
    </ApolloProviderWrapper>
  )
}
