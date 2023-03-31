// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe('Finder', () => {
    const linksWithAgentEmail = []
    const linksWithBusinessEmail = []
    const links = require('../fixtures/links.json')
    links.map((item, index) => {
        it('Visit Website', () => {
            cy.visit(item.url);
        });
        it('Find Email info@agentimage.com', () => {
            cy.get('a[href="mailto: info@agentimage.com"]').should('exist').then((e) => {
                if(e.length === 1){
                    linksWithAgentEmail.push(item.url)
                }
            })
        });
        it('Find Email business@agentimage.com', () => {
            cy.get('a[href="mailto: business@agentimage.com"]').should('exist').then((e) => {
                if(e.length === 1){
                    linksWithBusinessEmail.push(item.url)
                }
            })
        });
    })
    it('Write Files', () => {
        linksWithAgentEmail.forEach((item, index) => {
            cy.writeFile('data/agentemail.txt', `${item}\n`, {flag: 'a+'})
        })
        linksWithBusinessEmail.forEach((item, index) => {
            cy.writeFile('data/businessemail.txt', `${item}\n`, {flag: 'a+'})
        })
    })
}); 