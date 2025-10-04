import { PageInfo } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

export const enhancedFetchMore = ({
  cursorAfter,
  cursorBefore,
  fetchMore,
  limit,
  queryString,
}: {
  cursorAfter?: string
  cursorBefore?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchMore: any
  limit: number
  queryString: string
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
  cursorAfter: pageInfo?.endCursor ?? '',
  cursorBefore: pageInfo?.startCursor ?? '',
  isNextDisabled: !pageInfo?.hasNextPage,
  isPreviousDisabled: !pageInfo?.hasPreviousPage,
})
