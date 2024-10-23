import React, { FC, memo } from 'react'

import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'

import { ErrorPropertiesInterface } from './Error.types'

export const Error: FC<ErrorPropertiesInterface> = memo(({ text = 'Error' }) => (
  <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
    {text}
  </Alert>
))

Error.displayName = 'Error'
