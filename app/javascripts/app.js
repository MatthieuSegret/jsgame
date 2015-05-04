'use strict';

window.onload = function () {
  // Game
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;
  game.state.add('play', require('./states/play'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('win', require('./states/win'));
  game.state.add('preload', require('./states/preload'));
  game.state.start('preload');
};
