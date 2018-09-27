//test for login lightbox
context('Login', function(){
    it('verify login lightbox is visible when login button is clicked', function(){
        cy.get('.button.log-in')
        cy.get('.signup-form').should('contain', 'Log in');
    });

    it('close the login light box when close icon is clicked', function(){
       cy.get('.portal-pages-close').click();
       cy.contains('Log in').should('not.be.visible')
    });

    // it('verifies the username and password text fields turn red when there is an error',function(){
    //     cy.get('.button.log-in').click();
    //     cy.get('#login-default-modal .submit-btn').click();
    // });

    it('log in to learn portal',function(){
        cy.get('.button.log-in').click();
        cy.get('#login-default-modal form input[type=text]').type('pplum');
        cy.get('#login-default-modal form input[type=password]').type('suspect');
        cy.get('.submit-btn').click();
        cy.wait(5000);
        cy.get('#clazzes_nav strong').should('contain','Peter Plum')
    });

});
