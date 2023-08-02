import rootMain from '../../../.storybook/main'
import tsconfigPaths from 'vite-tsconfig-paths'

export default {
  ...rootMain,
  core: { ...rootMain.core },
  stories: [...rootMain.stories, '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', ...rootMain.addons],
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ['@storybook/client-api']

    if (configType === 'PRODUCTION') {
      config.base = '/storybook'
    }

    config.plugins.push(
      tsconfigPaths({
        root: '../..',
      }),
    )

    return config
  },
}
