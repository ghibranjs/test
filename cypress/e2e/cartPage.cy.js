describe('template spec', () => {
  
    it('test cart page', () => {
      cy.loginsouce('standard_user','secret_sauce')
      cy.url().should('include','https://www.saucedemo.com/inventory.html')
   
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('contain.text','1')
        cy.get('[data-test="shopping-cart-link"]').click()
    })
  })