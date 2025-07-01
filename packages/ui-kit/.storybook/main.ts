export default {
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
