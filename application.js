$(document).ready(function(){

  var $body = $('body');

  // Place refresh Button
  var $refresh = $('<button></button>');
  $refresh.text('Refresh Page');
  $refresh.appendTo($body);

  // Places TweetZone div
  var $tweetZone = $('<div id="tweetZone"></div>')
  $tweetZone.appendTo($body);

  // loads intial tweets?
  function getTweets(user) {
    //clear the tweetzone
    if (user === undefined) { // if no argument is passed user is all users
      user = streams.home;
    } else {
      user = streams.users[user]; // user is the user who is passed in
    }

    $tweetZone.html('');

    var index = user.length - 1;

    while(index >= 0){
      var tweet = user[index];
      var $tweet = $('<div class="tweet"></div>');
      $tweet.data('username', tweet.user);

      // make user link
      var $username = $('<a></a>');
      $username.text('@' + tweet.user);
      $username.attr({'href': ''});
      $username.addClass('username');

      // make timestamp span
      var $timeStamp = $('<span class="timestamp"></span>');
      $timeStamp.text(' (' + tweet.created_at.toUTCString() + ')');

      $tweet.append($username,' : ' + tweet.message, $timeStamp);
      $tweet.appendTo($tweetZone);
      index -= 1;
    }
  }

  getTweets('sharksforcheap');
  // button refreshes tweets

  $refresh.on('click', function(){
    getTweets();
  });

});
