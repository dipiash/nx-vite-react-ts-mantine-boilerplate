import { Meta, StoryObj } from '@storybook/react-vite'

import { Input as InputComponent } from './Input'

export default {
  title: 'Forms/Input',
  component: InputComponent,
} as Meta<typeof InputComponent>

export const Default: StoryObj<typeof InputComponent> = {
  args: {
    label: 'Repository name',
    description: 'Filters repositories by name fragment.',
    placeholder: 'Search repositories',
  },
}
