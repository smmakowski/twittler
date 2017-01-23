$(document).ready(function(){

  var $body = $('body');

  // Place refresh Button
  var $refresh = $('<button></button>');
  $refresh.text('Refresh Page');
  $refresh.appendTo($body);

  // Places TweetZone div
  var $tweetZone = $('<div id="tweetZone"></div>')
  $tweetZone.appendTo($body);

  // loads tweets for all users or one user
  function getTweets(user) {

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
      var $username = $('<a class="username"></a>');
      $username.text('@' + tweet.user);
      $username.attr({'href': '#'});

      // make timestamp span
      var $timeStamp = $('<span class="timestamp"></span>');
      $timeStamp.text(' (' + tweet.created_at.toUTCString() + ')');

      $tweet.append($username,' : ' + tweet.message, $timeStamp);
      $tweet.appendTo($tweetZone);
      index -= 1;
    }
  }
  // displays all tweets for page initialization
  getTweets();

  // button refreshes tweets
  $refresh.on('click', function(event){
    getTweets();
  });

  // event handler for username links that displays up to date tweets for user
  $('.username').on('click',function(event){
    event.preventDefault();
    var user = $(this).closest('.tweet').data('username');
    getTweets();
  });
});
