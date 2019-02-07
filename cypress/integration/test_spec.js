describe("Testin user-urls login component", ()=>{
  it("Testing login with a user that exist in the db", ()=>{
    cy.visit('localhost:3000')
      .get('input[type="email"]')
      .type('user1@hotmail.com')
      .get('input[type="password"]')
      .type('holamundo')
      .get('.green').click()
      .get('.logOut').click()

      
  })
  it("Testting login with a user that does not exist", ()=>{
    cy.visit('localhost:3000')
      .get('input[type="email"]')
      .type('nouser@hotmail.com')
      .get('input[type="password"]')
      .type('error')
      .get('.green').click()
  })
})