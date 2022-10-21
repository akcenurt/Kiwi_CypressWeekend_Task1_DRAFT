/// <reference types="cypress" />

// var i = 0;
// for (i = 0; i < 10 ; i++) {
  



beforeEach( () => {

    cy.setCookie('__kwc_agreed', 'true')
    
    localStorage.setItem('bookingcom_extension_default', 'false')

    cy.visit("https://www.kiwi.com/");
  
  });

/* Cypress._.times(10, () => { */

describe('kiwi.com', () => {
     
  
it('assert destination, assert sorting by price, run 10 times', () => {

  

//nahrazeno cy.setCookie('__kwc_agreed', 'true') v beforeEach
/*     cy.get("#cookies_accept")
    .click() */
  

    cy.get("input")
    .eq(1)
    .type("Dublin{enter}")

    cy.contains("Dublin, Ireland")
    .click()

    cy.get("[data-test='PassengersField']")
    .click()

    cy.get("[data-test='PassengersRow-adults'] button")
    .eq(1)
    .click()

    cy.get("[data-test='PassengersFieldFooter-done']")
    .click()

    cy.get('[data-test="PassengersField-note-2"]')
    .should('contain.text', '2')
    .log('right number of passengers added')

    // nahrazeno localStorage.setItem('bookingcom_extension_default', 'false') v beforeEach
    /* cy.get(".Checkbox__Label-sc-1xqef2c-5 input")
    .uncheck({force: true}) */

    cy.get("[data-test='LandingSearchButton']")
    .click()

    cy.url().then(kiwiUrl => {
      expect(kiwiUrl).contains("kiwi.com")
    })
    .log("staying at kiwi.com verified")



    cy.get("[data-test='SortBy-price']")
    .click()

    // asserting destination:

    cy.get('span[class*="StopPlace"]')
   /*  cy.get(".ResultCardItineraryPlacestyled__StyledResultCardItineraryPlace-sc-1ekdizc-5") */
    .eq(1)
    .should("contain.text", "Dublin")
    .log("destination Dublin verified")

    // asserting right sorting enabled:


    cy.url().then(sortingByPriceUrl => {
      expect(sortingByPriceUrl).contains("sortBy=price")
    })
    .log("right sorting enabled verified")
    // <- nahrazuje
    /* cy.get("[data-test='SortBy-price']")
    .should("have.class", "dPbpJd") */

    cy.get("[data-test='BookingButton']")
    .eq(0)
    .click()
  
  })

});

/* }); */

  // }