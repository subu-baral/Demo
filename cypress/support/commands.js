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
import { addToCartSelectors } from "../support/selectors/addToCartSelectors";
import { textMessage } from "./textMessage";


//login
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get(demoSelectors.userNameSelector).clear().type(username);
    cy.get(demoSelectors.passwordSelector).clear().type(password);
    cy.get(demoSelectors.loginButtonSelector).click();
    
    cy.url().should('include','/inventory.html');
    
})

Cypress.Commands.add('tshirtRed', () => {
    cy.get(demoSelectors.productNameSelector).should('contain', dropdownOptionSelectors.tshirtRedTextName); 
    cy.get(demoSelectors.ProductImageSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.tshirtRedTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.tshirtRedPrice);


})
Cypress.Commands.add('backpack', () => {
    cy.get(demoSelectors.productNameSelector).should('contain', dropdownOptionSelectors.backpackTextName); 
    cy.get(demoSelectors.ProductImageSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.backpackTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.backpackPrice);
})

Cypress.Commands.add('onesie',()=> {
cy.get(demoSelectors.productNameSelector).should('contain', dropdownOptionSelectors.onesieTextName); 
cy.get(addToCartSelectors.onesieSelector).should('be.visible');
cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.onesieTextDescribe);
cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.onesiePrice);
})



