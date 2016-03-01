$(document).ready(function() {

  // Add main menu
  var p1;
  var p2;
  var p3;
  var p4;

  (function mainMenu() {
    $('.start-game').empty()
    $('.start-game').append('<div class="start-body"><div class="new-game">New Game</div><div class="tutorial">Tutorial</div><div class="about">About</div></div>');


    $('.new-game').on('click', function() {
      $('.start-game').empty()
      $('.start-game').append('<div class="players"><div class="2p">2 Players</div><div class="3p">3 Players</div><div class="4p">4 Players</div></div>')

      $('.2p').on('click', function() {
        gameMultiScore(2)
      })

      $('.3p').on('click', function() {
        gameMultiScore(3)
      })

      $('.4p').on('click', function() {
        gameMultiScore(4)
      })
    });

    function gameMultiScore(numberOfPlayers) {
      $('footer').empty()
      $('.start-game').empty()
      $('.start-game').append('<form><fieldset><legend>Player Names</legend><input class="start" type="submit" value="Start"></fieldset></form>')
      for (var i = 1; i <= numberOfPlayers; i++) {
        $('fieldset').prepend('<label>Player ' + i + '</label><input class="p' + i + 'name" type="text" required>')

      }
      $('.start').on('click', function(e) {
        e.preventDefault()
        $('footer').empty()

        p1 = $('.p1name').val()
        p2 = $('.p2name').val()
        p3 = $('.p3name').val()
        p4 = $('.p4name').val()

        $('footer').append('<div>' + p1 + '</div>')
        $('footer').append('<div>' + p2 + '</div>')
        $('footer').append('<div>' + p3 + '</div>')
        $('footer').append('<div>' + p4 + '</div>')

        $('.start-game').empty()
        newGame()
      })
    }

    $('button').on('click', function() {
      mainMenu()
    })

  })()

  $('.set').on('click', function() {
    $('.screen').remove()
      

  })
});
