class HomePage {
    static countryDropdown() {
      return cy.get('.sr-only');
    }
  
    static countrySelection() {
      return cy.get('region-0');
    }

    static languageSelection(){
        return cy.get('.row w-100');
    }

    static popupAgreeBtn(){
        return cy.get('.call');
    }

}
export default HomePage;