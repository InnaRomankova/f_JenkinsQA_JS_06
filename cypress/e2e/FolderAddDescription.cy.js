/// <reference types="cypress"/>

describe('Folder > Add User description with "Add description" button', () => {
  let textDescription = "User description";

  afterEach(() => {
    cy.get("#description-link").click();
    cy.get(".jenkins-input").type("{selectall}").type("{backspace}");
    cy.get(".jenkins-button").click();
  });
  
      it('TC 15.02_003 Add description', () => {
        cy.get('.task-link').eq(1).click();
        cy.get('.jenkins-table__link').click();
        cy.get('#description-link').click();
        cy.get('.jenkins-input').clear().type('Hello world!');
        cy.get('.jenkins-button').click();
        cy.get('#description > :nth-child(1)').should('contain', 'Hello world!');
    })

  it("AT 15.02.001 | Add User description", function () {
    cy.get("a.task-link").eq(1).click();
    cy.get(".jenkins-table__link").first().click();
    cy.get("#description-link").click();
    cy.get(".jenkins-input").type("{selectall}").type(textDescription);
    cy.get(".jenkins-button").click();
    cy.get("#description div:nth-of-type(1)").should(
      "have.text",
      textDescription
    );
  });
});


