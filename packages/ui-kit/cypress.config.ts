import { defineConfig } from 'cypress'

import viteConfig from './vite.config'

export default defineConfig({
  component: {
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },
})
