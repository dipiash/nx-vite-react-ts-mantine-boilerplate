import React, { FC, PropsWithChildren } from 'react'
import { LoadingOverlay } from '@mantine/core'

import { ILoaderProperties } from './Loader.types'

import { SLoaderWrapper } from './Loader.styled'

export const Loader: FC<PropsWithChildren<ILoaderProperties>> = ({ children, loading, ...rest }) => {
  return (
    <SLoaderWrapper {...rest}>
      <LoadingOverlay visible={loading} />
      {children}
    </SLoaderWrapper>
  )
}
