import React from 'react'

import { useGetListLicensesQuery } from '@nx-ts-vite-react-graphql-styled-monorepo-example/data-access'

export const GqlExampleRequest = () => {
  const { data, loading, error } = useGetListLicensesQuery()

  return (
    <div>
      <div>Loading: {loading ? 'true' : 'false'}</div>
      <div>Data: {JSON.stringify(data)}</div>
      <div>Error: {JSON.stringify(error)}</div>
    </div>
  )
}
