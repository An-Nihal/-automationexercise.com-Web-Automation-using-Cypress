import DeleteAccount from "../pages/DeleteAccount";
let userData;

const del = new DeleteAccount();

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
        del.clickLoginSignup();
        del.typeEmail(userData.email);
        del.typePassword(userData.password);
        del.clickLoginButton();
        del.verifyLoggedIn(userData.username);
        cy.wait(1000);

        //delete and verify deletion
        del.clickDeleteAccountButton();
        del.verifyAccountDeletion();

    });

});