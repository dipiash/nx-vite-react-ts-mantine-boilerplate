import { Button } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React from 'react'

import { useForm } from '@mantine/form'
import { useDebouncedValue } from '@mantine/hooks'

import { ApolloProvider } from '../../app/providers'
import { useGitHubToken } from '../../shared/auth'
import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from '../../shared/search/lib'
import { Header } from '../../widgets/header'
import { RepositoriesTable } from '../../widgets/repositories-table'

const Page = () => {
  const { handleUpdateToken, isTokenExist } = useGitHubToken()

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
    <ApolloProvider>
      <Button onClick={handleUpdateToken}>Enter personal-access-token</Button>
      {isTokenExist && (
        <>
          <Header form={form} />
          <RepositoriesTable limit={10} queryString={queryString} />
        </>
      )}
    </ApolloProvider>
  )
}

export default Page
