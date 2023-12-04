export default class ContactUs {
    clickContactUs() {
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
        cy.get('.col-sm-12 > .title').should('have.text', 'Contact Us');
    }

    typeName(username) {
        cy.get('[data-qa="name"]').type(username);
    }

    typeEmail(email) {
        cy.get('[data-qa="email"]').type(email);
    }

    typeSubject(subject) {
        cy.get('[data-qa="subject"]').type(subject);
    }

    typeMessage(message) {
        cy.get('[data-qa="message"]').type(message);
    }

    attachFile(file) {
        cy.get(':nth-child(6) > .form-control').attachFile(file);
    }

    clickSubmit() {
        cy.get('[data-qa="submit-button"]').click();
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    }

    clickHome() {
        cy.get('span').click();
    }

};