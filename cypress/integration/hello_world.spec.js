describe('Hello world', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })
    it('frontpage can be opened', () => {
        cy.contains('Este es mi componente')
    })

    it('button clicked', () => {
        cy.contains('Test button').click()
    })

    it('input text', () => {
        cy.contains('Test button').click()
        cy.get('input').first().type('DWU')
        cy.get('input').last().type('Desarrollos Web Urquiza')
    })

})
