import { IconAlertCircle } from '@tabler/icons-react'
import React, { FC, memo } from 'react'

import { Alert } from '@mantine/core'

import { ErrorBlockPropertiesInterface } from './ErrorBlock.types'

export const ErrorBlock: FC<ErrorBlockPropertiesInterface> = memo(({ text = 'Error' }) => (
  <Alert title="Error" color="red" icon={<IconAlertCircle size={16} />}>
    {text}
  </Alert>
))

ErrorBlock.displayName = 'Error'
