/////////////////////////
// New Tweet Creation
/////////////////////////
 
// Helper Function: escape insecure text
const escapeText = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
  
// Format and post new tweet
const formatNewTweet = function() {
  setTimeout(() => {
    $.get( 'http://localhost:8080/tweets', (tweets) => {
      const tweetNumber = tweets.length - 1;
      const newTweet = tweets[tweetNumber];
      const newTweetHtml = createTweetElement(newTweet);
      $( '#tweets-container' ).prepend(newTweetHtml);
    });
  }, 400); // Buffer for network delays
};
