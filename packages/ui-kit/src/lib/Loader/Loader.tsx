import React, { FC, PropsWithChildren } from 'react'

import { LoadingOverlay, VisuallyHidden } from '@mantine/core'

import { LoaderPropertiesInterface } from './Loader.types'

import classes from './Loader.module.css'

export const Loader: FC<PropsWithChildren<LoaderPropertiesInterface>> = ({ children, loading, ...rest }) => (
  <div className={classes.root} {...rest}>
    <LoadingOverlay className={classes.overlay} visible={loading} />
    <VisuallyHidden>Loading...</VisuallyHidden>
    {children}
  </div>
)
