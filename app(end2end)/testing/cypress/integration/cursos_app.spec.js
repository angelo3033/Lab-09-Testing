describe('Cursos App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('frontpage can be opened', () => {
        cy.contains('Half Stack application development')
    })

    it('Cursos de Node', () => {
        cy.contains('Node.js')
    })

    it('Probando los votos', () => {
        cy.contains('Give feedback')
    })

    it('votos', () => {
        cy.contains('good').click()
        cy.contains('neutral').click()
        cy.contains('bad').click()
        cy.contains('all: 3')
    })

    it('Probando la guia telefonica', () => {
        cy.contains('Phonebook')
    })

    it('guia telefonica', () => {
        cy.get('[placeholder="newName"]').type('Angelo')
        cy.get('[placeholder="newNumber"]').type('960827366')
        cy.get('#form-phonebook').click()
        cy.contains('Angelo, 0960827366')
        cy.get('[placeholder="filter"]').type('Angelo')
    })
})