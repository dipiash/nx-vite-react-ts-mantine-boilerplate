import { type Meta, type StoryObj } from '@storybook/react-vite'

import { Table as TableComponent } from './Table'

const columns = {
  name: 'Repository',
  date: 'Created',
  license: 'License',
  stars: 'Stars',
}

const data = [
  {
    name: 'nx-vite-react-ts-mantine',
    date: '2024-01-12',
    key: '1',
    license: 'MIT',
    stars: 4200,
  },
  {
    name: 'storybook-design-system',
    date: '2023-09-08',
    key: '2',
    license: 'Apache-2.0',
    stars: 6100,
  },
]

export default {
  title: 'Data Display/Table',
  args: {
    columns,
    data,
    error: false,
  },
  component: TableComponent,
} as Meta<typeof TableComponent>

export const Default: StoryObj<typeof TableComponent> = {}

export const EmptyState: StoryObj<typeof TableComponent> = {
  args: {
    data: [],
  },
}
