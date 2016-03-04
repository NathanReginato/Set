$(document).ready(function() {

  //Append main menu

  (function mainMenu() {
    console.log($(window).width());

    $('.start-game').empty()
    $('.start-game').append('<div class="start-body"><div class="p-padding"><a href="#"><div class="new-game">New Game</div></a><a href="#"><div class="tutorial">Tutorial</div></a><a href="#"><div class="highscore">High score</div></a></div></div>');

    //Get player names

    $('.new-game').on('click', function() {
      $('.start-game').empty()
      $('.start-game').append('<div class="players"><div class="p-padding"></div></div>')

      //Player select

      for (var i = 2; i < 5; i++) {
        $('.p-padding').append('<a href="#"><div class="' + i + 'p">' + i + ' Players</div></a>')
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
      $('.screen').hide()
      $('.start-game').empty()
      $('.start-game').append('<form class="names-form"><fieldset><legend><h3>Player Names</h3></legend><<input class="start" type="submit" value="Start"></fieldset></form>')

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
          $('footer').append('<h3>' + nameArr[i] + ': <span class="p' + (i + 1) + 'score"></span></h3>')
        }

        $('.start-game').empty()
        newGame()
        $('.screen').show()
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
          $('.screen').hide()
          $('.main-menu').hide()
        });
        $('.ip2').on('click', function() {
          driver = 1
          $('.start-game').empty()
          $('.screen').hide()
          $('.main-menu').hide()
        });
        $('.ip3').on('click', function() {
          driver = 2
          $('.start-game').empty()
          $('.screen').hide()
          $('.main-menu').hide()
        });
        $('.ip4').on('click', function() {
          driver = 3
          $('.start-game').empty()
          $('.screen').hide()
          $('.main-menu').hide()
        });
      })
    }

    //Main menu click event

    $('.main-menu').on('click', function() {
      $('.screen').show();
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
    $('.not-flash').hide()
    $('.flash').hide()


  })()

});
