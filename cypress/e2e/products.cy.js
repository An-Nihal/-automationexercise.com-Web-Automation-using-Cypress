describe('Products Page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseurl') + '/products');
    })

    it('search a product', () => {
        //search some jeans
        cy.get('#search_product').should('be.visible');
        cy.get('#search_product').type('jeans');
        cy.get('#submit_search').click();
        cy.wait(1000);

        //now clear search bar and search some tops

        cy.get('#search_product').clear();
        cy.get('#search_product').type('top');
        cy.get('#submit_search').click();
        cy.wait(1000);
    });

    it('View product Category', () => {
        // Selecting Men's T-shirt Category and verifying
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').should('be.visible');
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
        cy.get('.title').should('have.text', 'Men - Tshirts Products');
        cy.wait(1000);

        //Kids dress category and verifying
        cy.get(':nth-child(3) > .panel-heading > .panel-title > a').click();
        cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').should('be.visible');
        cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').click();
        cy.get('.title').should('have.text', 'Kids - Dress Products');
        cy.wait(1000);
    });

    it('Verifying Brands product', () => {
        cy.get('.brands-name > .nav > :nth-child(2) > a').should('be.visible');
        cy.get('.brands-name > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('have.text', 'Brand - H&M Products');

    });


});