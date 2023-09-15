import { defineConfig } from 'cypress'

import viteConfig from './vite.config'

export default defineConfig({
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'react',
      viteConfig,
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
})
