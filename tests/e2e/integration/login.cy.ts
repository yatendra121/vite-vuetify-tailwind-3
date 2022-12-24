describe('Login Page', () => {
    it('Shows correct text', () => {
        cy.visit('/auth')
        // cy.contains('h2', 'Login Page')
    })

    it('Api Testing', async () => {
        cy.log('Calling API')
        let res: any = await fetch('http://localhost:3333/')
        res = await res.json()

        console.log({ res })

        expect('Welcome! This is node server.').to.equal(res.message)
    })

    it('Api User Testing', async () => {
        cy.log('Calling API')
        let res: any = await fetch('http://localhost:3333/api/user')
        res = await res.json()

        console.log({ res })

        expect(0).to.lessThan(res.data.total)
    })
})
