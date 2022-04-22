import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'

import baseConfig from './vite.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
    },
  }),
)
