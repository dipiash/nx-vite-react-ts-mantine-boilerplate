import React, { FC } from 'react'

import { Group } from '@mantine/core'

import { PaginationPropertiesInterface } from './Pagination.types'

import { Button } from '../Button'

export const Pagination: FC<PaginationPropertiesInterface> = ({
  isNextDisabled = false,
  isPrevDisabled: isPreviousDisabled = true,
  onNextClick,
  onPrevClick,
}) => (
  <Group grow gap="xs">
    <Button data-testid="button-prev" disabled={isPreviousDisabled} onClick={onPrevClick}>
      {'<'} Prev
    </Button>
    <Button data-testid="button-next" disabled={isNextDisabled} onClick={onNextClick}>
      Next {'>'}
    </Button>
  </Group>
)
