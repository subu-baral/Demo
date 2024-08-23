describe('dropdown option ', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get('#user-name').clear().type("standard_user");
    cy.get('#password').clear().type("secret_sauce");
    cy.get('#login-button').click();
    cy.url().should('include','/inventory.html');

    cy.get('select[data-test="product-sort-container"]').should('be.enabled').and('be.visible');

    cy.get('option').eq(0).should('have.text','Name (A to Z)');
    cy.get('option').eq(1).should('have.text','Name (Z to A)');
    cy.get('option').eq(2).should('have.text','Price (low to high)');
    cy.get('option').eq(3).should('have.text','Price (high to low)');

    cy.get('[data-test="product-sort-container"]').select('za');
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Test.allTheThings() T-Shirt (Red)'); 
        cy.get('#item_3_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$15.99');

        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');

        cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text', 'Sauce Labs Backpack'); 
        cy.get('#item_4_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$29.99');
        
        //Select price(low to high)
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Onesie'); 
        cy.get('#item_2_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$7.99');

        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');

        cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text','Sauce Labs Fleece Jacket');
        cy.get('#item_5_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
        cy.get('div[data-test="inventory-item-price"]').should('contain','$49.99');
        

         // Select Price high to low
        cy.get('[data-test="product-sort-container"]').select('hilo');
        
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text','Sauce Labs Fleece Jacket');
        cy.get('#item_5_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
        cy.get('div[data-test="inventory-item-price"]').should('contain','$49.99');

        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');

        cy.get('div[data-test="inventory-item-name"]').eq(3).should('contain', 'Test.allTheThings() T-Shirt (Red)'); 
        cy.get('#item_3_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain', 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.');
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$15.99');

   
  })
})