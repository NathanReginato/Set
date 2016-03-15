# The game SET!

I have always loved card games since I was a kid. One of my favorites to this day is the game set. Set is a pattern matching card game. A set is three cards that have four attributes that are compared to one other. If each attribute of each card either matches or is different than the other two cards, it's a set. There is a link on the site that leads to the official website which explains the game in more detail. When you see a set click the set button at the top of the screen.

## Technologies

* All logic is written in Javascript
* I used jQuery for DOM manipulation
* For the design, I used SASS and bootstrap
* I integrated the Facebook api to allow sharing

## Features

* I drew each symbol myself using scalable vector graphics (SVG).
* I only created three symbols total which are styled as they are appended to the screen using css.
* The game randomly generates every possible card combination each game.
* The game has a small chance of having zero possible sets. I Have compensated for this by checking every possible card combination on the board at any given time and automatically drawing more cards when needed.
* I used local storage to permanently save high scores at the end of each game.
