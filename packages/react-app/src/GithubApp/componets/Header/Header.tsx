import React, { FC, memo } from 'react'

import { Input } from '@nx-ts-vite-react-graphql-styled-monorepo-example/ui-kit'

import { IHeaderProperties } from './Header.types'

import { LicenseSelect } from '../LicenseSelect'

import { SHeader } from './Header.styled'

export const Header: FC<IHeaderProperties> = memo(({ setRepositoryName, setLicense }) => {
  return (
    <SHeader>
      <div className="headerItem left">
        <Input
          label="Search by repo name"
          data-testid="search-by-name"
          className="headerField"
          name="search"
          placeholder="Search by repository name"
          onChange={(event) => setRepositoryName(event.target.value)}
        />
      </div>
      <div className="headerItem right">
        <LicenseSelect className="headerField" onChange={(value) => setLicense(value)} />
      </div>
    </SHeader>
  )
})

Header.displayName = 'Header'
