///////////////////////////////////////
// Tweet Creation and Rendering
///////////////////////////////////////

// Helper Function: escape insecure text
const escapeText = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(() => {

  // Submit new tweet
  $( '#submit-tweet' ).submit(function(event) {
    event.preventDefault();
    const $newTweet = $( this ).serialize();
    const $tweetLength = decodeURIComponent($newTweet).length;
    // error-dialog handling
    if ($newTweet === "text=" || $newTweet === null || $tweetLength >= 146) {
      if ($tweetLength >= 146) {
        $( '#error-dialog' ).text('Tweets over 140 characters are not allowed!');
      } else {
        $( '#error-dialog' ).text('Empty tweets are not allowed!');
      };
      // animation
      $( '#error-dialog' ).slideDown("fast", () => {
        $( '#error-dialog' ).removeClass( '.hidden' );
        $( 'button' ).click(() => {
          $( '#error-dialog' ).slideUp("fast", () => {
            $( '#error-dialog' ).addClass( '.hidden' );
          });
        });
      });
    } else {
      // success: post tweet
      $.post('/tweets/', $newTweet);
      $("form").trigger("reset");
      formatNewTweet();
    }
  });

  // Format and post new tweet
  const formatNewTweet = function() {
    setTimeout(() => {
      $.get('http://localhost:8080/tweets', ( tweets ) => {
        const tweetNumber = tweets.length - 1;
        const newTweet = tweets[tweetNumber];
        const newTweetHtml = createTweetElement(newTweet);
        $('#tweets-container').prepend(newTweetHtml);
      });
    }, 400); // Buffer for network delays
  };
    

  // Render Feed
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };

  // Render tweet HTML
  const createTweetElement = function(tweet) {
    const escapedTweet = escapeText(tweet.content.text);

    const $tweet = `
                    <article class="tweet">
                      <header>
                        <section class="tweeter-profile">
                          <img class="avatar" src=${tweet.user.avatars} alt="avatar">
                          <span class="tweeter-name">${tweet.user.name}</span>
                        </section>
                        <span class="handle">${tweet.user.handle}</span>
                      </header>
                      <p class="tweet-body">${escapedTweet}</p>
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