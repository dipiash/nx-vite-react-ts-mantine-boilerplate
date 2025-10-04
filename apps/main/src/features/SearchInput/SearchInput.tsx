import { Input } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'
import React from 'react'

import { SearchInputPropertiesInterface } from './SearchInput.types'

export const SearchInput = ({ ...rest }: SearchInputPropertiesInterface) => (
  <Input data-testid="search-by-name" label="Search by repo name" name="search" placeholder="Search by repository name" {...rest} />
)
