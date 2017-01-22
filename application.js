$(document).ready(function(){

  var $body = $('body');
  $body.html('');

  // Place Header
  var $header = $('<h1></h1>');
  $header.text('Twittler');
  $header.appendTo($body);

  // Place refresh Button
  var $refresh = $('<button></button>');
  $refresh.text('Refresh Page');
  $refresh.appendTo($body);

  // Places user input
  var $userInput = $('<input></input>')
  $userInput.attr('type','text');
  $userInput.attr('placeholder', 'Enter your tweet Here');
  $userInput.appendTo($body);

  // Places TweetZone div
  var $tweetZone = $('<div></div>')
  $tweetZone.appendTo($body);

  var timeAtLoad = new Date();

  var getDate = function(date1, date2) {
    if (date1.getDay() === date2.getDay()){
      return date1.getHours() + ':' + date1.getMinutes()
    } else {
      return 'not today!';
    }
  }

  // loads intial tweets?
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '(' + getDate(tweet.created_at, timeAtLoad) + ')');
    $tweet.appendTo($tweetZone);
    index -= 1;
  }

  // button refreshes Tweets to the Tweet Zone! (uses )
  $refresh.on('click', function(){
    $tweetZone.html('');
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '(' + getDate(tweet.created_at, timeAtLoad) + ')');
      $tweet.appendTo($tweetZone);
      index -= 1;
    }
  });

});
