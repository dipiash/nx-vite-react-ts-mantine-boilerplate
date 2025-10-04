import React, { memo } from 'react'

import cx from 'clsx'

import { LicenseSelect } from '../../features/LicenseSelect'
import { SearchInput } from '../../features/SearchInput'
import { HeaderPropertiesInterface } from './Header.types'

import classes from './Header.module.css'

export const Header = memo(({ form }: HeaderPropertiesInterface) => (
  <div className={classes.root}>
    <div className={cx(classes.headerItem, classes.headerItemLeft)}>
      <SearchInput className={classes.headerField} {...form.getInputProps('repositoryName')} />
    </div>
    <div className={cx(classes.headerItem, classes.headerItemRight)}>
      <LicenseSelect name="license" className={classes.headerField} {...form.getInputProps('license')} />
    </div>
  </div>
))

Header.displayName = 'Header'
