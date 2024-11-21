import React from 'react'

import { ErrorBlock } from './ErrorBlock'

describe('<Error />', () => {
  it('renders', () => {
    cy.mount(<ErrorBlock text="Error" />)
  })
})
