import React, { FC, memo } from 'react'
import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'

import { IErrorProperties } from './Error.types'

export const Error: FC<IErrorProperties> = memo(({ text }) => {
  return (
    <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
      {text}
    </Alert>
  )
})

Error.defaultProps = {
  text: 'Error',
}

Error.displayName = 'Error'
