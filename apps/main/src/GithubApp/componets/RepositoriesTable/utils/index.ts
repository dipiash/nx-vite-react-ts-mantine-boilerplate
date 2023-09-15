import { PageInfo } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

export const enhancedFetchMore = ({
  cursorAfter,
  cursorBefore,
  fetchMore,
  limit,
  queryString,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchMore: any
  queryString: string
  cursorBefore?: string
  cursorAfter?: string
  limit: number
}) =>
  fetchMore({
    notifyOnNetworkStatusChange: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateQuery: (previous: any, { fetchMoreResult }: { fetchMoreResult: any }) => {
      if (!fetchMoreResult) {
        return previous
      }

      return fetchMoreResult
    },
    variables: {
      cursorAfter: cursorAfter,
      cursorBefore: cursorBefore,
      first: cursorAfter ? limit || 10 : undefined,
      last: cursorBefore ? limit || 10 : undefined,
      queryString: queryString,
    },
  })

export const getPaginationParameters = (pageInfo?: PageInfo) => ({
  cursorAfter: pageInfo?.endCursor || '',
  cursorBefore: pageInfo?.startCursor || '',
  isNextDisabled: !pageInfo?.hasNextPage,
  isPreviousDisabled: !pageInfo?.hasPreviousPage,
})
