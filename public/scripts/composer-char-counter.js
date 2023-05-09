/////////////////////////////////////////
// Tweet Composition Character Counter
/////////////////////////////////////////

// Count and display remaining characters while composing tweet
$(document).ready(function(event) {
  $( '#tweet-text' ).on('input', function(event) {
    const tweetText = $( this ).val();
    let count = 140 - tweetText.length;
    const counterNode = $( this ).parent().children('#submit-counter').children('.counter');

    // reset counter on tweet submit
    $( '#submit-tweet' ).submit(function() {
      event.preventDefault();
      count = 140;
      $( counterNode ).text(count);
    });

    if (count < 0) {
      $( counterNode ).css({ color: 'red' });
    } else {
      $( counterNode ).css({ color: 'black' });
    }
    counterNode.text(count);
  });
});
