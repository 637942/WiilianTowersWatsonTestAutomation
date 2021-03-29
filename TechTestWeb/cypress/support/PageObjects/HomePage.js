class HomePage {
    static countryDropdown() {
      return cy.get('[data-eventaction="Country Site Menu Opened"]');
    }
  
    static countrySelection() {
      return cy.get('#region-0 > .material-icons');
    }

    static languageSelection(){
        return cy.get('#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5')
    }

    static popupAgreeBtn(){
        return cy.get('.call');
    }

    static searchBtn(){
      return cy.get('.site-nav__btn--search-menu').find('.site-nav__btn__label');
    }

    static searchInput(){
      return cy.get('input');
    }

    static search(){
      return cy.get('.CoveoSearchButton.coveo-accessible-button');
    }

    static resultsHeading(){
      return cy.get('span.CoveoQuerySummary').find('span');
    }

}
export default HomePage;