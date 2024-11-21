import { useForm } from '@mantine/form'
import { useDebouncedValue } from '@mantine/hooks'
import { Button } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React from 'react'

import { Header } from './componets/Header'
import { RepositoriesTable } from './componets/RepositoriesTable'
import { useInputTokenForGraphql } from './hooks/useInputTokenForGraphql'
import { ApolloProviderWrapper } from './providers/ApolloProviderWrapper'
import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from './utils'

export const GithubApp = () => {
  const { isTokenExist, handleUpdateToken } = useInputTokenForGraphql()

  const form = useForm({
    initialValues: {
      license: ' ',
      repositoryName: '',
    },
  })
  const license = form.values.license
  const repositoryNameValue = form.values.repositoryName

  const [repositoryName] = useDebouncedValue(repositoryNameValue, 300)

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
          <Header form={form} />
          <RepositoriesTable limit={10} queryString={queryString} />
        </>
      )}
    </ApolloProviderWrapper>
  )
}

GithubApp.whyDidYouRender = true
