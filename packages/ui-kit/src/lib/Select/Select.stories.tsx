import { Meta, StoryObj } from '@storybook/react-vite'

import { Select as SelectComponent } from './Select'

const licenseOptions = [
  { label: '--- Not Selected ---', value: ' ' },
  { label: 'MIT License', value: 'mit' },
  { label: 'Apache-2.0', value: 'apache-2.0' },
]

export default {
  title: 'Forms/Select',
  args: {
    label: 'License type',
    data: licenseOptions,
    placeholder: 'Pick a license',
    searchable: true,
  },
  component: SelectComponent,
} as Meta<typeof SelectComponent>

export const Default: StoryObj<typeof SelectComponent> = {}
