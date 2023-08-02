import { PageInfo } from '@nx-ts-vite-react-graphql-styled-monorepo-example/data-access'

export const enhancedFetchMore = ({
  fetchMore,
  queryString,
  cursorBefore,
  cursorAfter,
  limit,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchMore: any
  queryString: string
  cursorBefore?: string
  cursorAfter?: string
  limit: number
}) => {
  return fetchMore({
    variables: {
      queryString: queryString,
      cursorBefore: cursorBefore,
      cursorAfter: cursorAfter,
      last: cursorBefore ? limit || 10 : undefined,
      first: cursorAfter ? limit || 10 : undefined,
    },
    notifyOnNetworkStatusChange: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateQuery: (previous: any, { fetchMoreResult }: { fetchMoreResult: any }) => {
      if (!fetchMoreResult) {
        return previous
      }

      return fetchMoreResult
    },
  })
}

export const getPaginationParameters = (pageInfo?: PageInfo) => {
  return {
    cursorBefore: pageInfo?.startCursor || '',
    cursorAfter: pageInfo?.endCursor || '',
    isPreviousDisabled: !pageInfo?.hasPreviousPage,
    isNextDisabled: !pageInfo?.hasNextPage,
  }
}
