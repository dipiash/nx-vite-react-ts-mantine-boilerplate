import React, { FC, memo } from 'react'

import { Input } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { IHeaderProperties } from './Header.types'

import { SHeader } from './Header.styled'
import { LicenseSelect } from './LicenseSelect'

export const Header: FC<IHeaderProperties> = memo(({ handleSetRepositoryName, handleSetLicense }) => {
  return (
    <SHeader>
      <div className="headerItem left">
        <Input
          label="Search by repo name"
          data-testid="search-by-name"
          className="headerField"
          name="search"
          placeholder="Search by repository name"
          onChange={handleSetRepositoryName}
        />
      </div>
      <div className="headerItem right">
        <LicenseSelect className="headerField" onChange={handleSetLicense} />
      </div>
    </SHeader>
  )
})

Header.displayName = 'Header'
