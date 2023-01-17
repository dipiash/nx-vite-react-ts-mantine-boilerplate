import React from 'react'

import { Error } from './Error'

describe('<Error />', () => {
  it('renders', () => {
    cy.mount(<Error text="Error" />)
  })
})
