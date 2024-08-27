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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import{demoSelectors}from "../support/selectors/demoSelectors"
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get(demoSelectors.userNameSelector).clear().type("standard_user");
    cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
    cy.get(demoSelectors.loginButtonSelector).click();
    
    cy.url().should('include','/inventory.html');
    
})