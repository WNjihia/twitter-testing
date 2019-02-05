class Tweet{
  fillTweetMsg(message){
    cy.get('#tweet-box-home-timeline').type(message);
  }

  submitTweet(){
    cy.get('.home-tweet-box > .t1-form > .TweetBoxToolbar > .TweetBoxToolbar-tweetButton > .tweet-action').click();

    return this;
  }

  loadActionsModal(){
    cy.get('.js-stream-item').first().find('.tweet > .content > .stream-item-header > .ProfileTweet-action > .dropdown > .ProfileTweet-actionButton > .IconContainer > .Icon').click();
    cy.get('.js-actionDelete > .dropdown-link').click();
    return this;
  }

  deleteTweet(){
    // cy.screenshot('deleting tweet');
    cy.get('.delete-action', {waitForAnimations: false, force: true}).click();
  }

}

export default Tweet;
