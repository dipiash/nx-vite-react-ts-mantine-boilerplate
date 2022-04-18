import React, { FC } from 'react'
import { Group } from '@mantine/core'

import { PaginationProperties } from './Pagination.types'

import { Button } from '../Button'

export const Pagination: FC<PaginationProperties> = ({ onPrevClick, onNextClick, isPrevDisabled, isNextDisabled }) => {
  return (
    <Group grow spacing="xs">
      <Button data-testid="button-prev" disabled={isPrevDisabled} onClick={onPrevClick}>
        {'<'} Prev
      </Button>
      <Button data-testid="button-next" disabled={isNextDisabled} onClick={onNextClick}>
        Next {'>'}
      </Button>
    </Group>
  )
}

Pagination.defaultProps = {
  isPrevDisabled: true,
  isNextDisabled: false,
}
