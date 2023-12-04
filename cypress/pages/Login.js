export default class Login {

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

    verifyLoginFaliedForInvalidCr() {
        cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!');
    }

};