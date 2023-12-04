let userData;

describe('Product, Cart, Payment and Purchase', () => {
  before(() => {
    // we will create a new alias before each test
    cy.clearAllCookies();
    cy.fixture("userdata").then((data) => {
      userData = data;
    })
  });


  beforeEach(() => {
    cy.visit(Cypress.env('baseurl') + '/products');
  });

  it('Add any two product to cart and try to checkout without login', () => {

    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.wait(1000);
    cy.get('.modal-body > :nth-child(1)').should('have.text', 'Your product has been added to cart.');
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(19) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.wait(1000);
    cy.get('.modal-body > :nth-child(1)').should('have.text', 'Your product has been added to cart.');
    cy.get('.modal-footer > .btn').click();


    cy.get('.shop-menu > .nav > :nth-child(3) > a').click({ force: true }); //cart
    cy.get('.col-sm-6 > .btn').click();  //proceed to checkout
    cy.get('.modal-body > :nth-child(1)').should('have.text', 'Register / Login account to proceed on checkout.');
    cy.wait(1000);

  });

  it('Add any two product to cart, checkout and make payment', () => {

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click(); // click login

    cy.get('[data-qa="login-email"]').type(userData.email);
    cy.get('[data-qa="login-password"]').type(userData.password);
    cy.get('[data-qa="login-button"]').click();
    cy.wait(1000);

    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.wait(1000);
    cy.get('.modal-body > :nth-child(1)').should('have.text', 'Your product has been added to cart.');
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(19) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.wait(1000);
    cy.get('.modal-body > :nth-child(1)').should('have.text', 'Your product has been added to cart.');
    cy.get('.modal-footer > .btn').click();


    cy.get('.shop-menu > .nav > :nth-child(3) > a').click(); //cart
    cy.get('.col-sm-6 > .btn').click();  //proceed to checkout

    //verify delivery address

    cy.get('#address_delivery > .address_firstname').should('have.text', 'Mr. ' + userData.firstName + " " + userData.lastName);
    cy.get('#address_delivery > :nth-child(3)').should('have.text', userData.company);
    cy.get('#address_delivery > :nth-child(4)').should('have.text', userData.address);
    cy.get('#address_delivery > .address_country_name').should('have.text', userData.country);
    cy.get('#address_delivery > .address_phone').should('have.text', userData.mobile);

    cy.get('.form-control').type('Please send the orders and let my automation successful');
    cy.get(':nth-child(7) > .btn').click();

    //payment
    cy.get('[data-qa="name-on-card"]').type(userData.firstName + " " + userData.lastName);
    cy.get('[data-qa="card-number"]').type(userData.cardNumber);
    cy.get('[data-qa="cvc"]').type(userData.cvc);
    cy.get('[data-qa="expiry-month"]').type(userData.expMonth);
    cy.get('[data-qa="expiry-year"]').type(userData.expYear);
    cy.get('[data-qa="pay-button"]').click();

    //order place verification
    cy.get('[data-qa="order-placed"] > b').should('be.visible');
    cy.get('[data-qa="order-placed"] > b').should('have.text', 'Order Placed!');
    cy.wait(1000);

    //download invoice and verify the download, then delete the file
    //cy.get('.col-sm-9 > .btn-default').click();
    cy.get('[data-qa="continue-button"]').click();
    // cy.verifyDownload('invoice.txt');
    // cy.deleteDownloadsFolder();

  });

});
