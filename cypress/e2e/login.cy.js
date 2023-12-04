import Login from "../pages/Login";
let userData;

const lgn = new Login();

describe('Login', () => {
    before(() => {
        // we will create a new alias before each test
        cy.clearAllCookies();
        cy.fixture("userdata").then((data) => {
            userData = data;
        })
    });

    beforeEach(() => {
        cy.visit(Cypress.env('baseurl'));
    });


    it('Login with Created User', () => {

        lgn.clickLoginSignup();
        lgn.typeEmail(userData.email);
        lgn.typePassword(userData.password);
        cy.wait(1000);
        lgn.clickLoginButton();
        cy.wait(1000);
        lgn.verifyLoggedIn(userData.username);
        cy.wait(1000);
    });

    it('Login with invalid user', () => {

        lgn.clickLoginSignup();
        lgn.typeEmail("fake@fakemail.com");
        lgn.typePassword("ffff55555");
        lgn.clickLoginButton();
        lgn.verifyLoginFaliedForInvalidCr();
        cy.wait(1000);
    });


});