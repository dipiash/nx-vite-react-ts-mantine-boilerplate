const rootMain = require('../../../.storybook/main');
const tsconfigPaths = require('vite-tsconfig-paths').default;

module.exports = {
  ...rootMain,
  core: { ...rootMain.core },
  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ["@storybook/client-api"]

    if (configType === 'PRODUCTION') {
      config.base = '/storybook/'
    }

    config.plugins.push(
      tsconfigPaths({
        root: '../..',
      })
    )

    return config;
  },
}
