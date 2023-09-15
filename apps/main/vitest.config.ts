/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite'

import baseConfig from './vite.config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
    },
  }),
)
