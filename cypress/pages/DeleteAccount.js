export default class DeleteAccount {

    clickLoginSignup() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }

    typeEmail(email) {
        cy.get('[data-qa="login-email"]').type(email);
    }

    typePassword(password) {
        cy.get('[data-qa="login-password"]').type(password);
    }

    clickLoginButton() {
        cy.get('[data-qa="login-button"]').click();
    }

    verifyLoggedIn(username) {
        cy.get(':nth-child(10) > a').should('have.text', ' Logged in as ' + username);
    }

    clickDeleteAccountButton() {
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    }

    verifyAccountDeletion() {
        cy.get('b').should('be.visible');
        cy.get('b').should('have.text', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    }

};