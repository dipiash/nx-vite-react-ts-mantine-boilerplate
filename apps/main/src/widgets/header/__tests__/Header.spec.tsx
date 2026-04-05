import { MockLink } from '@apollo/client/testing'
import { MockedProvider } from '@apollo/client/testing/react'
import React from 'react'

import { useForm } from '@mantine/form'
import { ListLicensesDocument } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { ThemeProvider } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Header } from '../index'
import licensesListMockDataSuccess from './mocks/result.success.json'

type GraphqlMock = MockLink.MockedResponse

const mocks: {
  error: readonly GraphqlMock[]
  success: readonly GraphqlMock[]
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
          <Header form={formHookReference.current} licenseSelectProps={{ comboboxProps: { withinPortal: false } }} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await screen.findByTestId('licenses-select')

    // Check select element render
    const selectElement = screen.getByTestId('licenses-select') as HTMLSelectElement

    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveValue('')

    await user.click(selectElement)
    await user.type(selectElement, 'MIT')
    fireEvent.click(await screen.findByRole('option', { name: 'MIT License', hidden: true }))

    await waitFor(() => {
      expect(formHookReference.current.values.license).toBe('mit')
    })

    // Change text in input field
    const inputElement = screen.getByTestId('search-by-name') as HTMLInputElement

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
          <Header form={formHookReference.current} licenseSelectProps={{ comboboxProps: { withinPortal: false } }} />
        </MockedProvider>
      </ThemeProvider>,
    )

    await waitFor(() => {
      expect(screen.getByText('Search by repo name')).toBeVisible()
      expect(screen.getByText('Licenses loading error.')).toBeVisible()
    })
  })
})
