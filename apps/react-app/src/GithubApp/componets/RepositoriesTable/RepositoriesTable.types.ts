import { Scalars } from '@nx-vite-react-ts-mantine-boilerplate/data-access'

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
