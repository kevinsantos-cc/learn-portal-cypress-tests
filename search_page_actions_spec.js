context('Search Page Features', function() {

	it('Verifies that activities come up', () => {
		cy.get('div [class = "portal-pages-finder-result col-4"]')
			.first().click()
			.should('be.visible')
	})

	it('Verifies that blue description comes up when hovering', () => {
		cy.visit('https://learn.staging.concord.org')
		cy.get('div [class = "portal-pages-finder-result col-4"]')
			.first().trigger('mouseover')
			.get('div [class = "portal-pages-finder-result-description"]')
			.should('be.visible')

	})

	it('Verifies that clicking on preview results in correct activity', () => {
		cy.get('div [class = "portal-pages-finder-result col-4"]')
			.first().click()
		cy.contains('Preview').click()

	})

	it.only('Verifies that filter results in correct activities', () => {
		cy.contains('Sequence')
			.click('center',{force:true})
			//find out why there aren't persisting results. Cypress bug?
	})

	it('Verifies that searching keyword pulls up correct results', () => {
		cy.get('form').first().find('input').type('catalysts')
			.parent().parent().submit()
			//find out why there aren't persisting results. Cypress bug?

	})

	it('Verifies that invalid keyword pulls up nothing', () => {
		cy.get('form').first().find('input').type('jkdnbkhglfjgnhldfg')

	})

})

//context('Portal Welcome Page Features', function() {
//      cy.contains('Log In').click()
//      cy.get('div [class = "text-input user[login]"]').find('input').type('kteacher1')
//      cy.get('div [class = "text-input user[password]"]').find('input').type('Schaiblich11c')
//      cy.get('button').contains('Log In!').click()
//	})


//  it('Creates a copy of the activity', () => {
//    cy.get('.mb-copy').first().click()
//  })

//  it('Previews the activity', () => {
//    cy.get('.mb-run').first().find('span').click()
//  })

//  it('Assigns activity to class', () => {
//    cy.get('.mb-assign-to-class').first().click()
//  })
