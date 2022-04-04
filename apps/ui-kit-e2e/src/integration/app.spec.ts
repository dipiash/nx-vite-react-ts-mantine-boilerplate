import { getGreeting } from '../support/app.po'

describe('ui-kit', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uikit--primary&args=&viewMode=story'))

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('123243532').matchImageSnapshot()
  })
})
