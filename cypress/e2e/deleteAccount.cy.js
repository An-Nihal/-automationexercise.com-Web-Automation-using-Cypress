let userData;

describe('Delete Account', () => {
    before(() => {
        // we will create a new alias before each test
        cy.fixture("userdata").then((data) => {
            userData = data;
        })
    });

    beforeEach(() => {
        cy.visit(Cypress.env('baseurl'));
    });


    it('Login with Created User and Delete the user', () => {

        //login
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="login-email"]').type(userData.email);
        cy.get('[data-qa="login-password"]').type(userData.password);
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as ' + userData.name);
        cy.wait(1000);

        //delete and verify deletion
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.get('b').should('be.visible');
        cy.get('b').should('have.text', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();

    });

});