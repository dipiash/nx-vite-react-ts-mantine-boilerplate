import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import type * as Types from '../generated/graphql'

export type ListLicensesQuery = { licenses: Array<null | { id: string; name: string; __typename: 'License'; key: string }> }

export type ListLicensesQueryVariables = Types.Exact<{ [key: string]: never }>

export const ListLicensesDocument = {
  definitions: [
    {
      name: { kind: 'Name', value: 'ListLicenses' },
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            name: { kind: 'Name', value: 'licenses' },
            kind: 'Field',
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { name: { kind: 'Name', value: 'id' }, kind: 'Field' },
                { name: { kind: 'Name', value: 'key' }, kind: 'Field' },
                { name: { kind: 'Name', value: 'name' }, kind: 'Field' },
              ],
            },
          },
        ],
      },
    },
  ],
  kind: 'Document',
} as unknown as DocumentNode<ListLicensesQuery, ListLicensesQueryVariables>
