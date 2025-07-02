import baseConfig from '../../eslint.config.mjs'

const config = [
  {
    ignores: ['**/dist'],
  },
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.*?.json'],
      },
    },
    // Override or add rules here
    rules: {},
  },
  {
    ignores: ['**/*/generated.tsx', '**/*/schema.graphql'],
  },
]

export default config
