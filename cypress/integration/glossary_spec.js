context('Reusable "login" custom command', function(){
    // typically we'd put this in cypress/support/commands.js
    // but because this custom command is specific to this example
    // we'll keep it here
    Cypress.Commands.add('loginByForm', (username, password) => {

      return cy.request({
        method: 'POST',
        url: '/login',
        form: true,
        body: {
          username: username,
          password: password

        }
      })
    })
