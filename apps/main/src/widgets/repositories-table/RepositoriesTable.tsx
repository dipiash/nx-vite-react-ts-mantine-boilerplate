import { useQuery } from '@apollo/client/react'
import React, { useMemo } from 'react'

import { ListRepositoriesDocument, type SearchResultItemEdge } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { ErrorBlock, Loader, Pagination, Space, Table } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { type RepositoriesTablePropertiesInterface, type RepositoryDataInterface } from './RepositoriesTable.types'
import { enhancedFetchMore, getPaginationParameters } from './utils'

export const RepositoriesTable = ({ limit = 10, queryString }: RepositoriesTablePropertiesInterface) => {
  const { data, error, fetchMore, loading } = useQuery(ListRepositoriesDocument, {
    variables: {
      first: limit,
      queryString: queryString,
    },
  })

  const resultData = useMemo(() => (data?.search.edges || []) as SearchResultItemEdge[], [data])

  const tableColumns = {
    name: 'Name',
    date: 'Date',
    license: 'License',
    stars: 'Stars',
  }

  const tableData = useMemo<RepositoryDataInterface[]>(
    () =>
      resultData
        .map(({ node }) =>
          node?.__typename === 'Repository'
            ? {
                name: node?.name,
                date: node?.createdAt,
                key: node?.id,
                license: node?.licenseInfo?.name,
                stars: node?.stargazers?.totalCount,
              }
            : (undefined as unknown as RepositoryDataInterface),
        )
        .filter((node): node is RepositoryDataInterface => node != undefined),
    [resultData],
  )

  const tableError = error ? <ErrorBlock text="Repositories list loading error." /> : false

  const paginationParameters = getPaginationParameters(data?.search.pageInfo)

  return (
    <Loader data-testid="repositories-list-loading" loading={loading}>
      <Table columns={tableColumns} data={tableData} error={tableError} />
      <Space h={10} />
      <Pagination
        isNextDisabled={paginationParameters.isNextDisabled}
        isPrevDisabled={paginationParameters.isPreviousDisabled}
        onNextClick={() =>
          enhancedFetchMore({
            cursorAfter: paginationParameters.cursorAfter,
            limit,
            queryString,
            fetchMore,
          })
        }
        onPrevClick={() =>
          enhancedFetchMore({
            cursorBefore: paginationParameters.cursorBefore,
            limit,
            queryString,
            fetchMore,
          })
        }
      />
    </Loader>
  )
}
