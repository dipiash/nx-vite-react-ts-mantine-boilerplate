import { PageInfo } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

export const enhancedFetchMore = ({
  cursorAfter,
  cursorBefore,
  limit,
  queryString,
  fetchMore,
}: {
  cursorAfter?: string
  cursorBefore?: string
  limit: number
  queryString: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchMore: any
}) =>
  fetchMore({
    notifyOnNetworkStatusChange: true,
    variables: {
      cursorAfter: cursorAfter,
      cursorBefore: cursorBefore,
      first: cursorAfter ? limit || 10 : undefined,
      last: cursorBefore ? limit || 10 : undefined,
      queryString: queryString,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateQuery: (previous: any, { fetchMoreResult }: { fetchMoreResult: any }) => {
      if (!fetchMoreResult) {
        return previous
      }

      return fetchMoreResult
    },
  })

export const getPaginationParameters = (pageInfo?: PageInfo) => ({
  cursorAfter: pageInfo?.endCursor ?? '',
  cursorBefore: pageInfo?.startCursor ?? '',
  isNextDisabled: !pageInfo?.hasNextPage,
  isPreviousDisabled: !pageInfo?.hasPreviousPage,
})
