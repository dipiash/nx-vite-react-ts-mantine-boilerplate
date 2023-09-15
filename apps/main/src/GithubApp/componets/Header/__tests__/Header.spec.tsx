import React, { ChangeEvent } from 'react'
import { describe, expect, it, vitest } from 'vitest'

import { MockedProvider, MockedResponse } from '@apollo/react-testing'
import { ListLicensesDocument } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Header } from '../index'

import licensesListMockDataSuccess from './mocks/result.success.json'

const mocks: {
  success: readonly MockedResponse[]
  error: readonly MockedResponse[]
} = {
  error: [
    {
      error: new Error('An error occurred'),
      request: {
        query: ListLicensesDocument,
      },
    },
  ],
  success: [
    {
      request: {
        query: ListLicensesDocument,
      },
      result: {
        data: licensesListMockDataSuccess,
      },
    },
  ],
}

describe('Header', () => {
  it('success render', async () => {
    const user = userEvent.setup()

    const state = {
      license: '',
      name: '',
    }

    const handleSetRepositoryName = (event_: ChangeEvent<HTMLInputElement>) => {
      state.name = event_.target.value
    }

    const handleSetLicense = (license: string) => {
      state.license = license
    }

    render(
      <MockedProvider mocks={mocks.success}>
        <Header handleSetRepositoryName={handleSetRepositoryName} handleSetLicense={handleSetLicense} />
      </MockedProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0))) // wait for response

    const elementLoading = screen.getByTestId('licenses-select-loading')

    expect(elementLoading).toBeInTheDocument()

    // Change value in select element
    const selectElement = screen.getByTestId('licenses-select')

    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveValue('--- Not Selected ---')

    await user.click(selectElement)
    await user.click(screen.getByText('MIT License'))

    expect(state.license).toBe('mit')
    expect(selectElement).toHaveValue('MIT License')

    // Change text in input field
    const inputElement = screen.getByTestId('search-by-name')

    expect(inputElement).toBeTruthy()
    expect(inputElement).toHaveValue('')

    fireEvent.change(inputElement, { target: { value: 'react' } })

    await waitFor(() => {
      expect(inputElement).toHaveValue('react')
    })

    expect(state.name).toBe('react')
  })

  it('error render', async () => {
    render(
      <MockedProvider mocks={mocks.error}>
        <Header handleSetRepositoryName={vitest.fn} handleSetLicense={vitest.fn} />
      </MockedProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0))) // wait for response

    screen.getByText('Search by repo name')
    screen.getByText('Licenses loading error.')
  })
})
