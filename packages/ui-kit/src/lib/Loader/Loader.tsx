import React, { type PropsWithChildren } from 'react'

import { Box, LoadingOverlay, VisuallyHidden } from '@mantine/core'

import { type LoaderPropertiesInterface } from './Loader.types'

export const Loader = ({ children, loading, ...rest }: PropsWithChildren<LoaderPropertiesInterface>) => (
  <Box pos="relative" {...rest}>
    <LoadingOverlay visible={loading} />
    <VisuallyHidden>Loading...</VisuallyHidden>
    {children}
  </Box>
)
