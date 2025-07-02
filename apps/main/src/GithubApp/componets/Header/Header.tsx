import { Input } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React, { FC, memo } from 'react'

import cx from 'clsx'

import { HeaderPropertiesInterface } from './Header.types'
import { LicenseSelect } from './LicenseSelect'

import classes from './Header.module.css'

export const Header: FC<HeaderPropertiesInterface> = memo(({ form }) => (
  <div className={classes.root}>
    <div className={cx(classes.headerItem, classes.headerItemLeft)}>
      <Input
        data-testid="search-by-name"
        label="Search by repo name"
        name="search"
        className={classes.headerField}
        placeholder="Search by repository name"
        {...form.getInputProps('repositoryName')}
      />
    </div>
    <div className={cx(classes.headerItem, classes.headerItemRight)}>
      <LicenseSelect className={classes.headerField} {...form.getInputProps('license')} />
    </div>
  </div>
))

Header.displayName = 'Header'
