// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Finder', () => {
  it('Visit Website', () => {
      cy.visit('https://gatsby.agentimage.com/choose-a-website');
  });
  it('Find Sales Number', () => {
      cy.get('a[href="tel:+1.800.979.5799"]').should('exist');
  });
  it('Find Support Number', () => {
      cy.get('a[href="tel:+1.877.317.4111"]').should('exist');
  });
  it('Find International Number', () => {
      cy.get('a[href="tel:+1.310.595.9033"]').should('exist');
  });
  
  it('Find Email info@agentimage.com', () => {
      cy.get('a[href="mailto:info@agentimage.com"]').should('exist');
  });
  it('Find Email business@agentimage.com', () => {
      cy.get('a[href="mailto:business@agentimage.com"]').should('exist');
  });
}); 