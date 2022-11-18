/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {
  let $tweet = `
                  <article class="tweet">
                    <header>
                      <section class="tweeter-profile">
                        <img class="avatar" src=${tweet.user.avatars} alt="avatar">
                        <span class="tweeter-name">${tweet.user.name}</span>
                      </section>
                      <span class="handle">${tweet.user.handle}</span>
                    </header>
                    <p class="tweet-body">${tweet.content.text}</p>
                    <footer>
                      <span class="created-at">${tweet.created_at}</span>
                        <span>
                          <i class="fa-solid fa-flag"></i>
                          <i class="fa-solid fa-retweet"></i>
                          <i class="fa-solid fa-heart"></i>
                        </span>
                    </footer>
                  </article>
                `;
  
return $tweet;
};

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
console.log($('#tweets-container'));
$(document).ready(() => {
$('#tweets-container').append($tweet)}); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

