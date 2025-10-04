import { IconAlertCircle } from '@tabler/icons-react'
import React, { memo } from 'react'

import { Alert } from '@mantine/core'

import { ErrorBlockPropertiesInterface } from './ErrorBlock.types'

export const ErrorBlock = memo(({ text = 'Error' }: ErrorBlockPropertiesInterface) => (
  <Alert title="Error" color="red" icon={<IconAlertCircle size={16} />}>
    {text}
  </Alert>
))

ErrorBlock.displayName = 'Error'
