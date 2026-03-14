import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const endpoint = process.env.GITHUB_API_ENDPOINT || 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN
const localSchemaPath = 'src/lib/generated/schema.graphql'

const schema: CodegenConfig['schema'] = token
  ? [
      {
        [endpoint]: {
          headers: {
            Authorization: `bearer ${token}`,
            'User-Agent': 'nx-vite-react-ts-mantine-boilerplate',
          },
        },
      },
    ]
  : localSchemaPath

const config: CodegenConfig = {
  documents: 'src/lib/graphql/**/*.graphql',
  generates: {
    'src/lib/generated/fragment-matcher.ts': { plugins: ['fragment-matcher'] },
    'src/lib/generated/graphql.ts': {
      config: {
        useTypeImports: true,
      },
      plugins: ['typescript'],
    },
    'src/lib/generated/schema.graphql': { plugins: ['schema-ast'] },
    'src/lib/graphql/': {
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        defaultScalarType: 'unknown',
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
        useTypeImports: true,
      },
      plugins: ['typescript-operations', 'typed-document-node'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '../generated/graphql.ts',
        extension: '.generated.ts',
      },
    },
  },
  ignoreNoDocuments: true,
  overwrite: true,
  schema,
}

export default config
