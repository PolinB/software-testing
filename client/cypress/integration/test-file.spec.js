const PAGE_URL = 'http://localhost:3000';

describe('E2E tests with cypress', () => {
  it(`Welcome from home page`, () => {
    cy.visit(PAGE_URL);
    cy.get('#welcome').should('contain', 'Welcome to recipe book');
  });

  it('To recipes page without user', () => {
    cy.visit(PAGE_URL + '/recipes');
    cy.get('h1').should('contain', 'Recipes');
    cy.get('#all-recipes').should('be.empty');
  });

  it('Unregistered login', () => {
    let login = "a1234a"
    cy.visit(PAGE_URL + '/login');
    cy.get('input#login').click({force: true});
    cy.wait(100);
    cy.get('input#login').type(login);
    cy.wait(100);
    cy.get('#login-submit').click();
    cy.wait(100);
    cy.get('.error').should('not.be.empty').should('contain', 'Wrong login');
  });

  it('Empty login', () => {
    cy.visit(PAGE_URL + '/login');
    cy.get('input#login').click({force: true});
    cy.wait(100);
    cy.get('#login-submit').click();
    cy.wait(100);
    cy.get('.error').should('not.be.empty').should('contain', 'This is required');
  });

  it('Wrong name in register page', () => {
    let login = "a1234a";
    let firstName = '1234';
    let lastName = 'BBBB';
    let age = '11';
    cy.visit(PAGE_URL + '/register');
    cy.get('input#firstName').click({force: true});
    cy.wait(100);
    cy.get('input#firstName').type(firstName);
    cy.wait(100);
    cy.get('input#lastName').click({force: true});
    cy.wait(100);
    cy.get('input#lastName').type(lastName);
    cy.wait(100);
    cy.get('input#login').click({force: true});
    cy.wait(100);
    cy.get('input#login').type(login);
    cy.wait(100);
    cy.get('input#age').click({force: true});
    cy.wait(100);
    cy.get('input#age').type(age);
    cy.wait(100);
    cy.get('#register-submit').click();
    cy.wait(100);
    cy.get('.error').should('not.be.empty').should('contain', 'Use only Latin letters');
  });
})