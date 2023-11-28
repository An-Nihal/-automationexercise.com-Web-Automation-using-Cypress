import 'cypress-file-upload';
let userData;

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
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('.col-sm-12 > .title').should('have.text', 'Contact Us');
    cy.get('[data-qa="name"]').type(userData.name);
    cy.get('[data-qa="email"]').type(userData.email);
    cy.get('[data-qa="subject"]').type('Performing Automation');
    cy.get('[data-qa="message"]').type('Hudai!! Just practicing some automation.!');
    cy.get(':nth-child(6) > .form-control').attachFile('test.png');
    cy.wait(1000);
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    cy.wait(1000);
    cy.get('span').click();

  })
})