///////////////////////////////////////
// Tweet Creation and Rendering 
///////////////////////////////////////

$(document).ready(() => {

  // Submit new tweet
  $( "#submit-tweet" ).submit(function( event ) {
    event.preventDefault();
    console.log(event);
    const $newTweet = $( this ).serialize();
    console.log($newTweet);
  });




  // Render Feed
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  // Render tweet HTML
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
  renderTweets(data);

 



});





// Test / driver code (temporary). Eventually will get this from the server.
const data = [

  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1668641683548
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis. Amirite?"
    },
    "created_at": 1668728083548
  },
  {
    "user": {
      "name": "Barlon",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@smellycastle"
    },
    "content": {
      "text": "Where the kibs at?"
    },
    "created_at": 1665728083548
  }

];
