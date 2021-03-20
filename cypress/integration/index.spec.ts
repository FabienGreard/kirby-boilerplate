import '@testing-library/cypress';

describe('Homepage', () => {
  it('Should greet user (en)', () => {
    cy.visit('/');
    cy.findByText(/^Hello/i).contains('Hello World !');
  });

  it('Should greet user (fr)', () => {
    cy.visit('/fr');
    cy.findByText(/^Bonjour/i).contains('Bonjour le monde !');
  });
});
