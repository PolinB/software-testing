const PAGE_URL = 'http://localhost:3000';

describe('Screenshot tests with cypress', () => {
  it(`Welcome from home page`, () => {
    cy.visit(PAGE_URL);
    cy.screenshot();
  });

  it(`Open login page`, () => {
    let login = "a1234a";
    cy.visit(PAGE_URL + '/login');
    cy.get('input#login').click({force: true});
    cy.wait(100);
    cy.get('input#login').type(login);
    cy.wait(100);
    cy.get('#login-submit').click();
    cy.wait(100);
    cy.screenshot();
  });
});