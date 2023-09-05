import React, { FC, PropsWithChildren } from 'react'

import { LoadingOverlay } from '@mantine/core'

import { LoaderPropertiesInterface } from './Loader.types'

import { SLoaderWrapper } from './Loader.styled'

export const Loader: FC<PropsWithChildren<LoaderPropertiesInterface>> = ({ children, loading, ...rest }) => (
  <SLoaderWrapper {...rest}>
    <LoadingOverlay visible={loading} />
    {loading && <span className="hiddenLoaderText">Loading...</span>}
    {children}
  </SLoaderWrapper>
)
