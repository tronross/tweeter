///////////////////////////////////////
// Client Event Listeners and Logic
///////////////////////////////////////

$(document).ready(() => {

  // submit new tweet
  $( '#submit-tweet' ).submit(function(event) {
    event.preventDefault();
    const $newTweet = $( this ).serialize();
    const $tweetLength = decodeURIComponent($newTweet).length;
    // error-dialog handling
    if ($newTweet === 'text=' || $newTweet === null || $tweetLength >= 146) {
      if ($tweetLength >= 146) {
        $( '#error-dialog' ).text('Tweets over 140 characters are not allowed!');
      } else {
        $( '#error-dialog' ).text('Empty tweets are not allowed!');
      };
      // animation
      $( '#error-dialog' ).slideDown('fast', () => {
        $( '#error-dialog' ).removeClass( '.hidden' );
        $( 'button' ).click(() => {
          $( '#error-dialog' ).slideUp('fast', () => {
            $( '#error-dialog' ).addClass('.hidden');
          });
        });
      });
    } else {
      // success: post tweet
      $.post('/tweets/', $newTweet);
      $('form').trigger('reset');
      formatNewTweet();
    }
  });

  loadTweets();

});
