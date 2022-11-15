describe('Login Page', () => {
    it('Shows correct text', () => {
        cy.visit('/auth')
        // cy.contains('h2', 'Login Page')
    })

    it('Login test', () => {
        cy.get('[type="text"]').clear()
        cy.get('.email').type('yatendra@singsys.com')
        cy.get('.password').type('12345678')
        cy.contains('Sign In').click()
        cy.url().should('eq', 'http://localhost:3000/admin/dashboard')
        cy.title().should('eq', 'Dashboard')
    })

    // it('Api Testing', () => {
    //     cy.log('Calling API')
    //     cy.request({
    //         method: 'GET',
    //         url: 'http://localhost:4000/total-users/',
    //         body: {
    //             grant_type: 'refresh_token',
    //             client_id: Cypress.env('googleClientId'),
    //             client_secret: Cypress.env('googleClientSecret'),
    //             refresh_token: Cypress.env('googleRefreshToken')
    //         }
    //     }).then(({ body }) => {
    //         const { data } = body
    //         expect(1).to.equal(data)
    //         console.log(data)
    //     })
    // })
})
