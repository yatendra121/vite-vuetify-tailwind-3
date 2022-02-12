describe('Login Page', () => {
    it('Shows correct text', () => {
        cy.visit('/auth')
        cy.contains('h2', 'Login Page')
    })

    it('Login test', () => {
        cy.get('[type="text"]').clear()
        cy.get('.email').type('yatendra@singsys.com')
        cy.get('.password').type('123456789')
        cy.contains('Submit').click()
        cy.url().should('eq', 'http://localhost:3000/dashboard')
        cy.title().should('eq', 'Dashboard')
    })
})
