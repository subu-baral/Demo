import{demoSelectors}from "../support/selectors/demoSelectors"
import { burgerButtonSelectors } from "../support/selectors/burgerButtonSelector";
describe('Product page', () => {
  it('product page should be visible', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get(demoSelectors.userNameSelector).clear().type("standard_user");
    cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
    cy.get(demoSelectors.loginButtonSelector).click();
    cy.url().should('include','/inventory.html');

    cy.get(demoSelectors.burgerMenuSelector).should('be.visible').and('be.enabled').click();
   
    cy.get(burgerButtonSelectors.allItemsSelector).should('be.visible').and('have.text', 'All Items').and('have.attr', 'href', '#');
    
    cy.get(burgerButtonSelectors.aboutSelector).should('be.visible').and('have.text','About').and('have.attr','href','https://saucelabs.com/');
    
    cy.get(demoSelectors.logOutSelector).should('be.visible').and('have.text','Logout').and('have.attr', 'href', '#');

    cy.get(burgerButtonSelectors.resetSelector).should('be.visible').and('have.text','Reset App State').and('have.attr', 'href', '#');
    
    cy.get ('body',{timeout:3000}).type('{esc}');

  })
})