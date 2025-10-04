import { UseFormReturnType } from '@mantine/form'

/**
 * Properties for the Header widget.  The header receives a form
 * instance from Mantine that holds the values for the license and
 * repository name fields.  It delegates value management to the form
 * instance via getInputProps.
 */
export interface HeaderPropertiesInterface {
  form: UseFormReturnType<{
    license: string
    repositoryName: string
  }>
}
