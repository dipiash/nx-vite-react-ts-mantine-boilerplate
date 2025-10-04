import { type Meta, type StoryObj } from '@storybook/react-vite'

import { Button as ButtonC } from './Button'

export default {
  title: 'Button/ButtonDefault',
  component: ButtonC,
} as Meta<typeof ButtonC>

export const Button: StoryObj<typeof ButtonC> = {
  args: {
    children: 'Button',
  },
}
