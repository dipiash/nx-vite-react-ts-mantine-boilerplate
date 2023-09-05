import React from 'react'
import { describe, expect, it } from 'vitest'

import { MockedProvider } from '@apollo/client/testing'
import { MockedResponse } from '@apollo/react-testing'
import { ListRepositoriesDocument } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { act, render, screen } from '@testing-library/react'

import { getDateCondition, getLanguageCondition, getLicenseCondition, getRepositoryNameCondition, getSortCondition } from '../../../utils'
import { RepositoriesTable } from '../index'

import repositoriesListMockDataEmpty from './mocks/empty.success.json'
import repositoriesListMockDataSuccess from './mocks/result.success.json'

const queryString = [
  getSortCondition('stars'),
  getLanguageCondition('JavaScript'),
  getDateCondition(),
  getLicenseCondition(),
  getRepositoryNameCondition,
].join(' ')
const limitItems = 10

const mocks: {
  success: readonly MockedResponse[]
  empty: readonly MockedResponse[]
  error: readonly MockedResponse[]
} = {
  success: [
    {
      request: {
        query: ListRepositoriesDocument,
        variables: {
          queryString,
          first: limitItems,
        },
      },
      result: {
        data: repositoriesListMockDataSuccess,
      },
    },
  ],
  empty: [
    {
      request: {
        query: ListRepositoriesDocument,
        variables: {
          queryString,
          first: limitItems,
        },
      },
      result: {
        data: repositoriesListMockDataEmpty,
      },
    },
  ],
  error: [
    {
      request: {
        query: ListRepositoriesDocument,
      },
      error: new Error('An error occurred'),
    },
  ],
}

describe('RepositoriesTable', () => {
  it('Render loading state', async () => {
    render(
      <MockedProvider mocks={[]}>
        <RepositoriesTable queryString={queryString} limit={limitItems} />
      </MockedProvider>,
    )

    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  it('Render empty state', async () => {
    render(
      <MockedProvider mocks={mocks.empty}>
        <RepositoriesTable queryString={queryString} limit={limitItems} />
      </MockedProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.getByText('No data')).toBeTruthy()
  })

  it('Render with success response', async () => {
    render(
      <MockedProvider mocks={mocks.success}>
        <RepositoriesTable queryString={queryString} limit={limitItems} />
      </MockedProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.queryByText('Loading...')).toBeFalsy()
    expect(screen.getByText('nextjs-lit-token-gating')).toBeTruthy()
  })

  it('Render error', async () => {
    render(
      <MockedProvider mocks={mocks.error}>
        <RepositoriesTable queryString={queryString} limit={limitItems} />
      </MockedProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.getByText('Repositories list loading error.')).toBeTruthy()
  })
})
