import { type Meta, type StoryObj } from '@storybook/react-vite'

import { Space as SpaceComponent } from './Space'

export default {
  title: 'Layout/Space',
  component: SpaceComponent,
} as Meta<typeof SpaceComponent>

export const Default: StoryObj<typeof SpaceComponent> = {
  args: {
    h: 24,
  },
}
