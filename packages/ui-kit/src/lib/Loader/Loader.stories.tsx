import { Meta, StoryObj } from '@storybook/react-vite'

import { Loader as LoaderComponent } from './Loader'

export default {
  title: 'Feedback/Loader',
  args: {
    children: 'Content goes here once loading completes.',
  },
  component: LoaderComponent,
} as Meta<typeof LoaderComponent>

export const Loading: StoryObj<typeof LoaderComponent> = {
  args: {
    loading: true,
  },
}

export const Idle: StoryObj<typeof LoaderComponent> = {
  args: {
    loading: false,
  },
}
