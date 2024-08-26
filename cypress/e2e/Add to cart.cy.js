import{demoSelectors}from "../support/selectors/demoSelectors"
import { addToCartSelectors } from "../support/selectors/addToCartSelectors";
import { dropdownOptionSelectors } from "../support/selectors/dropdownOptionSelectors";

describe('Product page', () => {
  it('product page should be visible', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get(demoSelectors.userNameSelector).clear().type("standard_user");
    cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
    cy.get(demoSelectors.loginButtonSelector).click();
    cy.url().should('include','/inventory.html');

    cy.get(demoSelectors.addToCartSelector).should('be.visible');
    cy.get(addToCartSelectors.backpackSelector).should('be.visible');

    cy.get(demoSelectors.productNameSelector).eq(0).should('have.text', dropdownOptionSelectors.backpackTextName)
    .click(); 
    cy.url().should('include','https://www.saucedemo.com/inventory-item.html?id=4');

    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.backpackTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.backpackPrice);
    cy.get(addToCartSelectors.addToCartButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include','/inventory.html');

    cy.get(addToCartSelectors.bikeLightSelector).should('be.visible');
    cy.get(demoSelectors.productNameSelector).eq(1).should('have.text', dropdownOptionSelectors.bikeLightTextName)
    .click(); 
    
    cy.url().should('include','https://www.saucedemo.com/inventory-item.html?id=0');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.bikeLightTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.bikeLightPrice);
    cy.get(addToCartSelectors.addToCartButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include','/inventory.html');

    cy.get(addToCartSelectors.boltTshirtSelector).should('be.visible');
    cy.get(demoSelectors.productNameSelector).eq(2).should('have.text', dropdownOptionSelectors.boltTshirtTextName)
    .click(); 
 
    cy.url().should('include','https://www.saucedemo.com/inventory-item.html?id=1');
    cy.get(demoSelectors.productDescribeSelector).should('contain', dropdownOptionSelectors.boltTshirtTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain', dropdownOptionSelectors.boltTshirtPrice);
    cy.get(addToCartSelectors.addToCartButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include','/inventory.html');

    cy.get(addToCartSelectors.fleeceJacketSelector).should('be.visible');
    cy.get(demoSelectors.productNameSelector).eq(3).should('have.text',dropdownOptionSelectors.fleeceJacketTextName)
    .click();
    cy.url().should('include','https://www.saucedemo.com/inventory-item.html?id=5');
    cy.get(demoSelectors.productDescribeSelector).should('contain',dropdownOptionSelectors.fleeceJacketTextDescribe);
    cy.get(demoSelectors.productPriceSelector).should('contain',dropdownOptionSelectors.fleecejacketPrice);
    cy.get(addToCartSelectors.addToCartButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include','/inventory.html');

    cy.get(addToCartSelectors.shoppingCartBadge).should('be.visible').and('contain', '4');
    cy.get(demoSelectors.addToCartSelector).click();
    cy.url().should('include','/cart.html');
    cy.get(addToCartSelectors.yourCartText).should('have.text', 'Your Cart');
    cy.get(addToCartSelectors.quantitySelector).should('have.text', 'QTY'); 
    cy.get(addToCartSelectors.descriptionSelector).should('have.text', 'Description');

    cy.get(demoSelectors.productNameSelector).eq(0).should('contain', dropdownOptionSelectors.backpackTextName); 
    cy.get(demoSelectors.productNameSelector).eq(2).should('contain', dropdownOptionSelectors.boltTshirtTextName); 

  
    cy.get(demoSelectors.productNameSelector).eq(0).should('have.text', dropdownOptionSelectors.backpackTextName)
    .click(); 
    cy.url().should('include','https://www.saucedemo.com/inventory-item.html?id=4');
    cy.get(addToCartSelectors.removeButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include','/inventory.html'); 
    cy.get(addToCartSelectors.shoppingCartBadge).should('be.visible').and('contain', '3');
    cy.get(demoSelectors.addToCartSelector).click();
    cy.url().should('include','https://www.saucedemo.com/cart.html');

    cy.get(demoSelectors.productNameSelector).eq(2).should('have.text', dropdownOptionSelectors.fleeceJacketTextName)
    .click();
    cy.url().should('include','https://www.saucedemo.com/inventory-item.html?id=5');
    cy.get(addToCartSelectors.removeButton).should('be.visible')
    .click();
    cy.get(addToCartSelectors.backToProduct).should('be.visible').click();
    cy.url().should('include','/inventory.html'); 
    cy.get(addToCartSelectors.shoppingCartBadge).should('be.visible').and('contain', '2');
    cy.get(demoSelectors.addToCartSelector).click();


    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(addToCartSelectors.continueShoppingButton).click();
    cy.url().should('include','https://www.saucedemo.com/inventory.html');
    cy.get(demoSelectors.addToCartSelector).should('be.visible').click();
    cy.scrollTo('bottom');
    cy.get('.footer').should('be.visible');

    cy.get(addToCartSelectors.checkoutButton).click();
    cy.url().should('include','https://www.saucedemo.com/checkout-step-one.html');
    cy.get(addToCartSelectors.yourCartText).should('have.text', 'Checkout: Your Information');
    cy.get(addToCartSelectors.firstNameSelector).should('have.attr', 'placeholder', 'First Name').click();
    cy.get(addToCartSelectors.lastNameSelector).should('have.attr', 'placeholder', 'Last Name').click();
    cy.get(addToCartSelectors.postalCodeSelector).should('have.attr', 'placeholder', 'Zip/Postal Code').click();

     //leave input field
     cy.get(addToCartSelectors.firstNameId).clear();
     cy.get(addToCartSelectors.lastNameId).clear();
     cy.get(addToCartSelectors.postalCodeId).clear();
     cy.get(addToCartSelectors.continueButton).click();
     cy.get('div[class="error-message-container error"]').should('be.visible');
     cy.get('h3').should('have.text','Error: First Name is required');

     //Enter input field
     cy.get(addToCartSelectors.firstNameId).clear().type('a');
     cy.get(addToCartSelectors.lastNameId).clear().type('b');
     cy.get(addToCartSelectors.postalCodeId).clear().type('c');
     cy.get(addToCartSelectors.cancelButton).click();

     cy.url().should('include','https://www.saucedemo.com/cart.html');
     cy.scrollTo('bottom');
     cy.get('.footer').should('be.visible');

     cy.get(addToCartSelectors.checkoutButton).click();
     cy.url().should('include','https://www.saucedemo.com/checkout-step-one.html');
     cy.get(addToCartSelectors.firstNameId).clear().type('Subhekshya');
     cy.get(addToCartSelectors.lastNameId).clear().type('Baral');
     cy.get(addToCartSelectors.postalCodeId).clear().type('12345');

     cy.get(addToCartSelectors.continueButton).click();
     cy.url().should('include','https://www.saucedemo.com/checkout-step-two.html');
     cy.get('.title').should('have.text', 'Checkout: Overview');
     cy.get(demoSelectors.productNameSelector).eq(0).should('have.text', dropdownOptionSelectors.bikeLightTextName); 
     cy.get(demoSelectors.productNameSelector).eq(1).should('have.text', dropdownOptionSelectors.boltTshirtTextName); 
     cy.scrollTo('bottom');
     cy.get('.footer').should('be.visible');
     cy.get(addToCartSelectors.paymentInfoLevelSelector).should('have.text','Payment Information:');
     cy.get(addToCartSelectors.paymentInfoValueSelector).should('have.text','SauceCard #31337');
     cy.get(addToCartSelectors.shippingInfoLevelSelector).should('have.text','Shipping Information:');
     cy.get(addToCartSelectors.shippingInfoValueSelector).should('have.text','Free Pony Express Delivery!');
     cy.get(addToCartSelectors.totalInfoLevelSelector).should('have.text','Price Total');
     cy.get(addToCartSelectors.subtotalLevelSelector).should('have.text','Item total: $25.98');
     cy.get(addToCartSelectors.taxlevelSelector).should('have.text','Tax: $2.08');
     cy.get(addToCartSelectors.totalLabelSelector).should('have.text','Total: $28.06');

     cy.get(addToCartSelectors.finishButton).click();
     cy.url().should('include','https://www.saucedemo.com/checkout-complete.html');
     cy.get('.title').should('have.text', 'Checkout: Complete!');
     cy.get('h2[data-test="complete-header"]').should('have.text','Thank you for your order!');
     cy.get('div[data-test="complete-text"]').should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!');
     cy.get(addToCartSelectors.backToProduct).click();
     cy.url().should('include','https://www.saucedemo.com/inventory.html');

  })
})