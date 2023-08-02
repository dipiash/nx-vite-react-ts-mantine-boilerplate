import React, { FC, useMemo } from 'react'

import { SearchResultItemEdge, useListRepositoriesQuery } from '@nx-vite-react-ts-mantine-boilerplate/data-access'
import { Error, Loader, Pagination, Space, Table } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { IRepositoriesTableProperties, IRepositoryData } from './RepositoriesTable.types'

import { enhancedFetchMore, getPaginationParameters } from './utils'

export const RepositoriesTable: FC<IRepositoriesTableProperties> = ({ queryString, limit }) => {
  const { data, error, loading, fetchMore } = useListRepositoriesQuery({
    variables: {
      queryString: queryString,
      first: limit,
    },
  })

  const resultData = useMemo(() => (data?.search.edges || []) as SearchResultItemEdge[], [data])

  const tableColumns = {
    name: 'Name',
    stars: 'Stars',
    license: 'License',
    date: 'Date',
  }

  const tableData = useMemo<IRepositoryData[]>(
    () =>
      resultData
        .map(({ node }) =>
          node?.__typename === 'Repository'
            ? {
                key: node?.id,
                name: node?.name,
                stars: node?.stargazers && node?.stargazers.totalCount,
                license: node?.licenseInfo && node?.licenseInfo.name,
                date: node?.createdAt,
              }
            : (undefined as unknown as IRepositoryData),
        )
        .filter((node): node is IRepositoryData => node !== undefined),
    [resultData],
  )

  const tableError = error ? <Error text="Repositories list loading error." /> : false

  const paginationParameters = getPaginationParameters(data?.search.pageInfo)

  return (
    <Loader loading={loading} data-testid="repositories-list-loading">
      <Table columns={tableColumns} data={tableData} error={tableError} />
      <Space h={10} />
      <Pagination
        onPrevClick={() => enhancedFetchMore({ fetchMore, queryString, cursorBefore: paginationParameters.cursorBefore, limit })}
        onNextClick={() => enhancedFetchMore({ fetchMore, queryString, cursorAfter: paginationParameters.cursorAfter, limit })}
        isPrevDisabled={paginationParameters.isPreviousDisabled}
        isNextDisabled={paginationParameters.isNextDisabled}
      />
    </Loader>
  )
}

RepositoriesTable.defaultProps = {
  limit: 10,
}
