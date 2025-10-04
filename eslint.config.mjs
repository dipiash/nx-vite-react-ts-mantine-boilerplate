import graphqlPlugin from '@graphql-eslint/eslint-plugin'
import nxEslintPlugin from '@nx/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import nimbusCleanPlugin from 'eslint-plugin-nimbus-clean'
import globals from 'globals'

const config = [
  {
    ignores: ['**/dist', '.husky', '.idea', '**/coverage', '**/generated'],
  },
  { plugins: { '@nx': nxEslintPlugin } },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.es6, ...globals.browser, ...globals.node },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
          modules: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
      },
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: {},
      },
      react: {
        fragment: 'Fragment',
        pragma: 'React',
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: [],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: ['*'],
              sourceTag: '*',
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
    },
  },
  ...nimbusCleanPlugin.configs.recommended,
  {
    files: ['**/*.graphql'],
    languageOptions: {
      parser: graphqlPlugin.parser,
    },
    plugins: {
      '@graphql-eslint': graphqlPlugin,
    },
    rules: {
      '@graphql-eslint/match-document-filename': [
        'error',
        {
          query: 'PascalCase',
        },
      ],
    },
  },
]

export default config
