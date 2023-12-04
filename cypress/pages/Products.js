export default class products {
    verifySearchBarVisibility() {
        cy.get('#search_product').should('be.visible');
    }

    searchAndSubmit(desiredSearch) {
        cy.get('#search_product').type(desiredSearch);
        cy.get('#submit_search').click();
    }

    clearSearchBar() {
        cy.get('#search_product').clear();
    }

    expandWomenCategory() {
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click();
    }

    clickWomenDress() {
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
    }

    verifyWomenDressSrchResult() {
        cy.get('.title').should('have.text', 'Women - Dress Products');
    }

    clickWomenTop() {
        cy.get('#Women > .panel-body > ul > :nth-child(2) > a').click();
    }

    verifyWomenTopSrchResult() {
        cy.get('.title').should('have.text', 'Women - Tops Products');
    }

    clickWomenSaree() {
        cy.get('.panel-body > ul > :nth-child(3) > a').click();
    }

    verifyWomenSareeSrchResult() {
        cy.get('.title').should('have.text', 'Women - Saree Products');
    }

    expandMenCategory() {
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
    }

    verifyMenTshirtVisibility() {
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').should('be.visible');
    }

    clickMenTshirt() {
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
    }

    verifyMenTshirtSearchResult() {
        cy.get('.title').should('have.text', 'Men - Tshirts Products');
    }

    clickMenJeans() {
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click();
    }

    verifyMenJeansSearchResult() {
        cy.get('.title').should('have.text', 'Men - Jeans Products');
    }

    expandKidsCategory() {
        cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge').click();
    }

    clickKidsDress() {
        cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').click();
    }

    verifyKidsDressSrchResult() {
        cy.get('.title').should('have.text', 'Kids - Dress Products');
    }

    clickKidsTopNShirt() {
        cy.get('#Kids > .panel-body > ul > :nth-child(2) > a').click();
    }

    verifyKidsTopNShirtSrchResult() {
        cy.get('.title').should('have.text', 'Kids - Tops & Shirts Products');
    }

    clickBrandPolo() {
        cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    }

    verifyBrandPolo() {
        cy.get('.title').should('have.text', 'Brand - Polo Products');
    }

    clickBrandHnM() {
        cy.get('.brands-name > .nav > :nth-child(2) > a').click();
    }

    verifyBrandHnM() {
        cy.get('.title').should('have.text', 'Brand - H&M Products');
    }

    clickBrandMadame() {
        cy.get('.brands-name > .nav > :nth-child(3) > a').click();
    }

    verifyBrandMadame() {
        cy.get('.title').should('have.text', 'Brand - Madame Products');
    }

    clickBrandBabyhug() {
        cy.get('.brands-name > .nav > :nth-child(5) > a').click();
    }

    verifyBrandBabyhug() {
        cy.get('.title').should('have.text', 'Brand - Babyhug Products');
    }

};