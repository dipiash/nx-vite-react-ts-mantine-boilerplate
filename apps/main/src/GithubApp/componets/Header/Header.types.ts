import { UseFormReturnType } from '@mantine/form'

export interface HeaderPropertiesInterface {
  form: UseFormReturnType<{
    repositoryName: string
    license: string
  }>
}
