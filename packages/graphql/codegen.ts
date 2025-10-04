import 'dotenv/config'

import type { CodegenConfig } from '@graphql-codegen/cli'

const endpoint = process.env.GITHUB_API_ENDPOINT || 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN

if (!token) {
  throw new Error('GITHUB_TOKEN is not set. Please check that you have .env.local in packages/graphql directory')
}

const config: CodegenConfig = {
  documents: 'src/lib/graphql/**/*.graphql',
  generates: {
    'src/lib/generated/fragment-matcher.ts': { plugins: ['fragment-matcher'] },
    'src/lib/generated/generated.tsx': {
      config: {
        withComponent: false,
        withHOC: false,
        withHooks: true,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
    'src/lib/generated/schema.graphql': { plugins: ['schema-ast'] },
  },
  overwrite: true,
  schema: [
    {
      [endpoint]: {
        headers: {
          Authorization: `bearer ${token}`,
          'User-Agent': 'nx-vite-react-ts-mantine-boilerplate',
        },
      },
    },
  ],
}

export default config
