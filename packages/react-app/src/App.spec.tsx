import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { UiKit } from '@nx-ts-vite-react-graphql-styled-monorepo-example/ui-kit'

describe('UiKit', () => {
  it('should render successfully', () => {
    const { baseElement, container } = render(<UiKit />)

    expect(baseElement).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
