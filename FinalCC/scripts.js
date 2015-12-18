
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('someShit');
          console.log("Working");
    });


var random = Math.random();
  console.log(random);

  var randomRound = Math.random() * 100;
  console.log(randomRound);

  var randomRound = Math.ceil(Math.random() * 100);
  console.log(randomRound);

  $('body').css('overflow', 'hidden');

  var makeCircles = function() {

    var quantity = 20;
    for (var i = 0; i < quantity; i++) {
      $('body').append('<div class="circle randomize"></div>');
    }

  }

  makeCircles();
});
