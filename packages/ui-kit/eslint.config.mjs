import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import baseConfig from '../../eslint.config.mjs'

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
})

const config = [
  {
    ignores: ['**/dist'],
  },
  ...baseConfig,
  ...compat.extends('plugin:storybook/recommended'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['packages/ui-kit/tsconfig.*?.json'],
      },
    },
    // Override or add rules here
    rules: {},
  },
  {
    ignores: ['node_modules/**'],
  },
]

export default config
