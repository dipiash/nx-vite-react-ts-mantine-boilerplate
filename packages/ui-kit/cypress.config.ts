import { defineConfig } from 'cypress'

import viteConfig from './vite.config'

export default defineConfig({
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'react',
      viteConfig,
    },
    // Please ensure you use `cy.origin()` when navigating between domains and remove this option.
    // See https://docs.cypress.io/app/references/migration-guide#Changes-to-cyorigin
    injectDocumentDomain: true,
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
})
