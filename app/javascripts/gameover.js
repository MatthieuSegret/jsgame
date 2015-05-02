'use strict';

// Load
function GameOver() {};

GameOver.prototype = {
  preload: function() {

  },

  create: function() {
    var style = { font: 'bold 55px Arial', fill: '#ffff00', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX, 275, 'Game Over', style);
    this.titleText.anchor.setTo(0.5, 0.5);
  },

  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = GameOver;
