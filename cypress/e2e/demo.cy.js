import{demoSelectors}from "../support/selectors/demoSelectors"
import { addToCartSelectors } from "../support/selectors/addToCartSelectors";
describe ('Login page', ()=>{
  it.skip('login page should be visible', ()=>{

      // visit the swag lab page
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('eq', 'https://www.saucedemo.com/');
      cy.contains('Swag Labs');

      // placeholders should be visible and clickable
      cy.get(demoSelectors.userNamePlaceholderSelector).should('have.attr', 'placeholder', 'Username').click();
      cy.get(demoSelectors.passwordPlaceholderSelector).should('have.attr', 'placeholder', 'Password').click();
      cy.get(demoSelectors.loginButtonPlaceholderSelector).should('have.value', 'Login').click();
   })

     //invalid login with incorrect username
  it('Invalid login with incorrect username',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("Tester");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();
      cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
  })

      // Invalid login with incorrect username and password
  it('Invalid username and paswword',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("Tester");
      cy.get(demoSelectors.passwordSelector).clear().type("TESTEETR");
      cy.get(demoSelectors.loginButtonSelector).click();
      cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
  })

      // Login with locked_out_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("locked_out_user");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();
 })

       // Login with problem_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("problem_user");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();
  })

      // Login with performance_glitch_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("performance_glitch_user");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();
})   

      // Login with error_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("error_user");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();
  })

      // Login with error_user
  it('Login with locked_out_user',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("visual_user");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();
  })
      // Valid login with standard user
  it.only('Valid login with standard user with valid password',()=>{
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('eq', 'https://www.saucedemo.com/');
      cy.get(demoSelectors.userNameSelector).clear().type("standard_user");
      cy.get(demoSelectors.passwordSelector).clear().type("secret_sauce");
      cy.get(demoSelectors.loginButtonSelector).click();

      cy.url().should('include','/inventory.html');
      cy.get(demoSelectors.burgerMenuSelector).should('be.visible')
      .and('be.enabled');
      cy.contains('Swag Labs');
      cy.get(demoSelectors.addToCartSelector).should('be.visible');
      cy.get('.title').should('have.text', 'Products');
      cy.get(demoSelectors.dropdownSelector).should('be.enabled')
      .and('be.visible');
      
      //Items should be visible
      cy.get(demoSelectors.productNameSelector).eq(0).should('contain', 'Sauce Labs Backpack'); 
      cy.get(addToCartSelectors.backpackSelector).should('be.visible');
      cy.get(demoSelectors.productDescribeSelector).should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
      cy.get(demoSelectors.productPriceSelector).should('contain', '$29.99');
      cy.get(demoSelectors.addtoCartBackpack).should('be.visible');

      cy.get(demoSelectors.productNameSelector).eq(3).should('have.text','Sauce Labs Fleece Jacket');
      cy.get(addToCartSelectors.fleeceJacketSelector).should('be.visible');
      cy.get(demoSelectors.productDescribeSelector).should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
      cy.get(demoSelectors.productPriceSelector).should('contain','$49.99');
      cy.get(demoSelectors.addtoCartFleeceJacket ).should('be.visible');

      //scroll down
      cy.scrollTo('bottom');
      cy.get('.footer').should('be.visible');
      
      // Logout
      cy.get(demoSelectors.burgerMenuSelector).should('be.visible')
      .click();
      
      cy.get(demoSelectors.logOutSelector)
      .and('have.text','Logout')
      .and('have.attr', 'href', '#')
      .click();
      cy.url().should('include','saucedemo.com'); 
  })
})