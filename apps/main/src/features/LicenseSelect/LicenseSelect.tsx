import { useQuery } from '@apollo/client/react'
import React, { useMemo } from 'react'

import { ListLicensesDocument } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { type ComboboxItem, ErrorBlock, Loader, Select } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { type LicenseSelectPropertiesInterface } from './LicenseSelect.types'

const firstEmptyComboboxItem: ComboboxItem[] = [{ label: '--- Not Selected ---', value: ' ' }]

export const LicenseSelect = ({ ...rest }: LicenseSelectPropertiesInterface) => {
  const { data, error, loading } = useQuery(ListLicensesDocument)

  const preparedLicenses = useMemo<ComboboxItem[]>(() => {
    const preparedOriginalLicenses =
      data?.licenses
        ?.map((license): ComboboxItem | undefined =>
          license
            ? {
                label: license.name,
                value: license.key,
              }
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
