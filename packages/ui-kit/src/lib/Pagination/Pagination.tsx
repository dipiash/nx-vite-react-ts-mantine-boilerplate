import { Group } from '@mantine/core'
import React, { FC } from 'react'

import { Button } from '../Button'
import { PaginationPropertiesInterface } from './Pagination.types'

export const Pagination: FC<PaginationPropertiesInterface> = ({
  isNextDisabled = false,
  isPrevDisabled: isPreviousDisabled = true,
  onNextClick,
  onPrevClick,
}) => (
  <Group gap="xs" grow>
    <Button data-testid="button-prev" disabled={isPreviousDisabled} onClick={onPrevClick}>
      {'<'} Prev
    </Button>
    <Button data-testid="button-next" disabled={isNextDisabled} onClick={onNextClick}>
      Next {'>'}
    </Button>
  </Group>
)
