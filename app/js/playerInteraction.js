$(document).ready(function(){
  $('.start-game').append('<div class="start-body"><div class="new-game">New Game</div><div class="tutorial">Tutorial</div><div class="about">About</div></div>');

  $('.new-game').on('click', function() {
    $('.start-game').empty()
    $('.start-game').append('<div class="form-body"><form class="the-form"><fieldset><input class="pname" type="text"><input type="submit" value="Submit"></fieldset></form></div>')
  });
  // newGame()
});
