import { Meta, StoryObj } from '@storybook/react-vite'

import { ErrorBlock as ErrorBlockComponent } from './ErrorBlock'

export default {
  title: 'Feedback/ErrorBlock',
  component: ErrorBlockComponent,
} as Meta<typeof ErrorBlockComponent>

export const Default: StoryObj<typeof ErrorBlockComponent> = {
  args: {
    text: 'Something went wrong while fetching data.',
  },
}
