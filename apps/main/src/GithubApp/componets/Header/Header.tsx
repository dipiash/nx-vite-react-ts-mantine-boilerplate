import React, { FC, memo } from 'react'
import cx from 'clsx'

import { Input } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { HeaderPropertiesInterface } from './Header.types'

import { LicenseSelect } from './LicenseSelect'

import classes from './Header.module.css'

export const Header: FC<HeaderPropertiesInterface> = memo(({ handleSetLicense, handleSetRepositoryName }) => (
  <div className={classes.root}>
    <div className={cx(classes.headerItem, classes.headerItemLeft)}>
      <Input
        label="Search by repo name"
        data-testid="search-by-name"
        className={classes.headerField}
        name="search"
        placeholder="Search by repository name"
        onChange={handleSetRepositoryName}
      />
    </div>
    <div className={cx(classes.headerItem, classes.headerItemRight)}>
      <LicenseSelect className={classes.headerField} onChange={handleSetLicense} />
    </div>
  </div>
))

Header.displayName = 'Header'
