class Auth{
  visit(){
    cy.visit('https://twitter.com', {force:true});
  }

  loadAuthenticationPage(){
    cy.get('.StaticLoggedOutHomePage-buttons').find('.StaticLoggedOutHomePage-buttonLogin').click();

    return this;
  }

  fillUsername(username){
    cy.get('.js-username-field').type(username);
  }

  fillPassword(password){
    cy.get('.js-password-field').type(password);
  }

  submitLoginForm(){
    cy.get(':nth-child(3) > .submit').click();

    return this;
  }

  login(username, password){
    this.loadAuthenticationPage();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submitLoginForm();
  }

  logout(){
    cy.get('#user-dropdown-toggle').click();
    cy.get('.js-signout-button > .dropdown-link').click({force: true});
    cy.screenshot('logged-out');
  }
}

export default Auth;