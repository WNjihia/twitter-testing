class Profile{
  loadProfile(){
    cy.get(':nth-child(1) > .ProfileCardStats-statLink > .ProfileCardStats-statLabel').click({force:true});
    return this;
  }
}

export default Profile;
