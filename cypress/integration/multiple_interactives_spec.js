context('Multiple Interactives', () => {


  it('finds a word', () => {


    cy.contains('Log In').click()
    cy.get('div [class = "text-input user[login]"]').find('input')
      .type(admin.username)
  })
})
