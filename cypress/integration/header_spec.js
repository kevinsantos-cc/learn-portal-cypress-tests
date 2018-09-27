describe('Portal Welcome Page Features', function() {
	before(function() {
			cy.visit('https://itsi-test.portal.concord.org/')
	})

it('Goes to Explore ITSI activities Page', () => {
	cy.contains('Explore ITSI activities').click()
})

it('verify logo', () => {
	cy.get('div[class="concord-logo undefined"]').should('be.visible');
})

it('Verifies the About link goes to About Page', () =>{
	cy.contains('About').click()
	cy.url().should('include', '/about')
})

it('Verifies the Register button opens correct dialog', () => {
	cy.contains("Register").click()
})

it('Verifies the Register button opens correct dialog', () => {
	cy.contains("Register").click()
})
