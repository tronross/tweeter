$(document).ready(function(event) {
  $('#tweet-text').on('input', function(event){
    const tweetText = $( this ).val();
    const count = 140 - tweetText.length;
    let counterNode = $( this ).parent().children('#submit-counter').children('.counter');
    
    if (count < 0) {
      $( counterNode ).css({ color: 'red' });
    } else {
      $( counterNode ).css({ color: 'black' });
    }
    counterNode.text(count);
  })
});