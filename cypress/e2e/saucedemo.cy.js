describe('template spec', () => {
  
  it('login success', () => {
    cy.loginsouce('standard_user','secret_sauce')
    cy.url().should('include','https://www.saucedemo.com/inventory.html')
  })

  it('login failed-emty pswd', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain.text','Password is required')
  })
})
