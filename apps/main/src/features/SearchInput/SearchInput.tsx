import React from 'react'

import { Input } from '@nx-vite-react-ts-mantine-boilerplate/ui-kit'

import { type SearchInputPropertiesInterface } from './SearchInput.types'

export const SearchInput = ({ ...rest }: SearchInputPropertiesInterface) => (
  <Input label="Search by repo name" name="search" data-testid="search-by-name" placeholder="Search by repository name" {...rest} />
)
