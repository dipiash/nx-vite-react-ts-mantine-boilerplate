import React, { FC, useMemo } from 'react'

import { useListLicensesQuery } from '@nx-vite-react-ts-mantine-boilerplate/graphql'
import { Error, Loader, Select, SelectItem } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { LicenseSelectProperties } from './LicenseSelect.types'

const firstEmptySelectItem: SelectItem[] = [{ value: '', label: '--- Not Selected ---' }]

export const LicenseSelect: FC<LicenseSelectProperties> = ({ onChange, ...rest }) => {
  const { data, loading, error } = useListLicensesQuery()

  const preparedLicenses = useMemo<SelectItem[]>(() => {
    const preparedOriginalLicenses =
      data?.licenses
        .map((license) =>
          license
            ? ({
                value: license.key,
                label: license.name,
              } as SelectItem)
            : undefined,
        )
        .filter((license): license is SelectItem => license !== undefined) || []

    return [...firstEmptySelectItem, ...preparedOriginalLicenses]
  }, [data])

  if (error) {
    return <Error text="Licenses loading error." />
  }

  return (
    <Loader loading={loading} data-testid="licenses-select-loading">
      <Select
        searchable
        data-testid="licenses-select"
        nothingFound="Nothing found"
        label="License type"
        data={preparedLicenses}
        onChange={onChange}
        defaultValue=""
        filter={(value, item) => Boolean(item?.label?.toLowerCase().includes(value.toLowerCase().trim()))}
        {...rest}
      />
    </Loader>
  )
}

LicenseSelect.defaultProps = {
  onChange: () => void 0,
}
