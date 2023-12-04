
export default class Signup {

    titleVisibility() {
        cy.title().should('eq', 'Automation Exercise');
    }

    logoVisibility() {
        cy.get('a > img').should('be.visible');
    }

    clickLoginSignupButton() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }

    typeUserName(username) {
        cy.get('[data-qa="signup-name"]').type(username);
    }

    typeEmail(email) {
        cy.get('[data-qa="signup-email"]').type(email);
    }

    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();
    }

    verifyCreateAccountPage() {
        cy.get(':nth-child(1) > b').should('contains.text', 'Enter Account Information');
    }

    selectGenderMale() {
        cy.get('#id_gender1').click();
    }

    selectGenderFemale() {
        cy.get('#id_gender2').click();
    }

    typePassword(password) {
        cy.get('[data-qa="password"]').type(password);
    }

    selectDOB() {
        cy.get('[data-qa="days"]').select('16');
        cy.get('[data-qa="months"]').select('January');
        cy.get('[data-qa="years"]').select('1997');
    }

    clickNewsLetter() {
        cy.get('#newsletter').click();

    }

    clickSpecialOffer() {
        cy.get('#optin').click();
    }

    typeFirstName(firstName) {
        cy.get('[data-qa="first_name"]').type(firstName);
    }

    typeLastName(lastName) {
        cy.get('[data-qa="last_name"]').type(lastName);
    }

    typeCompany(company) {
        cy.get('[data-qa="company"]').type(company);
    }

    typeAddress(address) {
        cy.get('[data-qa="address"]').type(address);
    }

    typeCountry(country) {
        cy.get('[data-qa="country"]').select(country);
    }

    typeStateCityZip(state, city, zip) {
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(zip);
    }

    typeMobile(mobile) {
        cy.get('[data-qa="mobile_number"]').type(mobile);
    }

    clickCreateAccountButton() {
        cy.get('[data-qa="create-account"]').click();
    }

    verifyAccountCreation() {
        cy.get('b').should('have.text', 'Account Created!');
        cy.get('[data-qa="continue-button"]').click();
    }

    clickLogout() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click;
    }

    verifyExistingEmailWhenSignUp() {
        cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!');
    }

};

