import { type UseFormReturnType } from '@mantine/form'

export interface HeaderPropertiesInterface {
  form: UseFormReturnType<{
    license: string
    repositoryName: string
  }>
}
