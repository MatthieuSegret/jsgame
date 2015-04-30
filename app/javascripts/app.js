'use strict';

window.onload = function () {
  // Game
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;
  game.state.add('load', require('./load'));
  game.state.start('load');
};
