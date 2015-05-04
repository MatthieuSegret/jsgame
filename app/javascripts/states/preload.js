'use strict';

// Preload
function Preload() {}

Preload.prototype = {
  preload: function() {
    this.game.load.image('background', '../images/background.png');
    this.game.load.image('player', 'images/player.png');
    this.game.load.image('ruby', 'images/ruby.png');
    this.game.load.image('ghost1', 'images/ghost1.png');
    this.game.load.image('ghost2', 'images/ghost2.png');
    this.game.load.image('ghost3', 'images/ghost3.png');
    this.game.load.image('dark_knight', 'images/dark_knight.png');
    this.game.load.image('hornet', 'images/hornet.png');
    this.game.load.image('undead', 'images/undead.png');
    this.game.load.image('cactuar', 'images/cactuar.png');
  },

  create: function() {
    this.game.state.start('play');
  },

  update: function() {

  }
};

module.exports = Preload;
