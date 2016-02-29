$(document).ready(function() {

  // Add main menu

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
      for (var i = 1; i < numberOfPlayers + 1; i++) {
        $('footer').append('<div>Player ' + i + '</div>')
      }
      newGame()
    }

    $('button').on('click', function() {
      mainMenu()
    })

  })()
});
