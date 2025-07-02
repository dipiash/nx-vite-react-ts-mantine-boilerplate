import baseConfig from '../../eslint.config.mjs'

const config = [
  {
    ignores: ['**/dist', 'node_modules/**'],
  },
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.*?.json'],
      },
    },
    // Override or add rules here
    rules: {},
  },
]

export default config
