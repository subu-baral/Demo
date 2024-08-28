import{demoSelectors}from "../support/selectors/demoSelectors"
import { addToCartSelectors } from "../support/selectors/addToCartSelectors"
import { textMessage } from "../support/textMessage";

describe('dropdown option ', () => {
  it('passes', () => {
    cy.login('standard_user','secret_sauce');

    cy.get(demoSelectors.dropdownSelector).should('be.enabled').and('be.visible');

    cy.get(textMessage.optionSelector).eq(0).should('have.text',textMessage.productFromAtoZ);
    cy.get(textMessage.optionSelector).eq(1).should('have.text',textMessage.productFromZtoA);
    cy.get(textMessage.optionSelector).eq(2).should('have.text',textMessage.productFromLowToHigh);
    cy.get(textMessage.optionSelector).eq(3).should('have.text',textMessage.productFromHighToLow);

    cy.get(demoSelectors.dropdownSelector).select(textMessage.productFromZtoA);
   
    cy.get(demoSelectors.productNameSelector).eq(0).should('contain', textMessage.tshirtRedTextName); 
    cy.get(demoSelectors.ProductImageSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', textMessage.tshirtRedTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', textMessage.tshirtRedPrice);

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

   
   cy.get(demoSelectors.productNameSelector).eq(5).should('contain', textMessage.backpackTextName); 
   cy.get(demoSelectors.ProductImageSelector).should('be.visible');
   cy.get(demoSelectors.productDescribeSelector).should('contain', textMessage.backpackTextDescribe);
   cy.get(demoSelectors.productPriceSelector).should('contain', textMessage.backpackPrice);

        
        //Select price(low to high)
    cy.get(demoSelectors.dropdownSelector).select(textMessage.productFromLowToHigh);

    cy.get(demoSelectors.productNameSelector).eq(0).should('contain', textMessage.onesieTextName); 
    cy.get(addToCartSelectors.onesieSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', textMessage.onesieTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', textMessage.onesiePrice);

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(demoSelectors.productNameSelector).eq(5).should('have.text',textMessage.fleeceJacketTextName);
    cy.get(addToCartSelectors.fleeceJacketSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain',textMessage.fleeceJacketTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain',textMessage.fleecejacketPrice);
        

         // Select Price high to low
    cy.get(demoSelectors.dropdownSelector).select(textMessage.productFromHighToLow);
        
    cy.get(demoSelectors.productNameSelector).eq(0).should('have.text',textMessage.fleeceJacketTextName);
    cy.get(addToCartSelectors.fleeceJacketSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', textMessage.fleeceJacketTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', textMessage.fleecejacketPrice);

    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(demoSelectors.productNameSelector).eq(3).should('contain',  textMessage.tshirtRedTextName); 
    cy.get(addToCartSelectors.tshirtRedSelector).should('be.visible');
    cy.get(demoSelectors.productDescribeSelector).should('contain', textMessage.tshirtRedTextDescribe );
    cy.get(demoSelectors.productPriceSelector).should('contain',textMessage.tshirtRedPrice );

   
  })
})