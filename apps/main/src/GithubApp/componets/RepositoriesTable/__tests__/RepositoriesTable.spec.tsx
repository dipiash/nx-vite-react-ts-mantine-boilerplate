import { MockedProvider } from '@apollo/client/testing'
import { ListRepositoriesDocument } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { ThemeProvider } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'

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

const mocks = {
  empty: [
    {
      request: {
        query: ListRepositoriesDocument,
        variables: {
          first: limitItems,
          queryString,
        },
      },
      result: {
        data: repositoriesListMockDataEmpty,
      },
    },
  ],
  error: [
    {
      error: new Error('An error occurred'),
      request: {
        query: ListRepositoriesDocument,
      },
    },
  ],
  success: [
    {
      request: {
        query: ListRepositoriesDocument,
        variables: {
          first: limitItems,
          queryString,
        },
      },
      result: {
        data: repositoriesListMockDataSuccess,
      },
    },
  ],
}

describe('RepositoriesTable', () => {
  it('Render loading state', async () => {
    render(
      <ThemeProvider>
        <MockedProvider mocks={[]}>
          <RepositoriesTable limit={limitItems} queryString={queryString} />
        </MockedProvider>
      </ThemeProvider>,
    )

    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  it('Render empty state', async () => {
    render(
      <ThemeProvider>
        <MockedProvider mocks={mocks.empty}>
          <RepositoriesTable limit={limitItems} queryString={queryString} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.getByText('No data')).toBeTruthy()
  })

  it('Render with success response', async () => {
    render(
      <ThemeProvider>
        <MockedProvider mocks={mocks.success}>
          <RepositoriesTable limit={limitItems} queryString={queryString} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.getByText('nextjs-lit-token-gating')).toBeTruthy()
  })

  it('Render error', async () => {
    render(
      <ThemeProvider>
        <MockedProvider mocks={mocks.error}>
          <RepositoriesTable limit={limitItems} queryString={queryString} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)))

    expect(screen.getByText('Repositories list loading error.')).toBeTruthy()
  })
})
