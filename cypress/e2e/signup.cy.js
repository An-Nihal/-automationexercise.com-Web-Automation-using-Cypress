
let userData;

describe('Signup', () => {

  before(() => {
    // we will create a new alias before each test
    cy.fixture("userdata").then((data) => {
      userData = data;
    })
  });

  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'));
  });

  it('Verify Title and Logo visibility', () => {
    cy.title().should('eq', 'Automation Exercise');
    cy.get('a > img').should('be.visible');

  });

  it('Click on Login/SignUp Button and Signup', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('contains.text', 'Enter Account Information');
    cy.wait(1000);

    cy.get('#id_gender1').click();
    cy.get('[data-qa="password"]').type(userData.password);
    cy.get('[data-qa="days"]').select('16');
    cy.get('[data-qa="months"]').select('January');
    cy.get('[data-qa="years"]').select('1997');
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('[data-qa="first_name"]').type(userData.firstName);
    cy.get('[data-qa="last_name"]').type(userData.lastName);
    cy.get('[data-qa="company"]').type(userData.company);
    cy.get('[data-qa="address"]').type(userData.address);
    cy.get('[data-qa="country"]').select(userData.country);
    cy.get('[data-qa="state"]').type(userData.state);
    cy.get('[data-qa="city"]').type(userData.city);
    cy.get('[data-qa="zipcode"]').type(userData.zip);
    cy.get('[data-qa="mobile_number"]').type(userData.mobile);
    cy.get('[data-qa="create-account"]').click();
    cy.wait(1000);

    cy.get('b').should('have.text', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click();
    cy.wait(2000);

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click;

  });

  it('Signup User with existing email', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!');
    cy.wait(1000);
  });



})
