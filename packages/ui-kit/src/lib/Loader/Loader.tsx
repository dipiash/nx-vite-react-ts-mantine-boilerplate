import React, { FC } from 'react'
import { LoadingOverlay } from '@mantine/core'

import { ILoaderProperties } from './Loader.types'

import { SLoaderWrapper } from './Loader.styled'

export const Loader: FC<ILoaderProperties> = ({ children, loading }) => {
  return (
    <SLoaderWrapper>
      <LoadingOverlay visible={loading} />
      {children}
    </SLoaderWrapper>
  )
}
