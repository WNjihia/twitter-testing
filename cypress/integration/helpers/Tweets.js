class Tweet{
  fillTweetMsg(message){
    cy.get('#tweet-box-home-timeline').type(message);
  }

  submitTweet(){
    cy.screenshot('posted-tweet');
    cy.get('.home-tweet-box > .t1-form > .TweetBoxToolbar > .TweetBoxToolbar-tweetButton > .tweet-action').click();
    return this;
  }

  loadActionsModal(){
    cy.get('.js-stream-item').first().find('.tweet > .content > .stream-item-header > .ProfileTweet-action > .dropdown > .ProfileTweet-actionButton > .IconContainer > .Icon').click();
    cy.get('.js-actionDelete > .dropdown-link').click({force: true});
    return this;
  }

  deleteTweet(){
    cy.get('.delete-action', {waitForAnimations: false, force: true}).click();
  }

}

export default Tweet;
