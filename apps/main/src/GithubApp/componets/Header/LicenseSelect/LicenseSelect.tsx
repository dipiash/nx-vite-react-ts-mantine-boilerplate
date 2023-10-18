import React, { FC, useMemo } from 'react'

import { useListLicensesQuery } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { ComboboxItem, Error, Loader, Select } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { LicenseSelectPropertiesInterface } from './LicenseSelect.types'

const firstEmptyComboboxItem: ComboboxItem[] = [{ label: '--- Not Selected ---', value: ' ' }]

export const LicenseSelect: FC<LicenseSelectPropertiesInterface> = ({ onChange, ...rest }) => {
  const { data, error, loading } = useListLicensesQuery()

  const preparedLicenses = useMemo<ComboboxItem[]>(() => {
    const preparedOriginalLicenses =
      data?.licenses
        .map((license) =>
          license
            ? ({
                label: license.name,
                value: license.key,
              } as ComboboxItem)
            : undefined,
        )
        .filter((license): license is ComboboxItem => license !== undefined) || []

    return [...firstEmptyComboboxItem, ...preparedOriginalLicenses]
  }, [data])

  if (error) {
    return <Error text="Licenses loading error." />
  }

  return (
    <Loader loading={loading} data-testid="licenses-select-loading">
      <Select
        searchable
        data-testid="licenses-select"
        nothingFoundMessage="Nothing found"
        label="License type"
        data={preparedLicenses}
        onChange={onChange}
        defaultValue=" "
        filter={({ options, search }) => {
          const splittedSearch = search.toLowerCase().trim().split(' ')

          return (options as ComboboxItem[]).filter((option) => {
            const words = option.label.toLowerCase().trim().split(' ')

            return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)))
          })
        }}
        {...rest}
      />
    </Loader>
  )
}

LicenseSelect.defaultProps = {
  onChange: () => void 0,
}
