import { Scalars } from '@nx-vite-react-ts-mantine-boilerplate/graphql'

export interface RepositoriesTablePropertiesInterface {
  queryString: string
  limit: number
}

export interface RepositoryDataInterface {
  key: Scalars['ID']
  name: string
  stars: number
  license: string
  date: Scalars['DateTime']
}
