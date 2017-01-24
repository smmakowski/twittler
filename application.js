$(document).ready(function(){

  var $body = $('body');
  var $refresh = $('button');
  var $tweetZone = $('#tweetZone');
  var $input = $('input');

  function getTweets(user) {

    if (user === undefined) {
      user = streams.home;
    } else {
      user = streams.users[user];
    }

    $tweetZone.html('<h4>What\'s been going on?</h4>');

    var index = user.length - 1;

    while(index >= 0){
      var tweet = user[index];
      var $tweet = $('<div class="tweet"></div>');

      // make user link
      var $username = $('<a class="username"></a>');
      $username.text('@' + tweet.user);
      $username.attr({'href': '#'});
      $username.data('username', tweet.user);

      // make timestamp span
      var $timeStamp = $('<span class="timestamp"></span>');
      $timeStamp.text(' (' + tweet.created_at.toUTCString() + ')');

      // create the tweet and add it to the feed
      $tweet.append($username,' : ' + tweet.message, $timeStamp);
      $tweet.appendTo($tweetZone);
      index -= 1;
    }

    // update tweet feed/show tweets for all
    $refresh.on('click', function(event){
      getTweets();
    });

    //show user feed when link is pressed
    $('.username').on('click',function(event){
      event.preventDefault();
      var user = $(this).data('username');
      getTweets(user);
    });
  }

  //load some inital tweets
  getTweets();
});
