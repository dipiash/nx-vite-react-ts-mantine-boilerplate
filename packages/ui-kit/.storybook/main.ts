import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const getAbsolutePath = (value: string): string => dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))

export default {
  addons: [getAbsolutePath('@chromatic-com/storybook'), getAbsolutePath('@storybook/addon-docs')],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
