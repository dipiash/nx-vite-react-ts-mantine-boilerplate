import React, { FC, useMemo } from 'react'

import { SearchResultItemEdge, useListRepositoriesQuery } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { Error, Loader, Pagination, Space, Table } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { RepositoriesTablePropertiesInterface, RepositoryDataInterface } from './RepositoriesTable.types'

import { enhancedFetchMore, getPaginationParameters } from './utils'

export const RepositoriesTable: FC<RepositoriesTablePropertiesInterface> = ({ limit, queryString }) => {
  const { data, error, fetchMore, loading } = useListRepositoriesQuery({
    variables: {
      first: limit,
      queryString: queryString,
    },
  })

  const resultData = useMemo(() => (data?.search.edges || []) as SearchResultItemEdge[], [data])

  const tableColumns = {
    date: 'Date',
    license: 'License',
    name: 'Name',
    stars: 'Stars',
  }

  const tableData = useMemo<RepositoryDataInterface[]>(
    () =>
      resultData
        .map(({ node }) =>
          node?.__typename === 'Repository'
            ? {
                date: node?.createdAt,
                key: node?.id,
                license: node?.licenseInfo && node?.licenseInfo.name,
                name: node?.name,
                stars: node?.stargazers && node?.stargazers.totalCount,
              }
            : (undefined as unknown as RepositoryDataInterface),
        )
        .filter((node): node is RepositoryDataInterface => node !== undefined),
    [resultData],
  )

  const tableError = error ? <Error text="Repositories list loading error." /> : false

  const paginationParameters = getPaginationParameters(data?.search.pageInfo)

  return (
    <Loader loading={loading} data-testid="repositories-list-loading">
      <Table columns={tableColumns} data={tableData} error={tableError} />
      <Space h={10} />
      <Pagination
        onPrevClick={() => enhancedFetchMore({ cursorBefore: paginationParameters.cursorBefore, fetchMore, limit, queryString })}
        onNextClick={() => enhancedFetchMore({ cursorAfter: paginationParameters.cursorAfter, fetchMore, limit, queryString })}
        isPrevDisabled={paginationParameters.isPreviousDisabled}
        isNextDisabled={paginationParameters.isNextDisabled}
      />
    </Loader>
  )
}

RepositoriesTable.defaultProps = {
  limit: 10,
}
