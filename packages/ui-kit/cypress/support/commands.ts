// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

//
// -- This is a parent command --
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Cypress.Commands.add('login', (email, password) => {
  console.info('Custom command example: Login', email, password)
})

// We set up the settings
addMatchImageSnapshotCommand()

// We also overwrite the command, so it does not take a sceenshot if we run the tests inside the test runner
Cypress.Commands.overwrite('matchImageSnapshot', (originalFunction, snapshotName, options) => {
  if (Cypress.env('ALLOW_SCREENSHOT')) {
    originalFunction(snapshotName, options)
  } else {
    cy.log(`Screenshot comparison is disabled`)
  }
})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
