$(document).ready(function() {

  //Append main menu

  (function mainMenu() {
    $('.start-game').empty()
    $('.start-game').append('<div class="start-body"><a href="#"><div class="new-game">New Game</div></a><a href="#"><div class="tutorial">Tutorial</div></a><a href="#"><div class="highscore">High score</div></a></div>');

    //Get player names

    $('.new-game').on('click', function() {
      $('.start-game').empty()
      $('.start-game').append('<div class="players"></div>')

      //Player select

      for (var i = 2; i < 5; i++) {
        $('.players').append('<a href="#"><div class="' + i + 'p">' + i + ' Players</div></a>')
      }


      // $('.1p').on('click', function() {
      //   gameMultiScore(1)
      // })

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
      $('.start-game').append('<form class="names-form"><fieldset><legend>Player Names</legend><input class="start" type="submit" value="Start"></fieldset></form>')

      for (var i = 1; i <= numberOfPlayers; i++) {
        $('fieldset').prepend('<input class="p' + i + 'name" type="text" name="player" placeholder="Player' + i + '" required>')
      }

      //Form

      $('.names-form').submit(function(e) {
        e.preventDefault()
        $('footer').empty()

        //Get name values

        p1name = $('.p1name').val()
        p2name = $('.p2name').val()
        p3name = $('.p3name').val()
        p4name = $('.p4name').val()

        nameArr = [p1name, p2name, p3name, p4name]

        //Append names to footer

        for (var i = 0; i < numberOfPlayers; i++) {
          $('footer').append('<h4>' + nameArr[i] + ': <span class="p' + (i + 1) + 'score"></span></h4>')
        }

        $('.start-game').empty()
        newGame()
      })

      //Set!

      $('.set').on('click', function() {

        $('.start-game').empty()
        $('.start-game').append('<div class="whosaw"><h1>Who saw it?</h1></div>')

        for (var i = 0; i < numberOfPlayers; i++) {
          $('.whosaw').append('<a href="#"><div class="ip' + (i + 1) + '">' + nameArr[i] + '</div></a>')
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

    //Main menu click event

    $('.main-menu').on('click', function() {
      $('.container').prepend('<div class="screen"></div>');
      mainMenu()
    })

    //highScore page

    $('.highscore').on('click', function() {
      $('.start-game').empty()
      $('.start-game').append('<div class="hscore-container"><h1>High Scores!</h1></div>')
      highPage()
      for (var i = 0; i < 5; i++) {
        if (showScore[i]) {
          $('.hscore-container').append('<div>' + showScore[i] + '<div>')
        } else {
          $('.hscore-container').append('<div>-<div>')
        }
      }
    })

    $('.screen').on('click', function() {
      $('.start-game').empty()
      $('.set').show()
    });

    $('.set').hide()
  })()
});
