import{demoSelectors}from "../support/selectors/demoSelectors"

describe('dropdown option ', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get(demoSelectors.userNameSelector).clear().type("standard_user");
    cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
    cy.get(demoSelectors.loginButtonSelector).click();
    cy.url().should('include','/inventory.html');

    cy.get('select[data-test="product-sort-container"]').should('be.enabled').and('be.visible');

    cy.get('option').eq(0).should('have.text','Name (A to Z)');
    cy.get('option').eq(1).should('have.text','Name (Z to A)');
    cy.get('option').eq(2).should('have.text','Price (low to high)');
    cy.get('option').eq(3).should('have.text','Price (high to low)');

    cy.get(demoSelectors.dropdownSelector).select('za');
        cy.get(demoSelectors.productNameSelector).eq(0).should('contain', 'Test.allTheThings() T-Shirt (Red)'); 
        cy.get(demoSelectors.ProductImageSelector).should('be.visible');
        cy.get(demoSelectors.productDescribeSelector).should('contain', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.get(demoSelectors.productPriceSelector).should('contain', '$15.99');

        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');

        cy.get(demoSelectors.productNameSelector).eq(5).should('have.text', 'Sauce Labs Backpack'); 
        cy.get(demoSelectors.ProductImageSelector).should('be.visible');
        cy.get(demoSelectors.productDescribeSelector).should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(demoSelectors.productPriceSelector).should('contain', '$29.99');
        
        //Select price(low to high)
        cy.get(demoSelectors.dropdownSelector).select('lohi');
        cy.get(demoSelectors.productNameSelector).eq(0).should('contain', 'Sauce Labs Onesie'); 
        cy.get('#item_2_title_link').should('be.visible');
        cy.get(demoSelectors.productDescribeSelector).should('contain', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get(demoSelectors.productPriceSelector).should('contain', '$7.99');

        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');

        cy.get(demoSelectors.productNameSelector).eq(5).should('have.text','Sauce Labs Fleece Jacket');
        cy.get('#item_5_title_link').should('be.visible');
        cy.get(demoSelectors.productDescribeSelector).should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
        cy.get(demoSelectors.productPriceSelector).should('contain','$49.99');
        

         // Select Price high to low
        cy.get(demoSelectors.dropdownSelector).select('hilo');
        
        cy.get(demoSelectors.productNameSelector).eq(0).should('have.text','Sauce Labs Fleece Jacket');
        cy.get('#item_5_title_link').should('be.visible');
        cy.get(demoSelectors.productDescribeSelector).should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
        cy.get(demoSelectors.productPriceSelector).should('contain','$49.99');

        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');

        cy.get(demoSelectors.productNameSelector).eq(3).should('contain', 'Test.allTheThings() T-Shirt (Red)'); 
        cy.get('#item_3_title_link').should('be.visible');
        cy.get(demoSelectors.productDescribeSelector).should('contain', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.get(demoSelectors.productPriceSelector).should('contain', '$15.99');

   
  })
})