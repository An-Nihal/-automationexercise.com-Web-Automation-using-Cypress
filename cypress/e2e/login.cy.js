let userData;

describe('Login', () => {
    before(() => {
        // we will create a new alias before each test
        cy.fixture("userdata").then((data) => {
            userData = data;
        })
    });

    beforeEach(() => {
        cy.visit(Cypress.env('baseurl'));
    });


    it('Login with Created User', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type(userData.email);
        cy.get('[data-qa="login-password"]').type(userData.password);
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as ' + userData.name);
        cy.wait(1000);
    });

    it('Login with invalid user', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type('userData@email.com');
        cy.get('[data-qa="login-password"]').type('userData.password');
        cy.get('[data-qa="login-button"]').click();
        cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!');
        cy.wait(1000);
    });


});