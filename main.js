'use strict';

window.onload = function () {
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'jsgame');
  game.transparent = true;

  function Load() {}
  Load.prototype = {
    preload: function() {

    },

    create: function() {

    },

    update: function() {

    }
  };

  game.state.add('load', Load);
  game.state.start('load');
};
