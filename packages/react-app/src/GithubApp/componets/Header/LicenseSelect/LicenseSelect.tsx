import React, { FC, useMemo } from 'react'

import { useListLicensesQuery } from '@nx-ts-vite-react-graphql-styled-monorepo-example/data-access'
import { Error, Loader, Select } from '@nx-ts-vite-react-graphql-styled-monorepo-example/ui-kit'

import { LicenseSelectProperties } from './LicenseSelect.types'
import { SelectItem } from '@mantine/core/lib/components/Select/types'

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
