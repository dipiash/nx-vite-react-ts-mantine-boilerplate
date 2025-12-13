import baseConfig from '../../eslint.config.mjs'

const config = [
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
    ignores: ['**/dist', '**/graphql/*.generated.ts', '**/generated/*.ts', '**/*/schema.graphql'],
  },
]

export default config
