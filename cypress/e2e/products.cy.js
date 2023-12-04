import products from "../pages/Products";
const prd = new products();

describe('Products Page', () => {
    before(() => {
        // we will create a new alias before each test
        cy.clearAllCookies();
    })

    beforeEach(() => {
        cy.visit(Cypress.env('baseurl') + '/products');
        cy.clearAllSessionStorage();
    })

    it('search product', () => {
        prd.verifySearchBarVisibility();
        //search 
        prd.searchAndSubmit('jeans');
        cy.wait(2000);
        //now clear search bar and search
        prd.clearSearchBar();
        prd.searchAndSubmit('tops');
        cy.wait(1000);
    });

    it('View product Category', () => {
        // Selecting Women's category products and verifying the search result
        prd.expandWomenCategory();
        prd.clickWomenDress();
        prd.verifyWomenDressSrchResult();


        prd.expandWomenCategory();
        prd.clickWomenSaree();
        prd.verifyWomenSareeSrchResult();


        prd.expandWomenCategory();
        prd.clickWomenTop();
        prd.verifyWomenTopSrchResult();
        cy.wait(1000);

        //Men's product Category

        prd.expandMenCategory();
        prd.verifyMenTshirtVisibility();
        prd.clickMenTshirt();
        prd.verifyMenTshirtSearchResult();


        prd.expandMenCategory();
        prd.clickMenJeans();
        prd.verifyMenJeansSearchResult();
        cy.wait(1000);


        //Kid's Category Product

        prd.expandKidsCategory();
        prd.clickKidsDress();
        prd.verifyKidsDressSrchResult();


        prd.expandKidsCategory();
        prd.clickKidsTopNShirt();
        prd.verifyKidsTopNShirtSrchResult();
        cy.wait(1000);

    });

    it('Verifying Brands product', () => {
        prd.clickBrandPolo();
        prd.verifyBrandPolo();

        prd.clickBrandHnM();
        prd.verifyBrandHnM();

        prd.clickBrandMadame();
        prd.verifyBrandMadame();

        prd.clickBrandBabyhug();
        prd.verifyBrandBabyhug();

    });

});