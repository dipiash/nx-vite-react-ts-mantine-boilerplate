import { type UseFormReturnType } from '@mantine/form'

import { type LicenseSelectPropertiesInterface } from '../../features/LicenseSelect'

export interface HeaderPropertiesInterface {
  form: UseFormReturnType<{
    license: string
    repositoryName: string
  }>
  licenseSelectProps?: Partial<LicenseSelectPropertiesInterface>
}
