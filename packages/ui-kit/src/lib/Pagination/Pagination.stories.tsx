import { type Meta, type StoryObj } from '@storybook/react-vite'

import { Pagination as PaginationComponent } from './Pagination'

export default {
  title: 'Navigation/Pagination',
  args: {
    isNextDisabled: false,
    isPrevDisabled: true,
    onNextClick: () => console.info('onNextClick'),
    onPrevClick: () => console.info('onPrevClick'),
  },
  component: PaginationComponent,
} as Meta<typeof PaginationComponent>

export const Default: StoryObj<typeof PaginationComponent> = {}

export const BothEnabled: StoryObj<typeof PaginationComponent> = {
  args: {
    isPrevDisabled: false,
  },
}
