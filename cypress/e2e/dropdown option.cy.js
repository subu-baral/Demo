import{demoSelectors}from "../support/selectors/demoSelectors"
import { addToCartSelectors } from "../support/selectors/addToCartSelectors"
import{dropdownOptionSelectors} from "../support/selectors/dropdownOptionSelectors"
describe('dropdown option ', () => {
  it('passes', () => {
    cy.login('standard_user','secret_sauce');
    // cy.visit('https://www.saucedemo.com/');
    // cy.url().should('eq', 'https://www.saucedemo.com/');
    // cy.contains('Swag Labs');
    // cy.get(demoSelectors.userNameSelector).clear().type("standard_user");
    // cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
    // cy.get(demoSelectors.loginButtonSelector).click();
    // cy.url().should('include','/inventory.html');
    

    cy.get(demoSelectors.dropdownSelector).should('be.enabled').and('be.visible');

    cy.get(dropdownOptionSelectors.optionSelector).eq(0).should('have.text',dropdownOptionSelectors.productFromAtoZ);
    cy.get(dropdownOptionSelectors.optionSelector).eq(1).should('have.text',dropdownOptionSelectors.productFromZtoA);
    cy.get(dropdownOptionSelectors.optionSelector).eq(2).should('have.text',dropdownOptionSelectors.productFromLowToHigh);
    cy.get(dropdownOptionSelectors.optionSelector).eq(3).should('have.text',dropdownOptionSelectors.productFromHighToLow);

    cy.get(demoSelectors.dropdownSelector).select(dropdownOptionSelectors.productFromZtoA);
    cy.get(demoSelectors.productNameSelector).eq(0).should('contain', dropdownOptionSelectors.tshirtRedTextName); 
    cy.get(demoSelectors.ProductImageSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.tshirtRedTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.tshirtRedPrice);

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(demoSelectors.productNameSelector).eq(5).should('have.text', dropdownOptionSelectors.backpackTextName); 
    cy.get(demoSelectors.ProductImageSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.backpackTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.backpackPrice);
        
        //Select price(low to high)
    cy.get(demoSelectors.dropdownSelector).select(dropdownOptionSelectors.productFromLowToHigh);
    cy.get(demoSelectors.productNameSelector).eq(0).should('contain', dropdownOptionSelectors.onesieTextName); 
    cy.get(addToCartSelectors.onesieSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.onesieTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.onesiePrice);

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(demoSelectors.productNameSelector).eq(5).should('have.text',dropdownOptionSelectors.fleeceJacketTextName);
    cy.get(addToCartSelectors.fleeceJacketSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain',dropdownOptionSelectors.fleeceJacketTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain',dropdownOptionSelectors.fleecejacketPrice);
        

         // Select Price high to low
    cy.get(demoSelectors.dropdownSelector).select(dropdownOptionSelectors.productFromHighToLow);
        
    cy.get(demoSelectors.productNameSelector).eq(0).should('have.text',dropdownOptionSelectors.fleeceJacketTextName);
    cy.get(addToCartSelectors.fleeceJacketSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.fleeceJacketTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.fleecejacketPrice);

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(demoSelectors.productNameSelector).eq(3).should('contain',  dropdownOptionSelectors.tshirtRedTextName); 
    cy.get(addToCartSelectors.tshirtRedSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.tshirtRedTextDescribe );
    cy.get(demoSelectors.productPriceSelector).should('contain',dropdownOptionSelectors.tshirtRedPrice );

   
  })
})