(function() {
  var generateQuote, quotes, said, speaker;

  speaker = '';

  said = '';

  quotes = [
    {
      quote: "I have no special talents. I am only passionately curious. ",
      character: "Albert Einstein"
    }, {
      quote: "Work is the only thing that gives substance to life.",
      character: "Albert Einstein"
    }, {
      quote: " Those who look for the bad in people will surely find it.",
      character: "Abraham Lincoln"
    }, {
      quote: "Be sure you put your feet in the right place, then stand firm. ",
      character: "Abraham Lincoln"
    }, {
      quote: " Great dreams of great dreamers are always transcended. ",
      character: "Abdul Kalam"
    }, {
      quote: "Dream, Dream, Dream, Dreams transform into thoughts And thoughts result in action. ",
      character: "Abdul Kalam"
    }, {
      quote: " Make the lie big, make it simple, keep saying it, and eventually they will believe it.",
      character: "Adolf Hitler"
    }, {
      quote: "Balance of mind is called Yoga.",
      character: "Bhagwad Gita"
    }, {
      quote: "I find your lack of faith disturbing.",
      character: "Darth Vader"
    }, {
      quote: " You will not be punished for your anger, you will be punished by your anger.",
      character: "Buddha"
    }, {
      quote: "Three things cannot be long hidden: the sun, the moon, and the truth.",
      character: "Buddha"
    }, {
      quote: "Guests, like fish, begin to smell after three days.",
      character: "Benjamin Franklin"
    }, {
      quote: "Having been poor is no shame, but being ashamed of it, is. ",
      character: "Benjamin Franklin"
    }, {
      quote: "Be nice to nerds. Chances are you'll end up working for one.",
      character: "Bill Gates"
    }, {
      quote: "You'll never find a rainbow if you're looking down.",
      character: "Charlie Chaplin "
    }
  ];

  generateQuote = function() {
    var randomQuote;
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    if (randomQuote.quote.length + randomQuote.character.length > 97) {
      return generateQuote();
    } else {
      $('.quote').text(randomQuote.quote);
      $('.character').text(randomQuote.character);
      said = randomQuote.quote.split(' ').join('%20');
      return speaker = randomQuote.character.split(' ').join('%20');
    }
  };

  $(document).ready(function() {
    $('.btn-tweet').hide();
    return $('.btn-force').on('click', function() {
      generateQuote();
      $('.twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + speaker + '%20said,%20"' + said + '"%20%23StarWars%20https://goo.gl/MOxWg1');
      return $('.btn-tweet').show();
    });
  });

}).call(this);
