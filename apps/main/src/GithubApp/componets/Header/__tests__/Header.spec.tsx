import { MockedProvider, MockedResponse } from '@apollo/react-testing'
import { useForm } from '@mantine/form'
import { ListLicensesDocument } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { ThemeProvider } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import React from 'react'
import { describe, expect, it } from 'vitest'

import { Header } from '../index'
import licensesListMockDataSuccess from './mocks/result.success.json'

const mocks: {
  error: readonly MockedResponse[]
  success: readonly MockedResponse[]
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

    const { result: formHookReference } = renderHook(() =>
      useForm<{
        license: string
        repositoryName: string
      }>({
        initialValues: {
          license: '',
          repositoryName: '',
        },
      }),
    )

    render(
      <ThemeProvider>
        <MockedProvider mocks={mocks.success}>
          <Header form={formHookReference.current} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0))) // wait for response

    const elementLoading = screen.getByTestId('licenses-select-loading')

    expect(elementLoading).toBeInTheDocument()

    // Change value in select element
    const selectElement = screen.getByTestId('licenses-select')

    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveValue('')

    await user.click(selectElement)
    await user.click(screen.getByText('MIT License'))

    expect(formHookReference.current.values.license).toBe('mit')

    // Change text in input field
    const inputElement = screen.getByTestId('search-by-name')

    expect(inputElement).toBeTruthy()
    expect(inputElement).toHaveValue('')

    fireEvent.input(inputElement, { target: { value: 'react' } })
    expect(formHookReference.current.values.repositoryName).toBe('react')
  })

  it('error render', async () => {
    const { result: formHookReference } = renderHook(() =>
      useForm<{
        license: string
        repositoryName: string
      }>({
        initialValues: {
          license: '',
          repositoryName: '',
        },
      }),
    )

    render(
      <ThemeProvider>
        <MockedProvider mocks={mocks.error}>
          <Header form={formHookReference.current} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await act(() => new Promise((resolve) => setTimeout(resolve, 0))) // wait for response

    expect(screen.getByText('Search by repo name')).toBeVisible()
    expect(screen.getByText('Licenses loading error.')).toBeVisible()
  })
})
