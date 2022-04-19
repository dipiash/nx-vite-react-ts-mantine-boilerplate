import { Scalars } from '@nx-ts-vite-react-graphql-styled-monorepo-example/data-access'

export interface IRepositoriesTableProperties {
  queryString: string
  limit: number
}

export interface IRepositoryData {
  key: Scalars['ID']
  name: string
  stars: number
  license: string
  date: Scalars['DateTime']
}
