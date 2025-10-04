import { Scalars } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

/**
 * Props for the RepositoriesTable widget.  The limit specifies how many
 * items to request per page and queryString is the composed GitHub search
 * query.
 */
export interface RepositoriesTablePropertiesInterface {
  limit: number
  queryString: string
}

/**
 * Internal structure used to map the GraphQL response into a shape
 * consumable by the Table component.  The keys correspond to the
 * columns defined in the tableColumns object.
 */
export interface RepositoryDataInterface {
  date: Scalars['DateTime']
  key: Scalars['ID']
  license: string | undefined
  name: string
  stars: number
}
