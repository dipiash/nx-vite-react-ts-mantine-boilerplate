import React from 'react'
import { render } from '@testing-library/react'

import { UiKit } from '@nx-ts-vite-react-graphql-styled-monorepo-example/ui-kit'

describe('UiKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiKit />)

    expect(baseElement).toBeTruthy()
  })
})
