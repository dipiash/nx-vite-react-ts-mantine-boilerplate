import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

import type * as Types from '../generated/graphql'

export type ListRepositoriesQuery = {
  search: {
    __typename: 'SearchResultItemConnection'
    edges: Array<null | {
      __typename: 'SearchResultItemEdge'
      cursor: string
      node:
        | null
        | { __typename: 'App' }
        | { __typename: 'Discussion' }
        | { __typename: 'Issue' }
        | { __typename: 'MarketplaceListing' }
        | { __typename: 'Organization' }
        | { __typename: 'PullRequest' }
        | { __typename: 'User' }
        | {
            id: string
            name: string
            __typename: 'Repository'
            licenseInfo: null | { id: string; name: string; __typename: 'License' }
            stargazers: { __typename: 'StargazerConnection'; totalCount: number }
            createdAt: unknown
            updatedAt: unknown
          }
    }> | null
    pageInfo: { __typename: 'PageInfo'; endCursor: null | string; hasNextPage: boolean; hasPreviousPage: boolean; startCursor: null | string }
    repositoryCount: number
  }
}

export type ListRepositoriesQueryVariables = Types.Exact<{
  cursorAfter?: Types.InputMaybe<Types.Scalars['String']['input']>
  cursorBefore?: Types.InputMaybe<Types.Scalars['String']['input']>
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>
  queryString: Types.Scalars['String']['input']
}>

export const ListRepositoriesDocument = {
  definitions: [
    {
      name: { kind: 'Name', value: 'ListRepositories' },
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            name: { kind: 'Name', value: 'search' },
            arguments: [
              { name: { kind: 'Name', value: 'after' }, kind: 'Argument', value: { name: { kind: 'Name', value: 'cursorAfter' }, kind: 'Variable' } },
              {
                name: { kind: 'Name', value: 'before' },
                kind: 'Argument',
                value: { name: { kind: 'Name', value: 'cursorBefore' }, kind: 'Variable' },
              },
              { name: { kind: 'Name', value: 'first' }, kind: 'Argument', value: { name: { kind: 'Name', value: 'first' }, kind: 'Variable' } },
              { name: { kind: 'Name', value: 'last' }, kind: 'Argument', value: { name: { kind: 'Name', value: 'last' }, kind: 'Variable' } },
              { name: { kind: 'Name', value: 'query' }, kind: 'Argument', value: { name: { kind: 'Name', value: 'queryString' }, kind: 'Variable' } },
              { name: { kind: 'Name', value: 'type' }, kind: 'Argument', value: { kind: 'EnumValue', value: 'REPOSITORY' } },
            ],
            kind: 'Field',
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  name: { kind: 'Name', value: 'edges' },
                  kind: 'Field',
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { name: { kind: 'Name', value: 'cursor' }, kind: 'Field' },
                      {
                        name: { kind: 'Name', value: 'node' },
                        kind: 'Field',
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { name: { kind: 'Name', value: 'createdAt' }, kind: 'Field' },
                                  { name: { kind: 'Name', value: 'id' }, kind: 'Field' },
                                  {
                                    name: { kind: 'Name', value: 'licenseInfo' },
                                    kind: 'Field',
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { name: { kind: 'Name', value: 'id' }, kind: 'Field' },
                                        { name: { kind: 'Name', value: 'name' }, kind: 'Field' },
                                      ],
                                    },
                                  },
                                  { name: { kind: 'Name', value: 'name' }, kind: 'Field' },
                                  {
                                    name: { kind: 'Name', value: 'stargazers' },
                                    kind: 'Field',
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [{ name: { kind: 'Name', value: 'totalCount' }, kind: 'Field' }],
                                    },
                                  },
                                  { name: { kind: 'Name', value: 'updatedAt' }, kind: 'Field' },
                                ],
                              },
                              typeCondition: { name: { kind: 'Name', value: 'Repository' }, kind: 'NamedType' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  name: { kind: 'Name', value: 'pageInfo' },
                  kind: 'Field',
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { name: { kind: 'Name', value: 'endCursor' }, kind: 'Field' },
                      { name: { kind: 'Name', value: 'hasNextPage' }, kind: 'Field' },
                      { name: { kind: 'Name', value: 'hasPreviousPage' }, kind: 'Field' },
                      { name: { kind: 'Name', value: 'startCursor' }, kind: 'Field' },
                    ],
                  },
                },
                { name: { kind: 'Name', value: 'repositoryCount' }, kind: 'Field' },
              ],
            },
          },
        ],
      },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          type: { name: { kind: 'Name', value: 'String' }, kind: 'NamedType' },
          variable: { name: { kind: 'Name', value: 'cursorAfter' }, kind: 'Variable' },
        },
        {
          kind: 'VariableDefinition',
          type: { name: { kind: 'Name', value: 'String' }, kind: 'NamedType' },
          variable: { name: { kind: 'Name', value: 'cursorBefore' }, kind: 'Variable' },
        },
        {
          kind: 'VariableDefinition',
          type: { name: { kind: 'Name', value: 'Int' }, kind: 'NamedType' },
          variable: { name: { kind: 'Name', value: 'first' }, kind: 'Variable' },
        },
        {
          kind: 'VariableDefinition',
          type: { name: { kind: 'Name', value: 'Int' }, kind: 'NamedType' },
          variable: { name: { kind: 'Name', value: 'last' }, kind: 'Variable' },
        },
        {
          kind: 'VariableDefinition',
          type: { kind: 'NonNullType', type: { name: { kind: 'Name', value: 'String' }, kind: 'NamedType' } },
          variable: { name: { kind: 'Name', value: 'queryString' }, kind: 'Variable' },
        },
      ],
    },
  ],
  kind: 'Document',
} as unknown as DocumentNode<ListRepositoriesQuery, ListRepositoriesQueryVariables>
