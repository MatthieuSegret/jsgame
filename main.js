'use strict';

window.onload = function () {
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;

  function Load() {}
  Load.prototype = {
    preload: function() {
      this.game.load.image('background', 'images/background.png');
    },

    create: function() {
      this.game.add.sprite(0, 0, 'background');
    },

    update: function() {

    }
  };

  game.state.add('load', Load);
  game.state.start('load');
};
