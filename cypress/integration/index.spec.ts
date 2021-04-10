import '@testing-library/cypress';

describe('Homepage', () => {
  it('Should greet user (en)', () => {
    cy.visit('/');
    cy.findByText(/^Hello/i).contains('Hello John Smith !');
  });

  it('Should greet user (fr)', () => {
    cy.visit('/fr');
    cy.findByText(/^Bonjour/i).contains('Bonjour John Smith !');
  });

  it('Should greet user (en - ssg)', () => {
    cy.visit('/ssg');
    cy.findByText(/^Hello/i).contains('Hello John Smith !');
  });

  it('Should greet user (fr - ssg)', () => {
    cy.visit('/fr/ssg');
    cy.findByText(/^Bonjour/i).contains('Bonjour John Smith !');
  });

  it('Should greet user (en - ssr)', () => {
    cy.visit('/ssr');
    cy.findByText(/^Hello/i).contains('Hello John Smith !');
  });

  it('Should greet user (fr - ssr)', () => {
    cy.visit('/fr/ssr');
    cy.findByText(/^Bonjour/i).contains('Bonjour John Smith !');
  });
});
