'use strict';

window.onload = function () {
  // Game
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;
  game.state.add('play', require('./states/playState'));
  game.state.add('gameover', require('./states/gameoverState.js'));
  game.state.add('win', require('./states/winState.js'));
  game.state.start('play');
};
