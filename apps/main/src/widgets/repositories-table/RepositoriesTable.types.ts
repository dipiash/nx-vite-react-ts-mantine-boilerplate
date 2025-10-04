import { type Scalars } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

export interface RepositoriesTablePropertiesInterface {
  limit: number
  queryString: string
}
export interface RepositoryDataInterface {
  date: Scalars['DateTime']
  key: Scalars['ID']
  license: string | undefined
  name: string
  stars: number
}
