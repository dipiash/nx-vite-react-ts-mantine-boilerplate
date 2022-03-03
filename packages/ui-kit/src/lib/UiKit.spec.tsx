import React from 'react'
import { render } from '@testing-library/react'

import { UiKit } from './UiKit'

describe('UiKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiKit />)

    expect(baseElement).toBeTruthy()
  })
})
