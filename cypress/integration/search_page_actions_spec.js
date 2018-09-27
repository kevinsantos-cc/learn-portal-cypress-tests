context('Search Page Features', function() {

	beforeEach( function() {
		cy.visit('learn.staging.concord.org')
	})

	it('Verifies that activities come up', () => {
		cy.get('.portal-pages-finder-header-resource-count')
			.should('not.have.value', 'No Resources Found')
	})

	it('Verifies that blue description comes up when hovering', () => {
		cy.get('div [class = "portal-pages-finder-result col-4"]')
			.first().trigger('mouseover')
			.get('div [class = "portal-pages-finder-result-description"]')
			.should('be.visible')

	})

	it('Verifies that clicking on preview results in correct activity', () => {
		cy.get('div [class = "portal-pages-finder-results-cards"]')
			.first().find('a').first().click()
			.then(function($a) {
				const href = $a.prop('href')
				cy.visit(href)
				cy.url().should('include', href)
			})
	})

	it.only('Verifies that filter results in correct activities', () => {

		cy.get('.portal-pages-finder-form-filters-option')
			.eq(0).find('label').click().should('be.visible')
			.get('.portal-pages-finder-result-resource-type')
			.should('have.value', 'Sequence')
			//find out why there aren't persisting results. Cypress bug?
	})

	it('Verifies that searching keyword pulls up correct results', () => {


		//cy.get('form').first().find('input').type('catalysts')
			//.parent().parent().submit()
			//find out why there aren't persisting results. Cypress bug?

	})

	it('Verifies that invalid keyword pulls up nothing', () => {
		cy.get('form').first().find('input').type('jkdnbkhglfjgnhldfg')

	})
})

//
