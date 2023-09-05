import { ChangeEvent } from 'react'

export interface HeaderPropertiesInterface {
  handleSetRepositoryName: (event_: ChangeEvent<HTMLInputElement>) => void
  handleSetLicense: (value: string) => void
}
