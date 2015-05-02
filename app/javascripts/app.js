'use strict';

window.onload = function () {
  // Game
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;
  game.state.add('play', require('./play'));
  game.state.add('gameover', require('./gameover'));
  game.state.start('play');
};
