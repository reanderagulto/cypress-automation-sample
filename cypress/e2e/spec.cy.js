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
    const links = require('../fixtures/links.json')
    links.map((item, index) => {
        it(`Visit Website: ${item.url}`, () => {
            cy.visit(item.url);
        });
        it('Find Email info@agentimage.com', () => {
            cy.get('a[href="mailto: info@agentimage.com"]').should('exist').then((e) => {
                if(e.length === 1){
                    cy.writeFile('data/agentemail.txt', `${item.url}\n`, {flag: 'a+'}).then(() => {
                        console.log("Data Successfully Written to agentemail.txt");
                    })
                }
            })
        });
        it('Find Email business@agentimage.com', () => {
            cy.get('a[href="mailto: business@agentimage.com"]').should('exist').then((e) => {
                if(e.length === 1){
                    cy.writeFile('data/businessemail.txt', `${item.url}\n`, {flag: 'a+'}).then(() => {
                        console.log("Data Successfully Written to businessemail.txt");
                    })
                }
            })
        });
    })
}); 