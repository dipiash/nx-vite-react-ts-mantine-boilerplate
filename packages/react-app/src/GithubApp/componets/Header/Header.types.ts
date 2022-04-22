import { ChangeEvent } from 'react'

export interface IHeaderProperties {
  handleSetRepositoryName: (event_: ChangeEvent<HTMLInputElement>) => void
  handleSetLicense: (value: string) => void
}
