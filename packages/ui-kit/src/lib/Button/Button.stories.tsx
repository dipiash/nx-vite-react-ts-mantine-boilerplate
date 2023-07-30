import { Meta, StoryObj } from '@storybook/react'

import { Button as ButtonC } from './Button'

export default {
  component: ButtonC,
  title: 'Button/ButtonDefault',
} as Meta<typeof ButtonC>

export const Button: StoryObj<typeof ButtonC> = {
  args: {
    children: 'Button',
  },
}
