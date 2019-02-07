describe("Testing user-urls component", () => {
  it("Testing CRUD ", () => {
    cy.server({
      method: 'POST',
      delay: 1000,
      headers: {
        'token': '1'
      }
    })
    cy.route('/user', { success: true, token: 1 })
    cy.route('/getCurrentUser', { id: 1, email: 'user1@hotmail.com' })
    cy.route('/newUrl', { url: 'probando url', UserId: 1, score: 1 })

    cy.visit('localhost:3000')
      .get('input[type="email"]')
      .type('user1@hotmail.com')
      .get('input[type="password"]')
      .type('holamundo')
      .get('.green').click()
      .url().should('include', 'http://localhost:3000/user-urls')
      .get('.create').click()
      .get('input[type="text"]')
      .type('probando url')
      .get('input[type="number"]')
      .type('5')
      .get('.green').click()
  })
  // it("Testting login with a user that does not exist", () => {
  //   cy.server({
  //     method: 'POST',
  //     delay: 1000,
  //   })
  //   cy.route('/user', { email: 'user1@hotmail.com', password: '' })
  //   cy.route('/getCurrentUser', { id: 1 })
  //   cy.visit('localhost:3000')
  //     .get('input[type="email"]')
  //     .type('nouser@hotmail.com')
  //     .get('input[type="password"]')
  //     .type('error')
  //     .get('.green').click()
  // })
})
