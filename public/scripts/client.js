///////////////////////////////////////
// Tweet Creation and Rendering
///////////////////////////////////////

$(document).ready(() => {

  // Submit new tweet
  $( '#submit-tweet' ).submit(function(event) {
    event.preventDefault();
    const $newTweet = $( this ).serialize();
    $.post('/tweets/', $newTweet);
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
                        <span class="created-at">${timeago.format(tweet.created_at)}</span>
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

  // GET and render tweets from in-memory database
  const loadTweets = function() {
    $.get('http://localhost:8080/tweets', ( tweets ) => {
      renderTweets(tweets);
    });
  };

  loadTweets();

});