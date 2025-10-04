import React from 'react'

import { Group } from '@mantine/core'

import { Button } from '../Button'
import { type PaginationPropertiesInterface } from './Pagination.types'

export const Pagination = ({
  isNextDisabled = false,
  isPrevDisabled: isPreviousDisabled = true,
  onNextClick,
  onPrevClick,
}: PaginationPropertiesInterface) => (
  <Group gap="xs" grow>
    <Button data-testid="button-prev" disabled={isPreviousDisabled} onClick={onPrevClick}>
      {'<'} Prev
    </Button>
    <Button data-testid="button-next" disabled={isNextDisabled} onClick={onNextClick}>
      Next {'>'}
    </Button>
  </Group>
)
