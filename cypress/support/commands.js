// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
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

// This doesn't work because it says
// originalFn(...).should is not a function
Cypress.Commands.overwrite("get", (originalFn, selector, options) => {
  return originalFn(selector, options).should("be.visible");
});

// This doesn't work with assertions.spec.js because .contains fails with

// Cypress detected that you returned a promise from a command while also invoking one or more cy commands in that promise.
// The command that returned the promise was:

//   > cy.contains()

// The cy command you invoked inside the promise was:

//   > cy.wrap()

// Because Cypress commands are already promise-like, you don't need to wrap them or return your own promise.

// Cypress will resolve your command with whatever the final Cypress command yields.

// The reason this is an error instead of a warning is because Cypress internally queues commands serially whereas Promises execute as soon as they are invoked. Attempting to reconcile this would prevent Cypress from ever resolving
Cypress.Commands.overwrite("get", (originalFn, selector, options) => {
  return cy.wrap(originalFn(selector, options)).should("be.visible");
});
