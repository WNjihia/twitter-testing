import Tweet from '../helpers/Tweets.js';
import Auth from '../helpers/Authentication.js';
import Profile from '../helpers/Profile.js';

const tweet = new Tweet();
const auth = new Auth();
const profile = new Profile();

describe('Creating and Deleting Process', () => {
  beforeEach(() => {
      auth.visit();
      auth.login('dorisn172@gmail.com', 'testtest123');
    })

  it('posts a tweet', () => {
    tweet.fillTweetMsg("test");
    cy.screenshot('tweet-to-be-posted', { capture: 'viewport'});
    tweet.submitTweet();
  });

  it('deletes a tweet', () => {
    profile.loadProfile();
    tweet.loadActionsModal();
    tweet.deleteTweet();
    cy.reload();
  });

  it('logs user out successfully', () => {
    profile.loadProfile();
    auth.logout();
    cy.screenshot('logged-out', { capture: 'viewport'});
  });

});
