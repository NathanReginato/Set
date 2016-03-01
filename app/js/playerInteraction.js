$(document).ready(function() {

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

      var nameArr = []

      $('footer').empty()
      $('.start-game').empty()
      $('.start-game').append('<form><fieldset><legend>Player Names</legend><input class="start" type="submit" value="Start"></fieldset></form>')
      for (var i = 1; i <= numberOfPlayers; i++) {
        $('fieldset').prepend('<label>Player ' + i + '</label><input class="p' + i + 'name" type="text" required>')

      }
      $('.start').on('click', function(e) {
        e.preventDefault()
        $('footer').empty()

        p1name = $('.p1name').val()
        p2name = $('.p2name').val()
        p3name = $('.p3name').val()
        p4name = $('.p4name').val()

        nameArr = [p1name, p2name, p3name, p4name]

        for (var i = 0; i < numberOfPlayers; i++) {
          $('footer').append('<h4>' + nameArr[i] + ' <span class="p' + (i + 1) + 'score"></span></h4>')
        }

        $('.start-game').empty()
        newGame()
      })


      $('button').on('click', function() {
        mainMenu()
      })

      $('.set').hide()

      $('.set').on('click', function() {

        $('.start-game').empty()
        $('.start-game').append('<h1>Who saw it?</h1>')

        for (var i = 0; i < numberOfPlayers; i++) {
          $('.start-game').append('<div class="ip1">' + nameArr[i] + '</div>')
        }

        $('.ip1').on('click', function() {
          driver = 0
          $('.start-game').empty()
          $('.screen').remove()
        });
        $('.ip2').on('click', function() {
          driver = 1
          $('.start-game').empty()
          $('.screen').remove()
        });
        $('.ip3').on('click', function() {
          driver = 2
          $('.start-game').empty()
          $('.screen').remove()
        });
        $('.ip4').on('click', function() {
          driver = 3
          $('.start-game').empty()
          $('.screen').remove()
        });
      })
    }
  })()
});
