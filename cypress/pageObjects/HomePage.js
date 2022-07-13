import BasePage from "./basePage";

class HomePage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/";
  }

  static get brands() {
    return cy.get('.lnkLevel2').contains("Brands");
  }

  


}

export default HomePage;