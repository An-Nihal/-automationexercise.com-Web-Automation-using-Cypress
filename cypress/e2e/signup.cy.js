import Signup from "../pages/Signup.js";
let userData;

const sup = new Signup();


describe('Signup', () => {

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

  it('Verify Title and Logo visibility', () => {
    sup.titleVisibility();
    sup.logoVisibility();
  });

  it('Click on Login/SignUp Button and Signup', () => {
    sup.clickLoginSignupButton();
    sup.typeUserName(userData.username);
    sup.typeEmail(userData.email);
    cy.wait(1000);
    sup.clickSignupButton();
    sup.verifyCreateAccountPage();
    cy.wait(1000);



    sup.selectGenderMale();
    sup.typePassword(userData.password);
    sup.selectDOB();
    sup.clickNewsLetter();
    sup.clickSpecialOffer();
    sup.typeFirstName(userData.firstName);
    sup.typeLastName(userData.lastName);
    sup.typeCompany(userData.company);
    sup.typeAddress(userData.address);
    sup.typeCountry(userData.country);
    sup.typeStateCityZip(userData.state, userData.city, userData.zip);
    sup.typeMobile(userData.mobile);
    sup.clickCreateAccountButton();

    cy.wait(1000);

    sup.verifyAccountCreation();
    cy.wait(2000);
    sup.clickLogout();

  });



  it('Signup User with existing email', () => {
    sup.clickLoginSignupButton();
    sup.typeUserName(userData.username);
    sup.typeEmail(userData.email);
    sup.clickSignupButton();
    sup.verifyExistingEmailWhenSignUp();
    cy.wait(1000);

  });

});
