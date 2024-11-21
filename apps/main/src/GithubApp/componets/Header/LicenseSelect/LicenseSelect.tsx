import { useListLicensesQuery } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { ComboboxItem, ErrorBlock, Loader, Select } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React, { FC, useMemo } from 'react'

import { LicenseSelectPropertiesInterface } from './LicenseSelect.types'

const firstEmptyComboboxItem: ComboboxItem[] = [{ label: '--- Not Selected ---', value: ' ' }]

export const LicenseSelect: FC<LicenseSelectPropertiesInterface> = ({ ...rest }) => {
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
    return <ErrorBlock text="Licenses loading error." />
  }

  return (
    <Loader data-testid="licenses-select-loading" loading={loading}>
      <Select
        label="License type"
        data={preparedLicenses}
        data-testid="licenses-select"
        defaultValue=" "
        nothingFoundMessage="Nothing found"
        searchable
        {...rest}
      />
    </Loader>
  )
}
