import ContactUs from '../pages/ContactUs';
import 'cypress-file-upload';
let userData;

const contus = new ContactUs();

describe('Contact Us Page', () => {
  before(() => {
    // we will create a new alias before each test
    cy.fixture("userdata").then((data) => {
      userData = data;
    })
  })
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'));
  })

  it('Goto Contact Us and submit a feedback with file upload', () => {

    contus.clickContactUs();
    contus.typeName(userData.username);
    contus.typeEmail(userData.email);
    contus.typeSubject('Cypress Web AUtomation!!');
    contus.typeMessage('Checking this for automating this website.! ');
    contus.attachFile('test.png');
    cy.wait(1000);

    contus.clickSubmit();
    contus.clickHome();
    cy.wait(1000);

  })
});